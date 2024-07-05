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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((card, index) => (
            <Card key={index} onClick={() => handleCardClick(card)}>
              <CardImg src={`/assets/card${card}.png`} />
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
`;

const CardListWrapper = styled.div`
  flex: 1;
  padding: 20px 100px;
  overflow-y: auto;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
`;

const SortFilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const SortFilterButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 1;
`;

const Card = styled.div`
  width: calc(33.333% - 20px);
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
  height: 150px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
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
`;

const CardPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ff812e;
`;

const CreateClass = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  background-color: #ff812e;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: auto;

  &:hover {
    background-color: #e66f1e;
  }
`;
