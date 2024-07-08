"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CreateClass = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    phone: "",
    category: "",
    date: "",
    location: "",
    price: "",
    participants: "",
    content: "",
  });
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<FileList | null>(
    null
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setThumbnail(e.target.files[0]);
    }
  };

  const handleAdditionalImagesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setAdditionalImages(e.target.files);
    }
  };

  const handleRegistClick = async () => {
    const data = new FormData();
    for (const key in formData) {
      if (formData[key as keyof typeof formData]) {
        data.append(key, formData[key as keyof typeof formData]);
      }
    }
    if (thumbnail) {
      data.append("image", thumbnail);
    }
    if (additionalImages) {
      for (let i = 0; i < additionalImages.length; i++) {
        data.append("files", additionalImages[i]);
      }
    }

    const token = localStorage.getItem("token");

    console.log("data", data);

    data.forEach((value, key) => {
      console.log(`!!!!!${key}: ${value}`);
    });

    console.log(`${process.env.BACKEND_HOSTNAME}`);

    try {
      await axios.post(`${process.env.BACKEND_HOSTNAME}/courses`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (window.innerWidth <= 768) {
        MySwal.fire({
          icon: "success",
          title: "등록 성공 ",
          text: "클래스가 정상적으로 등록되었습니다!",
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
          title: "등록 성공 ",
          text: "클래스가 정상적으로 등록되었습니다!",
          confirmButtonText: "확인",
          confirmButtonColor: "#FF812E",
          customClass: {
            popup: "swal-custom-popup",
            title: "swal-custom-title",
            htmlContainer: "swal-custom-html-container",
          },
        });
      }
      router.push("/expertMypage");
    } catch (error) {
      console.error("Failed to create class:", error, error.message);
      Swal.fire({
        icon: "error",
        title: "Failed to create class",
        text: error.response ? error.response.data.message : error.message,
      });
    }
  };

  return (
    <>
      <Header />
      <MakeClassWrapper>
        <FormWrapper>
          <Title>원데이 클래스 만들기</Title>
          <InfoGroup>
            <SubLabel>수업 이름</SubLabel>
            <InfoInput
              name="title"
              placeholder="수업 이름을 입력해주세요"
              value={formData.title}
              onChange={handleInputChange}
            />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>날짜</SubLabel>
            <InfoInput
              name="date"
              placeholder="날짜를 입력해주세요"
              value={formData.date}
              onChange={handleInputChange}
            />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>카테고리</SubLabel>
            <InfoInput
              name="category"
              placeholder="카테고리를 입력해주세요"
              value={formData.category}
              onChange={handleInputChange}
            />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>한줄 설명을 입력해주세요</SubLabel>
            <InfoInput
              name="description"
              placeholder="한줄 설명을 입력해주세요"
              value={formData.description}
              onChange={handleInputChange}
            />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>인원</SubLabel>
            <InfoInput
              name="participants"
              placeholder="인원을 입력해주세요"
              value={formData.participants}
              onChange={handleInputChange}
            />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>가격</SubLabel>
            <InfoInput
              name="price"
              placeholder="가격을 입력해주세요"
              value={formData.price}
              onChange={handleInputChange}
            />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>전화번호</SubLabel>
            <InfoInput
              name="phone"
              placeholder="전화번호를 입력해주세요"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>장소</SubLabel>
            <InfoInput
              name="location"
              placeholder="장소를 입력해주세요"
              value={formData.location}
              onChange={handleInputChange}
            />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>클래스 설명</SubLabel>
            <InfoTextarea
              name="content"
              placeholder="클래스에 대해 설명해주세요"
              value={formData.content}
              onChange={handleInputChange}
            />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>썸네일 첨부</SubLabel>
            <ImageUploadInput
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
            />
          </InfoGroup>
          <InfoGroup>
            <SubLabel>추가 이미지 첨부</SubLabel>
            <MultipleImagesUploadInput
              type="file"
              accept="image/*"
              multiple
              onChange={handleAdditionalImagesChange}
            />
          </InfoGroup>
          <SubmitButton onClick={handleRegistClick}>등록하기</SubmitButton>
        </FormWrapper>
      </MakeClassWrapper>
    </>
  );
};

export default CreateClass;

const MakeClassWrapper = styled.div`
  padding: 50px 100px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f8f9;
  min-height: 100vh;

  @media (max-width: 1024px) {
    padding: 50px 0px;
  }

  @media (max-width: 480px) {
    padding-top: 50px;
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #ff812e;
  padding-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

const FormWrapper = styled.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px 60px;
  width: 100%;
  max-width: 600px;

  @media (max-width: 1024px) {
    max-width: 800px;
  }

  @media (max-width: 768px) {
    max-width: 580px;
    padding: 30px 60px;
  }

  @media (max-width: 480px) {
    padding: 10px 30px;
  }
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
`;

const SubLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #303033;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InfoInput = styled.input`
  font-size: 15px;
  color: #303033;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #e1e1e3;
  padding: 0px 10px;
  box-sizing: border-box;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #ff812e;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 14px;
  }
`;

const InfoTextarea = styled.textarea`
  font-size: 14px;
  color: #303033;
  border-radius: 10px;
  border: 1px solid #e1e1e3;
  padding: 10px 10px;
  height: 150px;
  resize: none;
  box-sizing: border-box;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #ff812e;
  }
`;

const ImageUploadInput = styled.input`
  font-size: 14px;
  color: #303033;
  border-radius: 10px;
  border: 1px solid #e1e1e3;
  padding: 10px;
  box-sizing: border-box;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #ff812e;
  }
`;

const MultipleImagesUploadInput = styled.input`
  font-size: 14px;
  color: #303033;
  border-radius: 10px;
  border: 1px solid #e1e1e3;
  padding: 10px;
  box-sizing: border-box;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #ff812e;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #ff812e;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e66f1e;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
