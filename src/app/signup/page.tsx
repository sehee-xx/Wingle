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
    router.push("/signin");
  };

  if (!mounted) return null;

  return (
    <LoginWrapper>
      <LoginBox>
        <Logo onClick={handleLogoClick} src="/assets/logo.svg" alt="Logo" />
        <SignupGroup>
          <Grouplabel>타입</Grouplabel>
          <TypeGroup>
            <RadioWrapper>
              <Radio type="radio" id="student" name="type" value="student" />
              <RadioLabel htmlFor="student">수강생</RadioLabel>
            </RadioWrapper>
            <RadioWrapper>
              <Radio type="radio" id="expert" name="type" value="expert" />
              <RadioLabel htmlFor="expert">전문가</RadioLabel>
            </RadioWrapper>
          </TypeGroup>
        </SignupGroup>
        <SignupGroup>
          <Grouplabel>이름</Grouplabel>
          <Input placeholder="이름을 입력해주세요" />
        </SignupGroup>
        <SignupGroup>
          <Grouplabel>이메일</Grouplabel>
          <Input placeholder="이메일을 입력해주세요" />
        </SignupGroup>
        <SignupGroup>
          <Grouplabel>비밀번호</Grouplabel>
          <Input type="password" placeholder="비밀번호를 입력해주세요" />
        </SignupGroup>
        <StartButton onClick={handleSignupClick}>Wingle 가입하기</StartButton>
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
  gap: 20px;
  background-color: #ffffff;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 120px;
  padding-bottom: 20px;
`;

const SignupGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Grouplabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #303033;
`;

const Input = styled.input`
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

const TypeGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 300px;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  font-size: 12px;
  color: #303033;
`;

const StartButton = styled.div`
  width: 300px;
  padding: 10px 10px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  background-color: #ff812e;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
`;
