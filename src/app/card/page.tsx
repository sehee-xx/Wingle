"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";

const CardList = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [userType, setUserType] = useState<string>("");
  const [cards, setCards] = useState<any[]>([]);
  const [sortType, setSortType] = useState<string>("최신순");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_HOSTNAME}/courses`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = response.data;
        setCards(data.trending);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const storedUserType = localStorage.getItem("userType");
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  const handleCreateClick = () => {
    router.push("/createClass");
  };

  const handleCardClick = (id: number) => {
    router.push(`/card/${id}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (sortOption: string) => {
    setSortType(sortOption);
    let sortedCards = [...cards];
    switch (sortOption) {
      case "최신순":
        sortedCards = sortedCards.sort((a, b) => {
          if (
            !(new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          ) {
            return a.id - b.id;
          } else {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          }
        });
        break;
      case "인기순":
        sortedCards = sortedCards.sort((a, b) => b.numWishes - a.numWishes);
        break;
      case "가격순":
        sortedCards = sortedCards.sort(
          (a, b) =>
            parseFloat(a.price.replace("₩", "").replace(",", "")) -
            parseFloat(b.price.replace("₩", "").replace(",", ""))
        );
        break;
      default:
        break;
    }
    setCards(sortedCards);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOption = e.target.value;
    handleSortChange(sortOption);
  };

  const toggleLike = async (card: any) => {
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Unauthorized",
        text: "Please log in to add to your wish list.",
      });
      return;
    }

    const isLiked = card.isFavorite;

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
    setCards((prevState) => {
      const updateCards = (cards: any[]) =>
        cards.map((card) => (card.id === id ? { ...card, isFavorite } : card));

      return updateCards(prevState);
    });
  };

  const filteredCards = cards.filter((card) =>
    card.title.includes(searchQuery)
  );

  return (
    <PageWrapper>
      <Header />
      <CardListWrapper>
        <Title>원데이 클래스 전체보기</Title>
        <SearchBar
          placeholder="원하는 클래스를 마음껏 검색해보세요!"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <SortFilterWrapper>
          <SortFilterButton onClick={() => handleSortChange("최신순")}>
            최신순
          </SortFilterButton>
          <SortFilterButton onClick={() => handleSortChange("인기순")}>
            인기순
          </SortFilterButton>
          <SortFilterButton onClick={() => handleSortChange("가격순")}>
            가격순
          </SortFilterButton>
          {userType === "expert" && (
            <CreateClass onClick={handleCreateClick}>
              클래스 등록하기
            </CreateClass>
          )}
        </SortFilterWrapper>
        <MobileSortFilterWrapper>
          <MobileSortFilterSelect onChange={handleSelectChange}>
            <option value="최신순">최신순</option>
            <option value="인기순">인기순</option>
            <option value="가격순">가격순</option>
          </MobileSortFilterSelect>
        </MobileSortFilterWrapper>
        <CardContainer>
          {filteredCards.map((card) => (
            <Card key={card.id} onClick={() => handleCardClick(card.id)}>
              <CardImg src={card.image} />
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                <CardPrice>{card.price}</CardPrice>
                {userType === "student" && (
                  <LikeIcon
                    src={
                      card.isFavorite
                        ? "/assets/fillHeart.png"
                        : "/assets/emptyHeart.png"
                    }
                    alt="Like Icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(card);
                    }}
                  />
                )}
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
  position: relative;

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
    display: none;
  }
`;

const MobileSortFilterWrapper = styled.div`
  display: none;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    width: 80px;
    display: flex;
    position: absolute; /* position: absolute 추가 */
    right: 25px; /* 화면 오른쪽에 배치 */
    top: 30px; /* 필요에 따라 조정 */
  }
`;

const MobileSortFilterSelect = styled.select`
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
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
  position: relative;
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

const LikeIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
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
