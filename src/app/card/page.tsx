"use client";
import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";

const CardList = () => {
  return (
    <PageWrapper>
      <Header />
      <CardListWrapper>카드 리스트 페이지</CardListWrapper>
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
  margin-top: 60px; /* Header 높이만큼의 마진 추가 */
`;
