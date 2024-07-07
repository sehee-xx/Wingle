"use client";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import Header from "../../../components/Header";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 20px 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 65px;

  @media (max-width: 1024px) {
    padding: 20px 30px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  align-self: flex-start;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 400px;
  margin-bottom: 20px;
  margin-top: 10px;
  position: relative;
  img {
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    height: 200px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

const Content = styled.div`
  font-size: 16px;
  text-align: left;
  max-width: 800px;
  align-self: flex-start;

  @media (max-width: 480px) {
    height: 200px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

const ContentHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ContentSubheader = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ContentParagraph = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

// 슬라이드 데이터 정의
const slideData: {
  [key: string]: { title: string; image: string; content: JSX.Element };
} = {
  "1": {
    title: "선착순 100명, 단 하루! 반값서핑",
    image: "/assets/slide/slide1.png",
    content: (
      <>
        <ContentHeader>여름의 시작, 특별한 서핑 이벤트</ContentHeader>
        <ContentParagraph>
          이번 여름, 반값 서핑의 기회를 놓치지 마세요! 선착순 100명에게만
          주어지는 특별한 혜택으로, 단 하루 동안만 진행됩니다. 더위에 지친 몸과
          마음을 시원한 바다에서 풀어보세요.
        </ContentParagraph>
        <ContentSubheader>전문가 지도와 함께하는 즐거운 시간</ContentSubheader>
        <ContentParagraph>
          전문가의 지도 아래 서핑을 배우고, 새로운 친구들과의 만남도 즐길 수
          있는 이 기회를 놓치지 마세요. 준비물은 단 하나, 즐거운 마음가짐만
          가져오시면 됩니다. 많은 관심과 참여 부탁드립니다!
        </ContentParagraph>
      </>
    ),
  },
  "2": {
    title: "7월 여름산행 자연의 품속으로 떠나요!",
    image: "/assets/slide/slide2.png",
    content: (
      <>
        <ContentHeader>자연과 함께하는 여름산행</ContentHeader>
        <ContentParagraph>
          무더운 여름, 도시의 소음을 벗어나 자연의 품속으로 떠나보세요. 7월
          여름산행 프로그램은 여러분을 푸르른 산과 맑은 계곡으로 안내합니다.
        </ContentParagraph>
        <ContentSubheader>안전하고 즐거운 산행</ContentSubheader>
        <ContentParagraph>
          전문 산악 가이드와 함께 안전하게 즐길 수 있는 이번 산행은 초보자도
          부담 없이 참여할 수 있습니다. 산 속에서의 하룻밤 캠핑도 준비되어 있어,
          별이 빛나는 하늘 아래서 잊지 못할 추억을 만들 수 있습니다.
        </ContentParagraph>
      </>
    ),
  },
  "3": {
    title: "오롯이 집중하는 시간 7월 시퀀스 오픈",
    image: "/assets/slide/slide3.png",
    content: (
      <>
        <ContentHeader>마음의 평화를 찾는 시간</ContentHeader>
        <ContentParagraph>
          일상 속에서의 스트레스를 잠시 내려놓고, 오롯이 나만의 시간에
          집중해보세요. 7월 시퀀스 프로그램은 명상, 요가, 그리고 창의적인
          활동들을 통해 마음의 평화를 찾을 수 있는 기회를 제공합니다.
        </ContentParagraph>
        <ContentSubheader>다양한 활동들</ContentSubheader>
        <ContentParagraph>
          전문가의 지도 아래 진행되는 다양한 활동들은 여러분의 몸과 마음을
          힐링해줄 것입니다. 이번 기회에 자신을 재발견하고, 새로운 에너지를
          충전해보세요. 사전 예약은 필수이며, 자리가 빠르게 마감되니 서둘러
          신청하세요.
        </ContentParagraph>
      </>
    ),
  },
  "4": {
    title: "오늘처럼 더울 땐 시원한 실내에서",
    image: "/assets/slide/slide4.png",
    content: (
      <>
        <ContentHeader>더운 여름을 피하는 방법</ContentHeader>
        <ContentParagraph>
          더운 여름날, 시원한 실내에서 즐길 수 있는 다양한 프로그램을
          소개합니다. 최신 영화 상영, 보드게임 대회, DIY 공예 워크숍 등 다양한
          활동들이 준비되어 있습니다.
        </ContentParagraph>
        <ContentSubheader>가족과 함께 즐기는 시간</ContentSubheader>
        <ContentParagraph>
          가족, 친구, 연인과 함께 즐길 수 있는 이 프로그램들은 모두가 만족할 수
          있는 즐거운 시간을 보장합니다. 특히, 아이들을 위한 특별한 놀이공간도
          마련되어 있어, 온 가족이 함께할 수 있는 좋은 기회입니다. 시원한
          공간에서 무더위를 날려버리세요!
        </ContentParagraph>
      </>
    ),
  },
  "5": {
    title: "모임? 취미? 동호회? 요즘은 여기서 만나요",
    image: "/assets/slide/slide5.png",
    content: (
      <>
        <ContentHeader>관심사를 나누는 시간</ContentHeader>
        <ContentParagraph>
          공통의 관심사를 가진 사람들과 함께하는 시간, 더 즐거워질 수 있습니다.
          다양한 모임과 동호회를 통해 새로운 사람들을 만나고, 자신의 취미를 더욱
          깊이 있게 즐길 수 있는 기회를 제공하는 프로그램입니다.
        </ContentParagraph>
        <ContentSubheader>다양한 활동들</ContentSubheader>
        <ContentParagraph>
          독서 모임, 요리 클래스, 사진 동호회 등 다양한 활동들이 준비되어
          있으며, 새로운 친구들을 사귀고, 취미 생활을 더욱 풍성하게 만들어줄
          것입니다. 관심 있는 분야의 모임에 참여하여, 특별한 경험을 쌓아보세요.
        </ContentParagraph>
      </>
    ),
  },
  "6": {
    title: "이번 주말에 뭐하고 놀지?",
    image: "/assets/slide/slide6.png",
    content: (
      <>
        <ContentHeader>주말을 특별하게 만드는 방법</ContentHeader>
        <ContentParagraph>
          주말, 특별한 계획이 없으신가요? 이번 주말을 특별하게 만들어줄 다양한
          이벤트와 프로그램을 소개합니다. 도심 속 작은 축제, 음악 공연, 플리마켓
          등 다채로운 행사들이 여러분을 기다리고 있습니다.
        </ContentParagraph>
        <ContentSubheader>다양한 활동들</ContentSubheader>
        <ContentParagraph>
          가족과 함께, 친구와 함께, 혹은 혼자서도 즐길 수 있는 다양한 활동들이
          마련되어 있으니, 이번 주말은 특별한 추억을 만들어보세요. 더 이상
          집에서 지루하게 보내지 말고, 활기찬 주말을 즐겨보세요!
        </ContentParagraph>
      </>
    ),
  },
};

const SlidePage = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  // id에 따른 슬라이드 데이터 선택
  const slide = slideData[id as string];

  if (!slide) {
    return (
      <>
        <Header />
        <ContentWrapper>
          <Title>Slide not found</Title>
        </ContentWrapper>
      </>
    );
  }

  return (
    <>
      <Header />
      <ContentWrapper>
        <Title>{slide.title}</Title>
        <ImageWrapper>
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
          />
        </ImageWrapper>
        <Content>{slide.content}</Content>
      </ContentWrapper>
    </>
  );
};

export default SlidePage;
