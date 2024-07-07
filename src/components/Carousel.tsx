"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CarouselComponent = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handleSlideClick = (id: number) => {
    if (mounted) {
      router.push(`/slide/${id}`);
    }
  };

  return (
    <>
      {mounted && (
        <Slider {...settings}>
          <div onClick={() => handleSlideClick(1)}>
            <ImageWrapper>
              <Image
                src="/assets/slide/slide1.png"
                alt="Slide 1"
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
          </div>
          <div onClick={() => handleSlideClick(2)}>
            <ImageWrapper>
              <Image
                src="/assets/slide/slide2.png"
                alt="Slide 2"
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
          </div>
          <div onClick={() => handleSlideClick(3)}>
            <ImageWrapper>
              <Image
                src="/assets/slide/slide3.png"
                alt="Slide 3"
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
          </div>
          <div onClick={() => handleSlideClick(4)}>
            <ImageWrapper>
              <Image
                src="/assets/slide/slide4.png"
                alt="Slide 4"
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
          </div>
          <div onClick={() => handleSlideClick(5)}>
            <ImageWrapper>
              <Image
                src="/assets/slide/slide5.png"
                alt="Slide 5"
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
          </div>
          <div onClick={() => handleSlideClick(6)}>
            <ImageWrapper>
              <Image
                src="/assets/slide/slide6.png"
                alt="Slide 6"
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
          </div>
        </Slider>
      )}
    </>
  );
};

export default CarouselComponent;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1024px;
`;
