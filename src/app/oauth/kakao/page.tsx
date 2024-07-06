"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import axios from "axios";

const KakaoRedirect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isRequestSent = useRef(false);

  useEffect(() => {
    if (!searchParams) {
      console.error("Search parameters are null");
      router.push("/");
      return;
    }

    const code = searchParams.get("code");
    console.log("Code:", code);

    if (!code) {
      console.error("No code found");
      router.push("/");
      return;
    }

    const fetchToken = async () => {
      if (isRequestSent.current) return;

      try {
        isRequestSent.current = true;
        const response = await axios.get(
          `http://143.248.195.71:8080/accounts/kakao/signin?code=${code}`
        );
        console.log("Response:", response.data);
        const { token } = response.data;
        localStorage.setItem("token", token);
        router.push("/signin");
      } catch (error) {
        console.error("로그인 실패", error);
        router.push("/");
      }
    };

    fetchToken();
  }, [searchParams, router]);

  return <div>로그인 중...</div>;
};

export default KakaoRedirect;
