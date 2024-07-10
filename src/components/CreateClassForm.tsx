import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "react-quill/dist/quill.snow.css";
import DaumPostcode from "react-daum-postcode";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import dayjs from "dayjs";

const MySwal = withReactContent(Swal);
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface ClassFormData {
  title: string;
  description: string;
  phone: string;
  category: string;
  date: string;
  location: string;
  price: string;
  participants: string;
  content: string;
}

interface CreateClassFormProps {
  initialData?: Partial<ClassFormData>;
  mode: "create" | "edit";
}

const CreateClassForm: React.FC<CreateClassFormProps> = ({
  initialData = {},
  mode,
}) => {
  const [formData, setFormData] = useState<ClassFormData>({
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
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);

  useEffect(() => {
    if (initialData && !isInitialDataLoaded) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...initialData,
      }));
      setIsInitialDataLoaded(true);
    }
  }, [initialData, isInitialDataLoaded]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleContentChange = (value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: value,
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
    if (e.target.files) {
      setAdditionalImages(Array.from(e.target.files));
    }
  };

  useEffect(() => {
    console.log("Updated additional images:", additionalImages);
  }, [additionalImages]);

  const handleAddressSelect = (data: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      location: data.address,
    }));
    setIsPostcodeOpen(false);
  };

  const handleFormSubmit = async () => {
    const data = new FormData();

    const formattedDate = dayjs(formData.date).toISOString();
    if (!dayjs(formData.date).isValid()) {
      Swal.fire({
        icon: "error",
        title: "유효하지 않은 날짜 형식",
        text: "올바른 날짜와 시간 형식으로 입력해주세요.",
      });
      return;
    }

    const modifiedFormData = { ...formData, date: formattedDate };

    console.log("formattedDate", formattedDate);
    console.log("modifiedFormData", modifiedFormData);

    for (const key in modifiedFormData) {
      const value = modifiedFormData[key as keyof typeof modifiedFormData];
      if (value !== undefined) {
        data.append(key, value);
      }
    }

    if (thumbnail) {
      data.append("thumbnail", thumbnail);
    }

    additionalImages.forEach((image, index) => {
      data.append(`additionalImages`, image);
    });

    if (mode === "create") {
      try {
        await axios.post(`${process.env.BACKEND_HOSTNAME}/courses`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        Swal.fire({
          icon: "success",
          title: "등록 성공",
          text: "클래스가 등록되었습니다.",
        });
        router.push("/expertMypage");
      } catch (error) {
        console.error("Failed to create class:", error);
        Swal.fire({
          icon: "error",
          title: "등록 실패",
          text: error.response ? error.response.data.message : error.message,
        });
      }
    } else {
      try {
        await axios.put(`${process.env.BACKEND_HOSTNAME}/courses/${id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        Swal.fire({
          icon: "success",
          title: "수정 성공",
          text: "클래스가 수정되었습니다.",
        });
        router.push("/expertMypage");
      } catch (error) {
        console.error("Failed to update class:", error);
        Swal.fire({
          icon: "error",
          title: "수정 실패",
          text: error.response ? error.response.data.message : error.message,
        });
      }
    }
  };

  return (
    <FormWrapper>
      <Title>
        {mode === "create" ? "원데이 클래스 만들기" : "원데이 클래스 수정하기"}
      </Title>
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
          type="datetime-local"
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
          readOnly
          onClick={() => setIsPostcodeOpen(true)}
        />
        {isPostcodeOpen && (
          <DaumPostcode onComplete={handleAddressSelect} autoClose={false} />
        )}
      </InfoGroup>
      <InfoGroup>
        <SubLabel>클래스 설명</SubLabel>
        <Content value={formData.content} onChange={handleContentChange} />
      </InfoGroup>
      <InfoGroup>
        <SubLabel>썸네일 첨부</SubLabel>
        <ImageUploadInput
          type="file"
          accept="image/*"
          onChange={handleThumbnailChange}
        />
      </InfoGroup>
      <ThumbnailPreview>
        {thumbnail && (
          <img src={URL.createObjectURL(thumbnail)} alt="Thumbnail Preview" />
        )}
      </ThumbnailPreview>
      <InfoGroup>
        <SubLabel>추가 이미지 첨부</SubLabel>
        <MultipleImagesUploadInput
          type="file"
          accept="image/*"
          multiple
          onChange={handleAdditionalImagesChange}
        />
      </InfoGroup>
      <AdditionalImagesPreview>
        {additionalImages.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Additional Preview ${index + 1}`}
          />
        ))}
      </AdditionalImagesPreview>
      <SubmitButton onClick={handleFormSubmit}>
        {mode === "create" ? "등록하기" : "수정하기"}
      </SubmitButton>
    </FormWrapper>
  );
};

export default CreateClassForm;

const FormWrapper = styled.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  padding: 40px 60px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    max-width: 800px;
  }

  @media (max-width: 768px) {
    max-width: 580px;
    padding: 30px 60px;
  }

  @media (max-width: 480px) {
    max-width: 420px;
    padding: 10px 30px;
    margin-top: 70px;
    margin-bottom: 20px;
    border-radius: none;
    box-shadow: none;
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

const Content = styled(ReactQuill)`
  .ql-container {
    height: 100%;
    min-height: 300px;
    border: 1px solid #e1e1e3;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: border 0.3s;
  }

  .ql-editor {
    font-size: 14px;
    color: #303033;
    padding-bottom: 15px;
    min-height: 150px;
    resize: none;
    box-sizing: border-box;
  }

  .ql-container.ql-snow {
    /* border-radius: 10px; */
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

const ThumbnailPreview = styled.div`
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #e1e1e3;
    margin-bottom: 20px;
  }
`;

const AdditionalImagesPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #e1e1e3;
    margin-bottom: 30px;
  }
`;
