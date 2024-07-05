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
      <RealBody>
        <Body>
          <CarouselWrapper>
            <Carousel />
          </CarouselWrapper>
        </Body>
        <Footer>
          <CardList />
        </Footer>
      </RealBody>
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

const RealBody = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 768px;
  }

  @media (max-width: 480px) {
    max-width: 480px;
  }
`;

const Body = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    margin-top: 50px;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1024px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Footer = styled.div`
  padding: 50px 20px;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
  }
`;

const FooterBanner = styled.img`
  width: 100%;
`;
