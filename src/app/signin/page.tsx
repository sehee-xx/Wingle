// src/app/login/page.tsx

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const LoginPage = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogoClick = () => {
    router.push("/"); // 홈 페이지로 이동
  };

  const handleSigninClick = () => {
    router.push("/");
  };

  const handleSignupClick = () => {
    router.push("/signup");
  };

  if (!mounted) return null;

  return (
    <LoginWrapper>
      <LoginBox>
        <Logo onClick={handleLogoClick} src="/assets/logo.svg" alt="Logo" />
        <LoginInputGroup>
          <LoginLabel>이메일</LoginLabel>
          <LoginInput placeholder="이메일을 입력해주세요"></LoginInput>
        </LoginInputGroup>
        <LoginInputGroup>
          <LoginLabel>비밀번호</LoginLabel>
          <LoginInput placeholder="비밀번호를 입력해주세요"></LoginInput>
        </LoginInputGroup>
        <LoginInputGroup>
          <LoginButton onClick={handleSigninClick}>로그인</LoginButton>
        </LoginInputGroup>
        <SocialLoginGroup>
          <LoginLabel>소셜 로그인</LoginLabel>
          <KakaoLogin>카카오톡으로 시작</KakaoLogin>
          <GoogleLogin>구글 이메일로 시작</GoogleLogin>
        </SocialLoginGroup>
        <SocialLoginGroup>
          <LoginLabel>아직 회원이 아니라면?</LoginLabel>
          <GotoSignup onClick={handleSignupClick}>Wingle 가입하기</GotoSignup>
        </SocialLoginGroup>
      </LoginBox>
    </LoginWrapper>
  );
};

export default LoginPage;

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
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e66f1e;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 40px;
    font-size: 14px;
  }
`;
