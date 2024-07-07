"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import axios from "axios";
import Loading from "../../../components/Loading";
import { Suspense } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

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
        console.log(process.env.BACKEND_HOSTNAME);
        const response = await axios.get(
          `${process.env.BACKEND_HOSTNAME}/accounts/kakao/signin?code=${code}`
        );
        console.log("Response:", response.data);
        const { token } = response.data;
        localStorage.setItem("token", token);
        if (window.innerWidth <= 768) {
          MySwal.fire({
            icon: "success",
            title: "로그인 성공",
            text: "성공적으로 로그인되었습니다!",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            customClass: {
              popup: "swal-custom-popup",
              title: "swal-custom-title",
              htmlContainer: "swal-custom-html-container",
            },
          });
        } else {
          MySwal.fire({
            icon: "success",
            title: "로그인 성공",
            text: "성공적으로 로그인되었습니다!",
            confirmButtonText: "확인",
            confirmButtonColor: "#FF812E",
            customClass: {
              popup: "swal-custom-popup",
              title: "swal-custom-title",
              htmlContainer: "swal-custom-html-container",
            },
          });
        }
        router.push("/");
      } catch (error) {
        console.error("로그인 실패", error);
        if (window.innerWidth <= 768) {
          MySwal.fire({
            icon: "error",
            title: "로그인 실패",
            text: "이메일 또는 비밀번호가 잘못되었습니다.",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            customClass: {
              popup: "swal-custom-popup",
              title: "swal-custom-title",
              htmlContainer: "swal-custom-html-container",
            },
          });
        } else {
          MySwal.fire({
            icon: "error",
            title: "로그인 실패",
            text: "이메일 또는 비밀번호가 잘못되었습니다.",
            confirmButtonText: "확인",
            confirmButtonColor: "#FF812E",
            customClass: {
              popup: "swal-custom-popup",
              title: "swal-custom-title",
              htmlContainer: "swal-custom-html-container",
            },
          });
        }
        router.push("/signin");
      }
    };

    fetchToken();
  }, [searchParams, router]);

  return <Loading />;
};

const KakaoRedirectWrapper = () => {
  return (
    <Suspense fallback={<Loading />}>
      <KakaoRedirect />
    </Suspense>
  );
};

export default KakaoRedirectWrapper;
