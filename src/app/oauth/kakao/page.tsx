"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

const KakaoRedirect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) {
      console.error("Search parameters are null");
      router.push("/login");
      return;
    }

    const code = searchParams.get("code");
    console.log("Code:", code);

    if (!code) {
      console.error("No code found");
      router.push("/login");
      return;
    }

    const fetchToken = async () => {
      try {
        const response = await axios.post("/apis/accounts/kakao/signin", {
          code,
        });
        console.log("Response:", response.data); // 응답 데이터 로그
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
