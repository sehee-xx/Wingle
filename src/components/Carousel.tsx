"use client";
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <ImageWrapper>
            <Image
              src="/assets/slide1.png"
              alt="Slide 1"
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        </div>
        <div>
          <ImageWrapper>
            <Image
              src="/assets/slide2.png"
              alt="Slide 2"
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        </div>
        <div>
          <ImageWrapper>
            <Image
              src="/assets/slide3.png"
              alt="Slide 3"
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        </div>
        <div>
          <ImageWrapper>
            <Image
              src="/assets/slide4.png"
              alt="Slide 4"
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        </div>
        <div>
          <ImageWrapper>
            <Image
              src="/assets/slide5.png"
              alt="Slide 5"
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        </div>
        <div>
          <ImageWrapper>
            <Image
              src="/assets/slide6.png"
              alt="Slide 6"
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        </div>
        <div>
          <ImageWrapper>
            <Image
              src="/assets/slide7.png"
              alt="Slide 7"
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        </div>
        <div>
          <ImageWrapper>
            <Image
              src="/assets/slide8.png"
              alt="Slide 8"
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        </div>
        <div>
          <ImageWrapper>
            <Image
              src="/assets/slide9.png"
              alt="Slide 9"
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        </div>
        <div>
          <ImageWrapper>
            <Image
              src="/assets/slide10.png"
              alt="Slide 10"
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        </div>
      </Slider>
    </>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;
