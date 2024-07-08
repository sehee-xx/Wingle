"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface Card {
  id: number;
  title: string;
  name: string;
  date: string;
  isFavorite: boolean;
  participants: number;
  currentParticipants: number;
  phone: string;
  description: string;
  image: string;
  price: string;
  content: string;
  numWishes: number;
  createdAt: string;
}

interface CardsData {
  trending: Card[];
  choice: Card[];
  recommended: Card[];
}

const CardList = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [cardsData, setCardsData] = useState<CardsData>({
    trending: [],
    choice: [],
    recommended: [],
  });

  useEffect(() => {
    const initialize = async () => {
      const userType = localStorage.getItem("userType");
      if (userType === "student") {
        setIsStudent(true);
      }
      await fetchCardsData();
      setMounted(true);
    };
    initialize();
  }, []);

  const fetchCardsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.BACKEND_HOSTNAME}/courses`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setCardsData({
        trending: response.data.trending,
        choice: response.data.choice,
        recommended: response.data.recommended,
      });
      console.log("Fetched cards data:", response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to fetch cards",
        text: error.response ? error.response.data.message : error.message,
      });
    }
  };

  const handleCardClick = (id: number) => {
    router.push(`/card/${id}`);
  };

  const toggleLike = async (card: Card) => {
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Unauthorized",
        text: "Please log in to add to your wish list.",
      });
      return;
    }

    console.log("Current card before toggle:", card);
    const isLiked = card.isFavorite;
    console.log(`Toggling like for card ${card.id}:`, isLiked);

    // UI를 먼저 업데이트하여 즉시 반영
    updateCardFavoriteStatus(card.id, !isLiked);

    try {
      if (isLiked) {
        const response = await axios.delete(
          `${process.env.BACKEND_HOSTNAME}/courses/${card.id}/wish`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Failed to delete from wishlist");
        }
      } else {
        const response = await axios.post(
          `${process.env.BACKEND_HOSTNAME}/courses/${card.id}/wish`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status > 201) {
          throw new Error("Failed to add to wishlist");
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Swal.fire({
          icon: "info",
          title: "Already in wish list",
          text: "This item is already in your wish list.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to toggle like",
          text: error.response ? error.response.data.message : error.message,
        });
      }
    }
  };

  const updateCardFavoriteStatus = (id: number, isFavorite: boolean) => {
    setCardsData((prevState) => {
      const updateCards = (cards: Card[]) =>
        cards.map((card) => (card.id === id ? { ...card, isFavorite } : card));

      return {
        trending: updateCards(prevState.trending),
        choice: updateCards(prevState.choice),
        recommended: updateCards(prevState.recommended),
      };
    });
  };

  const handleCategoryClick = (category: string) => {
    router.push(`/category/${category}`);
  };

  if (!mounted) return null;

  console.log("Current cards data:", cardsData);

  return (
    <>
      <CardBox>
        <CardHeader>
          <CardTitle>최근 생긴 클래스</CardTitle>
          <ShowTotal onClick={() => router.push("/card")}>전체보기</ShowTotal>
        </CardHeader>
        <CardListBox>
          {renderCards(cardsData?.trending?.slice(0, 4) || [])}
        </CardListBox>
      </CardBox>
      <CardBox>
        <CardHeader>
          <CardTitle>찜하기 많은 클래스</CardTitle>
          <ShowTotal onClick={() => router.push("/card")}>전체보기</ShowTotal>
        </CardHeader>
        <CardListBox>
          {renderCards(cardsData?.choice?.slice(0, 4) || [])}
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
          <CardTitle>윙글이 추천하는 클래스</CardTitle>
          <ShowTotal onClick={() => router.push("/card")}>전체보기</ShowTotal>
        </CardHeader>
        <CardListBox>
          {renderCards(cardsData?.recommended?.slice(0, 4) || [])}
        </CardListBox>
      </CardBox>
    </>
  );

  function renderCards(cards: Card[]) {
    if (cards?.length === 0) {
      console.log("No cards to display");
      return <p>No cards available</p>;
    }

    return cards?.map((card) => (
      <Card key={card.id}>
        <CardImg
          src={card.image}
          alt={`Card ${card.id}`}
          onClick={() => handleCardClick(card.id)}
        />
        {isStudent && (
          <LikeIcon
            src={
              card.isFavorite
                ? "/assets/fillHeart.png"
                : "/assets/emptyHeart.png"
            }
            alt="Like Icon"
            onClick={() => toggleLike(card)}
          />
        )}
        <CardInnerTitle>{card.title}</CardInnerTitle>
        <CardPrice>{card.price}</CardPrice>
        <CardExpertName>{card.name}</CardExpertName>
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
