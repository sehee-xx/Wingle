"use client";
import React from "react";
import styled from "styled-components";
import CardList from "../components/CardList";
import Carousel from "../components/Carousel";

// src/app/page.tsx
export default function Home() {
  return (
    <HomeWrapper>
      <Header>
        <Logo src="/assets/logo.svg" alt="Logo" />
        <SignBox>
          <Signin>로그인</Signin>
          <Signup>회원가입</Signup>
          <Profile src="/assets/student.svg" />
        </SignBox>
      </Header>
      <Body>
        <Carousel></Carousel>
      </Body>
      <Footer>
        <CardList></CardList>
        <FooterBanner src="/assets/bottom_banner.png" />
      </Footer>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  padding: 5px 0px;
  margin: auto;
  overflow-x: hidden;
`;

const Header = styled.div`
  border-bottom: 1px solid #e1e1e2;
  padding-bottom: 5px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  font-size: 12px;
  color: #303033;
  cursor: pointer;
`;

const Signup = styled.div`
  font-size: 12px;
  color: #303033;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

const Body = styled.div``;

const Footer = styled.div`
  padding: 50px 100px;
  height: 300px;
`;

const FooterBanner = styled.img`
  width: 100%;
`;
