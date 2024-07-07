"use client";
import React from "react";
import styled from "styled-components";
import Header from "../../../components/Header";

const Instrument = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <Title>음악의 세계로 초대합니다</Title>
        <Subtitle>당신의 악기 연주 실력을 한 단계 끌어올리세요</Subtitle>
        <Gallery>
          <Photo src="/assets/category/two/ex1.png" alt="Instrument 1" />
          <Photo src="/assets/category/two/ex2.png" alt="Instrument 2" />
          <Photo src="/assets/category/two/ex3.png" alt="Instrument 3" />
          <Photo src="/assets/category/two/ex4.png" alt="Instrument 4" />
          <Photo src="/assets/category/two/ex5.png" alt="Instrument 5" />
          <Photo src="/assets/category/two/ex6.png" alt="Instrument 6" />
          <Photo src="/assets/category/two/ex7.png" alt="Instrument 7" />
          <Photo src="/assets/category/two/ex8.png" alt="Instrument 8" />
          <Photo src="/assets/category/two/ex9.png" alt="Instrument 9" />
          <Photo src="/assets/category/two/ex10.png" alt="Instrument 10" />
        </Gallery>
      </PageWrapper>
    </>
  );
};

export default Instrument;

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

  &:hover {
    transform: scale(1.05);
  }
`;
