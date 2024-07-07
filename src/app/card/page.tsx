// src/app/card/page.tsx

"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { useRouter } from "next/navigation";

const CardList = () => {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push("/createClass");
  };

  const handleCardClick = (id) => {
    router.push(`/card/${id}`);
  };

  return (
    <PageWrapper>
      <Header />
      <CardListWrapper>
        <Title>원데이 클래스 전체보기</Title>
        <SearchBar placeholder="원하는 클래스를 마음껏 검색해보세요!" />
        <SortFilterWrapper>
          <SortFilterButton>최신순</SortFilterButton>
          <SortFilterButton>인기순</SortFilterButton>
          <SortFilterButton>가격순</SortFilterButton>
          <CreateClass onClick={handleCreateClick}>클래스 등록하기</CreateClass>
        </SortFilterWrapper>
        <CardContainer>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24,
          ].map((card, index) => (
            <Card key={index} onClick={() => handleCardClick(card)}>
              <CardImg src={`/assets/card/card${card}.png`} />
              <CardContent>
                <CardTitle>카드 제목 {card}</CardTitle>
                <CardDescription>
                  카드 설명이 여기에 들어갑니다.
                </CardDescription>
                <CardPrice>₩45,000</CardPrice>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </CardListWrapper>
    </PageWrapper>
  );
};

export default CardList;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 480px) {
    padding-bottom: 10px;
  }
`;

const CardListWrapper = styled.div`
  flex: 1;
  padding: 20px 250px;
  overflow-y: auto;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    padding: 20px 30px;
  }

  @media (max-width: 1024px) {
    padding: 20px 25px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 16px;

  @media (max-width: 1024px) {
    padding: 13px;
  }

  @media (max-width: 768px) {
    padding: 11px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 9px;
    font-size: 13px;
    margin-bottom: 15px;
  }
`;

const SortFilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const SortFilterButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 480px) {
    padding: 0px 10px;
    font-size: 12px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  flex: 1;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  width: 100%;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CardPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ff812e;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CreateClass = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  background-color: #ff812e;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: auto;

  &:hover {
    background-color: #e66f1e;
  }

  @media (max-width: 480px) {
    width: 120px;
    font-size: 14px;
  }
`;
