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

  const handleSignupClick = () => {
    router.push("/signup");
  };

  if (!mounted) return null;

  return (
    <LoginWrapper>
      <LoginBox>
        <Logo onClick={handleLogoClick} src="/assets/logo.svg" alt="Logo" />
        <LoginInputGroup>
          <LoginLabel>아이디</LoginLabel>
          <LoginInput placeholder="아이디를 입력해주세요"></LoginInput>
        </LoginInputGroup>
        <LoginInputGroup>
          <LoginLabel>비밀번호</LoginLabel>
          <LoginInput placeholder="비밀번호를 입력해주세요"></LoginInput>
        </LoginInputGroup>
        <LoginInputGroup>
          <LoginButton>로그인</LoginButton>
        </LoginInputGroup>
        <SocialLoginGroup>
          <LoginLabel>소셜 로그인</LoginLabel>
          <KakaoLogin>카카오톡으로 시작</KakaoLogin>
          <GoogleLogin>구글 아이디로 시작</GoogleLogin>
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
  padding: 50px 50px;
  background-image: url("/assets/background.png");
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  padding: 30px 30px;
  gap: 10px;
  background-color: #ffffff;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 120px;
  padding-bottom: 20px;
`;

const LoginInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LoginButton = styled.div`
  width: 300px;
  padding: 10px 10px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  background-color: #ff812e;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;

const SocialLoginGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const LoginLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #303033;
`;

const LoginInput = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #e1e1e3;
  border-radius: 10px;
  padding: 0px 10px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 11px;
  }
`;

const KakaoLogin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 300px;
  height: 35px;
  font-size: 12px;
  font-weight: 600;
  color: #303033;
  background-color: #fbe84f;
  cursor: pointer;
`;

const GoogleLogin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 300px;
  height: 35px;
  font-size: 12px;
  font-weight: 600;
  color: #303033;
  background-color: #4285f4;
  cursor: pointer;
`;

const GotoSignup = styled.div`
  width: 300px;
  padding: 10px 10px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  background-color: #ff812e;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;
