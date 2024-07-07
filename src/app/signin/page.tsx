// src/app/login/page.tsx

"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../styles/sweetalert.css";

const MySwal = withReactContent(Swal);

const Signin = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogoClick = () => {
    router.push("/"); // 홈 페이지로 이동
  };

  const handleSigninClick = async () => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_HOSTNAME}/accounts/signin`,
        {
          email,
          password,
        }
      );
      console.log("Signin response: ", response.data);
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
    }
  };

  const handleSignupClick = () => {
    router.push("/signup");
  };

  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`;
    window.location.href = kakaoAuthUrl;
  };

  const handleGoogleLogin = () => {
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=openid%20profile%20email`;
    window.location.href = googleAuthUrl;
  };

  if (!mounted) return null;

  return (
    <LoginWrapper>
      <LoginBox>
        <Logo onClick={handleLogoClick} src="/assets/logo.svg" alt="Logo" />
        <LoginInputGroup>
          <LoginLabel>이메일</LoginLabel>
          <LoginInput
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></LoginInput>
        </LoginInputGroup>
        <LoginInputGroup>
          <LoginLabel>비밀번호</LoginLabel>
          <LoginInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></LoginInput>
        </LoginInputGroup>
        <LoginInputGroup>
          <LoginButton onClick={handleSigninClick}>로그인</LoginButton>
        </LoginInputGroup>
        <SocialLoginGroup>
          <LoginLabel>소셜 로그인</LoginLabel>
          <KakaoLogin onClick={handleKakaoLogin}>
            <KakaoIcon src="/assets/kakao.svg" />
            카카오톡으로 시작
          </KakaoLogin>
          <GoogleLogin onClick={handleGoogleLogin}>
            <GoogleIcon src="/assets/google.png" />
            구글 이메일로 시작
          </GoogleLogin>
        </SocialLoginGroup>
        <SocialLoginGroup>
          <LoginLabel>아직 회원이 아니라면?</LoginLabel>
          <GotoSignup onClick={handleSignupClick}>Wingle 가입하기</GotoSignup>
        </SocialLoginGroup>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Signin;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;
  background-image: url("/assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 50px 0px;
  }

  @media (max-width: 480px) {
    padding: 0px 0px;
  }
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 600px;
  padding: 30px 30px;
  gap: 10px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }

  @media (max-width: 480px) {
    width: 350px;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  width: 200px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const LoginInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LoginButton = styled.div`
  width: 500px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background-color: #ff812e;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e66f1e;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 40px;
    font-size: 14px;
  }
`;

const SocialLoginGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const LoginLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #303033;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const LoginInput = styled.input`
  width: 500px;
  height: 50px;
  border: 1px solid #e1e1e3;
  border-radius: 10px;
  padding: 0px 10px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 40px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;

const KakaoIcon = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 10px;
`;

const KakaoLogin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 500px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: #303033;
  background-color: #fbe84f;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 300px;
    height: 40px;
    font-size: 14px;
  }
`;

const GoogleIcon = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 10px;
`;

const GoogleLogin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 500px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: #303033;
  background-color: #4285f4;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 300px;
    height: 40px;
    font-size: 14px;
  }
`;

const GotoSignup = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: #ff812e;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e66f1e;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 40px;
    font-size: 14px;
  }
`;
