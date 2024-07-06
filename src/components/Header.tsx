"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSigninClick = () => {
    router.push("/signin");
  };

  const handleSignupClick = () => {
    router.push("/signup");
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleProfileClick = () => {
    // expert, student 구분해서 routing
    router.push("/expertMypage");
  };

  return (
    <>
      <HeaderWrapper>
        <Logo onClick={handleLogoClick} src="/assets/logo.svg" alt="Logo" />
        <SignBox>
          <Signin onClick={handleSigninClick}>로그인</Signin>
          <Signup onClick={handleSignupClick}>회원가입</Signup>
          <Profile onClick={handleProfileClick} src="/assets/student.svg" />
        </SignBox>
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  z-index: 1000;
  border-bottom: 1px solid #e1e1e2;
  padding: 5px 240px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 5px 20px;
  }

  @media (max-width: 768px) {
    padding: 5px 20px;
  }
`;

const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

const SignBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Signin = styled.div`
  font-size: 14px;
  color: #303033;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Signup = styled.div`
  font-size: 14px;
  color: #303033;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;
