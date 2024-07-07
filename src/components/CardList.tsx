"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CardList = () => {
  const [mounted, setMounted] = useState(false);
  const [likedCards, setLikedCards] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCardClick = (id: number) => {
    router.push(`/card/${id}`);
  };

  const toggleLike = (id: number) => {
    setLikedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  const handleCategoryClick = (category: string) => {
    router.push(`/category/${category}`);
  };

  if (!mounted) return null;

  return (
    <>
      <CardBox>
        <CardHeader>
          <CardTitle>현재 가장 인기있는 서비스</CardTitle>
          <ShowTotal onClick={() => router.push("/card")}>전체보기</ShowTotal>
        </CardHeader>
        <CardListBox>
          {renderCards([
            {
              id: 1,
              title: "강아지 간식 만들기 체험",
              price: "45,000원~",
              expert: "신진영",
              img: "/assets/card/card1.png",
            },
            {
              id: 2,
              title: "강남-해금무드: 해금 체험",
              price: "90,000원~",
              expert: "양세희",
              img: "/assets/card/card2.png",
            },
            {
              id: 3,
              title: "명함 만들기 체험",
              price: "55,000원~",
              expert: "박상우",
              img: "/assets/card/card3.png",
            },
            {
              id: 4,
              title: "일러스트 원데이 클래스",
              price: "65,000원~",
              expert: "하은수",
              img: "/assets/card/card4.png",
            },
          ])}
        </CardListBox>
      </CardBox>
      <CardBox>
        <CardHeader>
          <CardTitle>윙글이 추천하는 서비스</CardTitle>
          <ShowTotal onClick={() => router.push("/card")}>전체보기</ShowTotal>
        </CardHeader>
        <CardListBox>
          {renderCards([
            {
              id: 5,
              title: "나만의 향수 만들기 원데이 클래스",
              price: "55,000원~",
              expert: "조승완",
              img: "/assets/card/card5.png",
            },
            {
              id: 6,
              title: "앙금 꽃 케이크 만들기-힐링",
              price: "80,000원~",
              expert: "주서현",
              img: "/assets/card/card6.png",
            },
            {
              id: 7,
              title: "CNC를 이용한 목공 원데이 클래스",
              price: "60,000원~",
              expert: "안규찬",
              img: "/assets/card/card7.png",
            },
            {
              id: 8,
              title: "아름다운 꽃꽂이 쉽게 알려드려요",
              price: "75,000원~",
              expert: "김민경",
              img: "/assets/card/card8.png",
            },
          ])}
        </CardListBox>
      </CardBox>
      <CardBox>
        <CardTitle>
          이런 카테고리는 어때요?
          <CategoryListBox>
            {renderCategories([
              {
                sub: "그림",
                title: "일러스트 클래스",
                category: "illustration",
              },
              { sub: "취미 레슨", title: "악기 레슨", category: "instrument" },
              {
                sub: "사진",
                title: "사진명소에서 사진 찍기",
                category: "photography",
              },
              { sub: "조향", title: "나만의 향수 만들기", category: "perfume" },
            ])}
          </CategoryListBox>
        </CardTitle>
      </CardBox>
      <CardBox>
        <CardHeader>
          <CardTitle>다른 회원들이 많이 찾는 서비스</CardTitle>
          <ShowTotal onClick={() => router.push("/card")}>전체보기</ShowTotal>
        </CardHeader>
        <CardListBox>
          {renderCards([
            {
              id: 9,
              title: "나도 밴드체험 한번 해볼까?",
              price: "35,000원~",
              expert: "김서영",
              img: "/assets/card/card9.png",
            },
            {
              id: 10,
              title: "술술 놀면서 수제 맥주 만들기",
              price: "50,000원~",
              expert: "윤우성",
              img: "/assets/card/card10.png",
            },
            {
              id: 11,
              title: "나만의 퍼스널컬러, 골격진단",
              price: "59,900원~",
              expert: "김예락",
              img: "/assets/card/card11.png",
            },
            {
              id: 12,
              title: "[앙렉스x서핑캠프]-시원한 서핑",
              price: "190,000원~",
              expert: "강승완",
              img: "/assets/card/card12.png",
            },
          ])}
        </CardListBox>
      </CardBox>
    </>
  );

  function renderCards(cards) {
    return cards.map((card) => (
      <Card key={card.id}>
        <CardImg
          src={card.img}
          alt={`Card ${card.id}`}
          onClick={() => handleCardClick(card.id)}
        />
        <LikeIcon
          src={
            likedCards.includes(card.id)
              ? "/assets/fillHeart.png"
              : "/assets/emptyHeart.png"
          }
          alt="Like Icon"
          onClick={() => toggleLike(card.id)}
        />
        <CardInnerTitle>{card.title}</CardInnerTitle>
        <CardPrice>{card.price}</CardPrice>
        <CardExpertName>{card.expert}</CardExpertName>
      </Card>
    ));
  }

  function renderCategories(categories) {
    return categories.map((category, index) => (
      <Category
        key={index}
        onClick={() => handleCategoryClick(category.category)}
      >
        <CategorySub>{category.sub}</CategorySub>
        <CategoryTitle>{category.title}</CategoryTitle>
      </Category>
    ));
  }
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
  font-size: 18px;
  font-weight: 600;
  color: #303033;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ShowTotal = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #bfbfbf;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const CardListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 15px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CardImg = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 200px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const CardInnerTitle = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #303033;
  padding-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CardPrice = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: #ff812e;
  padding-top: 5px;
`;

const CardExpertName = styled.label`
  font-size: 12px;
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
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const CategoryTitle = styled.label`
  font-size: 16px;
  color: #303033;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    display: none;
  }
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
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #ff812e;
    transform: scale(1.05);
  }

  &:hover ${CategoryTitle} {
    color: #ffffff;
  }

  @media (max-width: 480px) {
    padding: 0px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
`;

const CategorySub = styled.label`
  font-size: 14px;
  color: #737585;
  padding-bottom: 10px;
  cursor: pointer;

  &:hover ${CategoryTitle} {
    color: #f7f8f9;
  }

  @media (max-width: 480px) {
    padding-bottom: 0px;
  }
`;

const LikeIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
