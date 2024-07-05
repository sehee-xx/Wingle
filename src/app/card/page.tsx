// src/app/card/page.tsx

"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { useRouter } from "next/navigation";

const CardList = () => {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push("/createClass");
  };

  return (
    <PageWrapper>
      <Header />
      <CardListWrapper>
        카드 리스트 페이지
        <CreateClass onClick={handleCreateClick}>클래스 등록하기</CreateClass>
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
  padding: 50px 100px;
  overflow-y: auto;
  margin-top: 65px;
`;

const CreateClass = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  background-color: #ff812e;
  color: #ffffff;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e66f1e;
  }
`;
