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
  padding: 0px 0px;
  margin: auto;
  overflow-x: hidden;
`;

const Body = styled.div`
  margin-top: 65px;
`;

const Footer = styled.div`
  padding: 50px 100px;
`;

const FooterBanner = styled.img`
  width: 100%;
`;
