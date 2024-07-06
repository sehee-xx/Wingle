"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import axios from "axios";
import Loading from "../../../components/Loading";
import { Suspense } from "react";

const GoogleRedirect = () => {
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
          `${process.env.BACKEND_HOSTNAME}/accounts/google/signin?code=${code}`
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

  return <Loading />;
};

const GoogleRedirectWrapper = () => {
  return (
    <Suspense fallback={<Loading />}>
      <GoogleRedirect />
    </Suspense>
  );
};

export default GoogleRedirectWrapper;
