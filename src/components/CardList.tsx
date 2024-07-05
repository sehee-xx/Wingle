"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CardList = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCardClick = () => {
    router.push("/card");
  };

  if (!mounted) return null;

  return (
    <>
      <CardBox>
        <CardHeader>
          <CardTitle>현재 가장 인기있는 서비스</CardTitle>
          <ShowTotal onClick={handleCardClick}>전체보기</ShowTotal>
        </CardHeader>
        <CardListBox>
          <Card>
            <CardImg src="/assets/card1.png" alt="Card 1" />
            <CardInnerTitle>강아지 간식 만들기 체험</CardInnerTitle>
            <CardPrice>45,000원~</CardPrice>
            <CardExpertName>신진영</CardExpertName>
          </Card>
          <Card>
            <CardImg src="/assets/card2.png" alt="Card 2" />
            <CardInnerTitle>강남-해금무드: 해금 체험</CardInnerTitle>
            <CardPrice>90,000원~</CardPrice>
            <CardExpertName>양세희</CardExpertName>
          </Card>
          <Card>
            <CardImg src="/assets/card3.png" alt="Card 3" />
            <CardInnerTitle>명함 만들기 체험</CardInnerTitle>
            <CardPrice>55,000원~</CardPrice>
            <CardExpertName>박상우</CardExpertName>
          </Card>
          <Card>
            <CardImg src="/assets/card4.png" alt="Card 4" />
            <CardInnerTitle>일러스트 원데이 클래스</CardInnerTitle>
            <CardPrice>65,000원~</CardPrice>
            <CardExpertName>하은수</CardExpertName>
          </Card>
        </CardListBox>
      </CardBox>
      <CardBox>
        <CardHeader>
          <CardTitle>윙글이 추천하는 서비스</CardTitle>
          <ShowTotal onClick={handleCardClick}>전체보기</ShowTotal>
        </CardHeader>
        <CardListBox>
          <Card>
            <CardImg src="/assets/card5.png" alt="Card 5" />
            <CardInnerTitle>나만의 향수 만들기 원데이 클래스</CardInnerTitle>
            <CardPrice>55,000원~</CardPrice>
            <CardExpertName>조승완</CardExpertName>
          </Card>
          <Card>
            <CardImg src="/assets/card6.png" alt="Card 6" />
            <CardInnerTitle>앙금 꽃 케이크 만들기-힐링</CardInnerTitle>
            <CardPrice>80,000원~</CardPrice>
            <CardExpertName>주서현</CardExpertName>
          </Card>
          <Card>
            <CardImg src="/assets/card7.png" alt="Card 7" />
            <CardInnerTitle>CNC를 이용한 목공 원데이 클래스</CardInnerTitle>
            <CardPrice>60,000원~</CardPrice>
            <CardExpertName>안규찬</CardExpertName>
          </Card>
          <Card>
            <CardImg src="/assets/card8.png" alt="Card 8" />
            <CardInnerTitle>아름다운 꽃꽂이 쉽게 알려드려요</CardInnerTitle>
            <CardPrice>75,000원~</CardPrice>
            <CardExpertName>김민경</CardExpertName>
          </Card>
        </CardListBox>
      </CardBox>
      <CardBox>
        <CardTitle>
          이런 카테고리는 어때요?
          <CategoryListBox>
            <Category>
              <CategorySub>감성공방</CategorySub>
              <CategoryTitle>공방 원데이 클래스</CategoryTitle>
            </Category>
            <Category>
              <CategorySub>취미 레슨</CategorySub>
              <CategoryTitle>악기 레슨</CategoryTitle>
            </Category>
            <Category>
              <CategorySub>사진</CategorySub>
              <CategoryTitle>사진명소에서 사진 찍기</CategoryTitle>
            </Category>
            <Category>
              <CategorySub>조향</CategorySub>
              <CategoryTitle>나만의 향수 만들기</CategoryTitle>
            </Category>
          </CategoryListBox>
        </CardTitle>
      </CardBox>
      <CardBox>
        <CardHeader>
          <CardTitle>다른 회원들이 많이 찾는 서비스</CardTitle>
          <ShowTotal onClick={handleCardClick}>전체보기</ShowTotal>
        </CardHeader>
        <CardListBox>
          <Card>
            <CardImg src="/assets/card9.png" alt="Card 9" />
            <CardInnerTitle>나도 밴드체험 한번 해볼까?</CardInnerTitle>
            <CardPrice>35,000원~</CardPrice>
            <CardExpertName>김서영</CardExpertName>
          </Card>
          <Card>
            <CardImg src="/assets/card10.png" alt="Card 10" />
            <CardInnerTitle>술술 놀면서 수제 맥주 만들기</CardInnerTitle>
            <CardPrice>50,000원~</CardPrice>
            <CardExpertName>윤우성</CardExpertName>
          </Card>
          <Card>
            <CardImg src="/assets/card11.png" alt="Card 11" />
            <CardInnerTitle>나만의 퍼스널컬러, 골격진단</CardInnerTitle>
            <CardPrice>59,900원~</CardPrice>
            <CardExpertName>김예락</CardExpertName>
          </Card>
          <Card>
            <CardImg src="/assets/card12.png" alt="Card 12" />
            <CardInnerTitle>[앙렉스x서핑캠프]-시원한 서핑</CardInnerTitle>
            <CardPrice>190,000원~</CardPrice>
            <CardExpertName>강승완</CardExpertName>
          </Card>
        </CardListBox>
      </CardBox>
    </>
  );
};

export default CardList;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CardTitle = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #303033;
`;

const ShowTotal = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #bfbfbf;
  cursor: pointer;
`;

const CardListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
  margin-top: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 230px;
  border-radius: 15px;
`;

const CardImg = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 150px;
  cursor: pointer;
`;

const CardInnerTitle = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #303033;
  padding-top: 10px;
`;

const CardPrice = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #ff812e;
  padding-top: 5px;
`;

const CardExpertName = styled.label`
  font-size: 10px;
  font-weight: 600;
  color: #bfbfbf;
  padding-top: 5px;
`;

const CategoryListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 100px;
  border-radius: 15px;
  background-color: #e1e1e2;
  padding: 0px 30px;
`;

const CategorySub = styled.label`
  font-size: 12px;
  color: #737585;
  padding-bottom: 10px;
`;

const CategoryTitle = styled.label`
  font-size: 14px;
  color: #303033;
`;
