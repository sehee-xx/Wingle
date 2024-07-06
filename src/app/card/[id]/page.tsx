"use client";
import styled from "styled-components";
import Header from "../../../components/Header";

const CardDetail = () => {
  return (
    <>
      <Header />
      <DetailWrapper>
        <ImageSection>
          <ClassImage src="/assets/card1.png" alt="Class Image" />
        </ImageSection>
        <ContentSection>
          <ClassInfo>
            <ClassName>클래스 이름</ClassName>
            <Instructor>전문가 이름</Instructor>
            <Description>
              클래스 설명이 여기에 들어갑니다...클래스 설명이 여기에
              들어갑니다...클래스 설명이 여기에 들어갑니다...클래스 설명이
              여기에 들어갑니다...클래스 설명이 여기에 들어갑니다...클래스
              설명이 여기에 들어갑니다...클래스 설명이 여기에
              들어갑니다...클래스 설명이 여기에 들어갑니다...클래스 설명이
              여기에 들어갑니다...클래스 설명이 여기에 들어갑니다...클래스
              설명이 여기에 들어갑니다...클래스 설명이 여기에
              들어갑니다...클래스 설명이 여기에 들어갑니다...클래스 설명이
              여기에 들어갑니다...클래스 설명이 여기에 들어갑니다...클래스
              설명이 여기에 들어갑니다...클래스 설명이 여기에
              들어갑니다...클래스 설명이 여기에 들어갑니다...클래스 설명이
              여기에 들어갑니다...클래스 설명이 여기에 들어갑니다...클래스
              설명이 여기에 들어갑니다...클래스 설명이 여기에
              들어갑니다...클래스 설명이 여기에 들어갑니다...클래스 설명이
              여기에 들어갑니다...클래스 설명이 여기에 들어갑니다...클래스
              설명이 여기에 들어갑니다...클래스 설명이 여기에
              들어갑니다...클래스 설명이 여기에 들어갑니다...클래스 설명이
              여기에 들어갑니다...클래스 설명이 여기에 들어갑니다...클래스
              설명이 여기에 들어갑니다...클래스 설명이 여기에
              들어갑니다...클래스 설명이 여기에 들어갑니다...클래스 설명이
              여기에 들어갑니다...클래스 설명이 여기에 들어갑니다...클래스
              설명이 여기에 들어갑니다...클래스 설명이 여기에
              들어갑니다...클래스 설명이 여기에 들어갑니다...클래스 설명이
              여기에 들어갑니다...클래스 설명이 여기에 들어갑니다...클래스
              설명이 여기에 들어갑니다...클래스 설명이 여기에
              들어갑니다...클래스 설명이 여기에 들어갑니다...클래스 설명이
              여기에 들어갑니다...클래스 설명이 여기에 들어갑니다...클래스
              설명이 여기에 들어갑니다...클래스 설명이 여기에
              들어갑니다...클래스 설명이 여기에 들어갑니다...
            </Description>
          </ClassInfo>
          <PurchaseSection>
            <Price>₩45,000</Price>
            <Participants>한 타임 당 인원: 5명</Participants>
            <Phone>전화번호: 010-1234-5678</Phone>
            <PurchaseButton>신청하기</PurchaseButton>
          </PurchaseSection>
        </ContentSection>
      </DetailWrapper>
    </>
  );
};

export default CardDetail;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 250px;
  margin-top: 65px;

  @media (max-width: 1024px) {
    padding: 30px 25px;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  height: 300px;
`;

const ClassImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

const ClassInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ClassName = styled.label`
  font-size: 24px;
  font-weight: bold;
  color: #303033;
`;

const Instructor = styled.label`
  font-size: 18px;
  color: #737585;
`;

const Description = styled.label`
  font-size: 14px;
  color: #303033;
  line-height: 1.6;
`;

const PurchaseSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Price = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #ff812e;
`;

const Participants = styled.div`
  font-size: 14px;
  color: #303033;
`;

const Phone = styled.div`
  font-size: 14px;
  color: #303033;
`;

const PurchaseButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #ff812e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e66f1e;
  }
`;
