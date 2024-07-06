"use client";
import styled from "styled-components";
import Header from "../../../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 36.3731,
  lng: 127.365,
};

const CardDetail = () => {
  const [selectedMarker, setSelectedMarker] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // 로드 스크립트를 이용해 구글맵 API를 로드합니다.
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDAc0DUbHSqW6lqVKnI-sIO4QHBpsr1nWY`;
      script.async = true;
      script.defer = true;
      script.onload = () => setIsMapLoaded(true);
      document.head.appendChild(script);
    };

    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      setIsMapLoaded(true);
    }
  }, []);

  return (
    <>
      <Header />
      <DetailWrapper>
        <TopInfoBox>
          <ImageCarousel>
            <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
              <Image src="/assets/card1.png" alt="Class Image" />
              <Image src="/assets/card2.png" alt="Class Image" />
              <Image src="/assets/card3.png" alt="Class Image" />
            </Carousel>
          </ImageCarousel>
          <TopRightInfo>
            <ClassName>클래스 이름</ClassName>
            <Instructor>전문가 이름</Instructor>
            <Date>2024년 7월 7일 일요일</Date>
            <PurchaseSection>
              <Price>45,000원</Price>
              <Participants>한 타임 최대 인원: 5명</Participants>
              <Phone>010-1234-5678</Phone>
              <PurchaseButton>신청하기</PurchaseButton>
            </PurchaseSection>
          </TopRightInfo>
        </TopInfoBox>
        <Description>
          설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...설명입니다...ㅍ
        </Description>
        <MapSection>
          {isMapLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
              options={{ disableDefaultUI: true, gestureHandling: "none" }}
            >
              <Marker
                position={center}
                onClick={() => setSelectedMarker(center)}
              />
              {selectedMarker && (
                <InfoWindow
                  position={selectedMarker}
                  onCloseClick={() => setSelectedMarker(null)}
                  onDomReady={() => {
                    const iwCloseBtn = document.querySelector(
                      ".gm-style-iw button"
                    ) as HTMLElement;
                    if (iwCloseBtn) {
                      iwCloseBtn.style.width = "10px";
                      iwCloseBtn.style.height = "10px";
                      iwCloseBtn.style.fontWeight = "600";
                    }
                  }}
                >
                  <MapText>KAIST</MapText>
                </InfoWindow>
              )}
            </GoogleMap>
          ) : (
            <LoadingMessage>Loading...</LoadingMessage>
          )}
        </MapSection>
      </DetailWrapper>
    </>
  );
};

export default CardDetail;

const DetailWrapper = styled.div`
  padding: 20px 250px;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  gap: 30px;

  @media (max-width: 1024px) {
    padding: 20px 30px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const TopInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding-top: 15px;

  @media (max-width: 480px) {
    padding-top: 5px;
    gap: 20px;
  }
`;

const ImageCarousel = styled.div`
  width: 100%;
  height: 300px;
  .carousel .slide {
    background: none;
  }
  .carousel .control-prev.control-arrow:before,
  .carousel .control-next.control-arrow:before {
    color: #ff812e;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const TopRightInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

const ClassName = styled.label`
  font-size: 24px;
  font-weight: bold;
  color: #303033;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Instructor = styled.label`
  font-size: 18px;
  color: #737585;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Date = styled.label`
  font-size: 18px;
  color: #737585;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const PurchaseSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 30px;
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 10px 10px;
    gap: 5px;
  }
`;

const Price = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #ff812e;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Participants = styled.div`
  font-size: 16px;
  color: #303033;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Phone = styled.div`
  font-size: 16px;
  color: #303033;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const PurchaseButton = styled.button`
  padding: 15px 20px;
  font-size: 18px;
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

  @media (max-width: 480px) {
    padding: 5px 5px;
    font-size: 14px;
  }
`;

const Description = styled.label`
  font-size: 14px;
  color: #303033;
  line-height: 1.6;
`;

const MapSection = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const MapText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  padding-left: 5px;
  padding-bottom: 5px;
`;

const LoadingMessage = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #ff812e;
`;
