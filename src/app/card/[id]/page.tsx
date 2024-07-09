"use client";

import styled from "styled-components";
import Header from "../../../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "../../../components/Loading";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 36.3731,
  lng: 127.365,
};

interface CardProps {
  id: number;
  title: string;
  name: string;
  date: string;
  participants: number;
  currentParticipants: number;
  phone: string;
  description: string;
  images: string[];
  price: string;
  content: string;
  numWishes: number;
  createdAt: string;
  isApplied: boolean;
}

const MySwal = withReactContent(Swal);

const CardDetail = () => {
  const { id } = useParams() as { id: string };
  const [isLoading, setIsLoading] = useState(true);

  const [card, setCard] = useState<CardProps | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [isApplied, setIsApplied] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [userType, setUserType] = useState<string>("");

  useEffect(() => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.BACKEND_HOSTNAME}/courses/${id}`
        );
        setCard(res.data);
        setIsApplied(res.data.isApplied);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching card data:", error);
        setIsLoading(false);
      }
    };

    const storedUserType = localStorage.getItem("userType");
    if (storedUserType) {
      setUserType(storedUserType);
    }

    fetchData();
  }, [id]);

  const handleApplicationToggle = async () => {
    if (isApplied) {
      await handleCancel();
    } else {
      await handleApply();
    }
  };

  const handleApply = async () => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_HOSTNAME}/courses/${id}/applications`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        setCard((prevCard) =>
          prevCard ? { ...prevCard, isApplied: true } : prevCard
        );
        setIsApplied((prev) => !prev); // 신청 상태 업데이트
        if (window.innerWidth <= 768) {
          MySwal.fire({
            icon: "success",
            title: "신청 완료",
            text: "클래스가 성공적으로 신청되었습니다.",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            customClass: {
              popup: "swal-custom-popup",
              title: "swal-custom-title",
              htmlContainer: "swal-custom-html-container",
            },
          });
        } else {
          MySwal.fire({
            icon: "success",
            title: "신청 완료",
            text: "클래스가 성공적으로 신청되었습니다.",
            confirmButtonText: "확인",
            confirmButtonColor: "#FF812E",
            customClass: {
              popup: "swal-custom-popup",
              title: "swal-custom-title",
              htmlContainer: "swal-custom-html-container",
            },
          });
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error during application:", error.response.data);
      if (error.response && error.response.status === 400) {
        Swal.fire("신청 실패", "수업 정원이 가득 찼습니다.", "error");
      } else if (error.response && error.response.status === 401) {
        Swal.fire("신청 실패", "로그인이 필요합니다.", "error");
      } else if (error.response && error.response.status === 403) {
        Swal.fire("신청 실패", "권한이 없습니다.", "error");
      } else if (error.response && error.response.status === 404) {
        Swal.fire("신청 실패", "해당 수업을 찾을 수 없습니다.", "error");
      } else if (error.response && error.response.status === 409) {
        Swal.fire("신청 실패", "이미 신청한 수업입니다.", "error");
      } else {
        Swal.fire("신청 실패", "알 수 없는 오류가 발생했습니다.", "error");
      }
    }
    setIsLoading(false);
  };

  const handleCancel = async () => {
    try {
      const response = await axios.delete(
        `${process.env.BACKEND_HOSTNAME}/courses/${id}/applications`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setIsApplied(false); // 신청 상태 업데이트
        setCard((prevCard) =>
          prevCard ? { ...prevCard, isApplied: false } : prevCard
        );
        if (window.innerWidth <= 768) {
          MySwal.fire({
            icon: "success",
            title: "취소 완료",
            text: "클래스가 성공적으로 취소되었습니다.",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            customClass: {
              popup: "swal-custom-popup",
              title: "swal-custom-title",
              htmlContainer: "swal-custom-html-container",
            },
          });
        } else {
          MySwal.fire({
            icon: "success",
            title: "취소 완료",
            text: "클래스가 성공적으로 취소되었습니다.",
            confirmButtonText: "확인",
            confirmButtonColor: "#FF812E",
            customClass: {
              popup: "swal-custom-popup",
              title: "swal-custom-title",
              htmlContainer: "swal-custom-html-container",
            },
          });
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error during cancellation:", error.response.data);
      Swal.fire("취소 실패", "알 수 없는 오류가 발생했습니다.", "error");
    }
    setIsLoading(false);
  };

  if (!card) {
    return (
      <LoadingWrapper>
        <LoadingImage src="/assets/wingle.png" alt="Loading" />
        <LoadingText>Loading...</LoadingText>
      </LoadingWrapper>
    );
  }
  console.log("isApplied", isApplied);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <DetailWrapper>
            <TopInfoBox>
              <ImageCarousel>
                <Carousel
                  showArrows={true}
                  infiniteLoop={true}
                  showThumbs={false}
                >
                  {card.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`Class Image ${index}`}
                    />
                  ))}
                </Carousel>
              </ImageCarousel>
              <TopRightInfo>
                <ClassName>{card.title}</ClassName>
                <Instructor>{card.name}</Instructor>
                <Date>{card.date}</Date>
                <PurchaseSection>
                  <Price>{card.price}</Price>
                  <Participants>
                    한 타임 최대 인원: {card.participants}명
                  </Participants>
                  <Phone>{card.phone}</Phone>
                  {userType !== "expert" &&
                    (isApplied ? (
                      <CancelButton onClick={handleApplicationToggle}>
                        취소하기
                      </CancelButton>
                    ) : (
                      <ApplicationButton onClick={handleApplicationToggle}>
                        신청하기
                      </ApplicationButton>
                    ))}
                </PurchaseSection>
              </TopRightInfo>
            </TopInfoBox>
            <Description dangerouslySetInnerHTML={{ __html: card.content }} />
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
      )}
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

const ApplicationButton = styled.button`
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

const CancelButton = styled.button`
  padding: 15px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #303033;
  background-color: #e3e3e3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a3a3a3;
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
