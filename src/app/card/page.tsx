"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { useRouter } from "next/navigation";

const CardList = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleCreateClick = () => {
    router.push("/createClass");
  };

  const handleCardClick = (id) => {
    router.push(`/card/${id}`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const cards = [
    {
      id: 1,
      title: "강아지 간식 만들기",
      description: "건강한 간식을 만들어보세요!",
      image: "/assets/card/card1.png",
      price: "₩45,000",
    },
    {
      id: 2,
      title: "해금 원데이 클래스",
      description: "하루만에 해금 마스터 하기",
      image: "/assets/card/card2.png",
      price: "₩50,000",
    },
    {
      id: 3,
      title: "나만의 명함 만들기",
      description: "특색있는 명함을 만들 수 있습니다",
      image: "/assets/card/card3.png",
      price: "₩35,000",
    },
    {
      id: 4,
      title: "일러스트 클래스",
      description: "일러스트 기초부터 탄탄하게!",
      image: "/assets/card/card4.png",
      price: "₩60,000",
    },
    {
      id: 5,
      title: "나만의 향수 만들기",
      description: "향수로 자신을 표현해보세요",
      image: "/assets/card/card5.png",
      price: "₩55,000",
    },
    {
      id: 6,
      title: "앙금 케이크 클래스",
      description: "앙금으로 케이크를 만들어보아요",
      image: "/assets/card/card6.png",
      price: "₩55,000",
    },
    {
      id: 7,
      title: "도자기 만들기",
      description: "초보자도 쉽게 할 수 있는 클래스!",
      image: "/assets/card/card7.png",
      price: "₩55,000",
    },
    {
      id: 8,
      title: "꽃꽂이 클래스",
      description: "꽃과 함께 하는 시간",
      image: "/assets/card/card8.png",
      price: "₩55,000",
    },
    {
      id: 9,
      title: "오늘은 내가 밴드 보컬?",
      description: "일일 밴드 보컬 체험해보세요!",
      image: "/assets/card/card9.png",
      price: "₩55,000",
    },
    {
      id: 10,
      title: "수제 맥주 클래스",
      description: "수제 맥주 만들기",
      image: "/assets/card/card10.png",
      price: "₩55,000",
    },
    {
      id: 11,
      title: "퍼스널 컬러 진단",
      description: "베스트 컬러를 진단해드려요",
      image: "/assets/card/card11.png",
      price: "₩55,000",
    },
    {
      id: 12,
      title: "앙렉스X서핑캠프",
      description: "다같이 서핑해요-!",
      image: "/assets/card/card12.png",
      price: "₩55,000",
    },
    {
      id: 13,
      title: "힐링 미술 클래스",
      description: "취미 미술 초보반",
      image: "/assets/card/card13.png",
      price: "₩55,000",
    },
    {
      id: 14,
      title: "꽃꽂이 원데이 클래스",
      description: "아름다운 화분 만들기",
      image: "/assets/card/card14.png",
      price: "₩55,000",
    },
    {
      id: 15,
      title: "물레 체험 클래스",
      description: "초보자도 쉽게 할 수 있어요",
      image: "/assets/card/card15.png",
      price: "₩55,000",
    },
    {
      id: 16,
      title: "메이크업 클래스",
      description: "내 찰떡 메이크업은?",
      image: "/assets/card/card16.png",
      price: "₩55,000",
    },
    {
      id: 17,
      title: "팬케이크 만들기",
      description: "요리 초보도 간단하게!",
      image: "/assets/card/card17.png",
      price: "₩55,000",
    },
    {
      id: 18,
      title: "테니스 원데이 클래스",
      description: "함께 테니스 쳐요",
      image: "/assets/card/card18.png",
      price: "₩55,000",
    },
    {
      id: 19,
      title: "화분 꾸미기",
      description: "나만의 화분 만들기",
      image: "/assets/card/card19.png",
      price: "₩55,000",
    },
    {
      id: 20,
      title: "원데이 일러스트 클래스",
      description: "색감 위주의 수업",
      image: "/assets/card/card20.png",
      price: "₩55,000",
    },
    {
      id: 21,
      title: "드로잉 클래스",
      description: "원하는 것을 모두 그려보세요!",
      image: "/assets/card/card21.png",
      price: "₩55,000",
    },
    {
      id: 22,
      title: "믹싱 원데이 클래스",
      description: "좋아하는 음악 직접 만들기",
      image: "/assets/card/card22.png",
      price: "₩55,000",
    },
    {
      id: 23,
      title: "키링 만들기 클래스",
      description: "귀여운 키링을 하루만에?",
      image: "/assets/card/card23.png",
      price: "₩55,000",
    },
    {
      id: 24,
      title: "인형 만들기 클래스",
      description: "쉽고 간단하게 만드는 인형",
      image: "/assets/card/card24.png",
      price: "₩55,000",
    },
  ];

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
          <SortFilterButton>최신순</SortFilterButton>
          <SortFilterButton>인기순</SortFilterButton>
          <SortFilterButton>가격순</SortFilterButton>
          <CreateClass onClick={handleCreateClick}>클래스 등록하기</CreateClass>
        </SortFilterWrapper>
        <CardContainer>
          {filteredCards.map((card) => (
            <Card key={card.id} onClick={() => handleCardClick(card.id)}>
              <CardImg src={card.image} />
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                <CardPrice>{card.price}</CardPrice>
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
