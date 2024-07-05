"use client";
import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { useRouter } from "next/navigation";

const CreateClass = () => {
  const router = useRouter();

  const handleRegistClick = () => {
    router.push("/card");
  };

  return (
    <>
      <Header />
      <MakeClassWrapper>
        <Title>원데이 클래스 만들기</Title>
        <FormWrapper>
          <InfoGroup>
            <SubLabel>수업 이름</SubLabel>
            <InfoInput placeholder="수업 이름을 입력해주세요" />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>인원</SubLabel>
            <InfoInput placeholder="인원을 입력해주세요" />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>가격</SubLabel>
            <InfoInput placeholder="가격을 입력해주세요" />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>전화번호</SubLabel>
            <InfoInput placeholder="전화번호를 입력해주세요" />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>전문가 이름</SubLabel>
            <InfoInput placeholder="이름을 입력해주세요" />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>클래스 설명</SubLabel>
            <InfoTextarea placeholder="클래스에 대해 설명해주세요" />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>이미지 첨부</SubLabel>
            <ImageUploadInput type="file" accept="image/*" />
          </InfoGroup>
          <SubmitButton onClick={handleRegistClick}>등록하기</SubmitButton>
        </FormWrapper>
      </MakeClassWrapper>
    </>
  );
};

export default CreateClass;

const MakeClassWrapper = styled.div`
  padding: 50px 100px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f8f9;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #ff812e;
  padding-bottom: 30px;
`;

const FormWrapper = styled.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px 60px;
  width: 100%;
  max-width: 600px;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
`;

const SubLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #303033;
`;

const InfoInput = styled.input`
  font-size: 14px;
  color: #303033;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #e1e1e3;
  padding: 0px 10px;
  box-sizing: border-box;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #ff812e;
  }
`;

const InfoTextarea = styled.textarea`
  font-size: 14px;
  color: #303033;
  border-radius: 10px;
  border: 1px solid #e1e1e3;
  padding: 10px 10px;
  height: 150px;
  resize: none;
  box-sizing: border-box;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #ff812e;
  }
`;

const ImageUploadInput = styled.input`
  font-size: 14px;
  color: #303033;
  border-radius: 10px;
  border: 1px solid #e1e1e3;
  padding: 10px;
  box-sizing: border-box;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #ff812e;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #ff812e;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e66f1e;
  }
`;
