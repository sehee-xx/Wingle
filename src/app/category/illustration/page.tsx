"use client";
import React from "react";
import styled from "styled-components";
import Header from "../../../components/Header";

const IllustrationPage = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <Title>일러스트의 세계를 탐험하세요</Title>
        <Subtitle>영감을 찾고 새로운 기술을 배워보세요</Subtitle>
        <Gallery>
          <Photo src="/assets/category/one/ex1.png" alt="Illustration 1" />
          <Photo src="/assets/category/one/ex2.png" alt="Illustration 2" />
          <Photo src="/assets/category/one/ex3.png" alt="Illustration 3" />
          <Photo src="/assets/category/one/ex4.png" alt="Illustration 4" />
          <Photo src="/assets/category/one/ex5.png" alt="Illustration 5" />
          <Photo src="/assets/category/one/ex6.png" alt="Illustration 6" />
          <Photo src="/assets/category/one/ex7.png" alt="Illustration 7" />
          <Photo src="/assets/category/one/ex8.png" alt="Illustration 8" />
          <Photo src="/assets/category/one/ex9.png" alt="Illustration 9" />
          <Photo src="/assets/category/one/ex10.png" alt="Illustration 10" />
        </Gallery>
      </PageWrapper>
    </>
  );
};

export default IllustrationPage;

const PageWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  margin: 65px auto;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 40px;
  color: #666;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 30px;
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Photo = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 5px solid #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transform: rotate(${() => Math.random() * 10 - 5}deg);

  &:nth-child(even) {
    transform: rotate(${() => Math.random() * 10 - 5}deg) translateY(-10px);
  }

  &:nth-child(odd) {
    transform: rotate(${() => Math.random() * 10 - 5}deg) translateY(10px);
  }
`;
