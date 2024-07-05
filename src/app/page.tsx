"use client";
import React from "react";
import styled from "styled-components";
import CardList from "../components/CardList";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

// src/app/page.tsx
const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Body>
        <Carousel />
      </Body>
      <Footer>
        <CardList />
      </Footer>
      <FooterBanner src="/assets/bottom_banner.png" />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  padding: 0;
  margin: 0 auto;
  overflow-x: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  margin-top: 70px;
  width: 1024px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 10px;
    margin-top: 50px;
  }
`;

const Footer = styled.div`
  padding: 50px 20px;
  max-width: 1024px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const FooterBanner = styled.img`
  width: 100%;
`;
