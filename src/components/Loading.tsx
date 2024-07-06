"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingImage src="/assets/wingle.png" alt="Loading" />
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  );
};

export default Loading;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f8f9;
`;

const LoadingImage = styled.img`
  width: 120px;
  height: 120px;
`;

const LoadingText = styled.div`
  margin-top: 20px;
  font-size: 30px;
  color: #ff812e;
  font-weight: 600;
`;
