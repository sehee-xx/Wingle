"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../styles/sweetalert.css";

const MySwal = withReactContent(Swal);

const Signup = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    type: "student",
    email: "",
    password: "",
    displayName: "",
    confirmPassword: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const searchParams = useSearchParams();
  const socialEmail = searchParams?.get("email");
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    if (socialEmail) {
      setFormData((prevData) => ({ ...prevData, email: socialEmail }));
    }
  }, [socialEmail]);

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === "password" || name === "confirmPassword") {
      setPasswordMatch(
        name === "password"
          ? value === formData.confirmPassword
          : formData.password === value
      );
    }
  };

  const handleSignupClick = async () => {
    if (!passwordMatch) {
      MySwal.fire({
        icon: "error",
        title: "비밀번호 불일치",
        text: "다시 한번 확인해주세요!",
        confirmButtonText: "확인",
        confirmButtonColor: "#FF812E",
      });
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.BACKEND_HOSTNAME}/accounts/signup`,
        formData
      );
      if (window.innerWidth <= 768) {
        MySwal.fire({
          icon: "success",
          title: "회원가입 성공",
          text: "새로운 윙그리 탄생!",
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
          title: "회원가입 성공",
          text: "새로운 윙그리 탄생!",
          confirmButtonText: "확인",
          confirmButtonColor: "#FF812E",
          customClass: {
            popup: "swal-custom-popup",
            title: "swal-custom-title",
            htmlContainer: "swal-custom-html-container",
          },
        });
      }
      router.push("/signin");
    } catch (error) {
      console.log("Signup failed", error);
      if (window.innerWidth <= 768) {
        MySwal.fire({
          icon: "error",
          title: "회원가입 실패",
          text: "다시 시도해주세요!",
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
          icon: "error",
          title: "회원가입 실패",
          text: "다시 시도해주세요!",
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
  };

  if (!mounted) return null;

  return (
    <LoginWrapper>
      <LoginBox>
        <Logo onClick={handleLogoClick} src="/assets/logo.svg" alt="Logo" />
        <SignupGroup>
          <Grouplabel>타입</Grouplabel>
          <TypeGroup>
            <RadioWrapper>
              <CustomRadioInput
                type="radio"
                id="student"
                name="type"
                value="student"
                checked={formData.type === "student"}
                defaultChecked
                onChange={handleChange}
              />
              <CustomRadio htmlFor="student">
                <UncheckedIcon src="/assets/disable.svg" alt="Unchecked" />
                <CheckedIcon src="/assets/normal.svg" alt="Checked" />
              </CustomRadio>
              <RadioLabel htmlFor="student">수강생</RadioLabel>
            </RadioWrapper>
            <RadioWrapper>
              <CustomRadioInput
                type="radio"
                id="expert"
                name="type"
                value="expert"
                checked={formData.type === "expert"}
                onChange={handleChange}
              />
              <CustomRadio htmlFor="expert">
                <UncheckedIcon src="/assets/disable.svg" alt="Unchecked" />
                <CheckedIcon src="/assets/normal.svg" alt="Checked" />
              </CustomRadio>
              <RadioLabel htmlFor="expert">전문가</RadioLabel>
            </RadioWrapper>
          </TypeGroup>
        </SignupGroup>
        <SignupGroup>
          <Grouplabel>이름</Grouplabel>
          <Input
            name="displayName"
            placeholder="이름을 입력해주세요"
            value={formData.displayName}
            onChange={handleChange}
          />
        </SignupGroup>
        <SignupGroup>
          <Grouplabel>이메일</Grouplabel>
          <Suspense>
            <Input
              name="email"
              placeholder="이메일을 입력해주세요"
              value={formData.email}
              onChange={handleChange}
              readOnly={!!socialEmail}
            />
          </Suspense>
        </SignupGroup>
        <SignupGroup>
          <Grouplabel>비밀번호</Grouplabel>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={formData.password}
            onChange={handleChange}
          />
        </SignupGroup>
        <SignupGroup>
          <Grouplabel>비밀번호 확인</Grouplabel>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호를 다시 입력해주세요"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </SignupGroup>
        <StartButton onClick={handleSignupClick}>Wingle 가입하기</StartButton>
      </LoginBox>
    </LoginWrapper>
  );
};

export default function ex() {
  return (
    <Suspense>
      <Signup />
    </Suspense>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;
  background-image: url("/assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 50px 0px;
  }

  @media (max-width: 480px) {
    padding: 0px 0px;
  }
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 600px;
  padding: 30px 30px;
  gap: 20px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }

  @media (max-width: 480px) {
    width: 350px;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  width: 200px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const SignupGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Grouplabel = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #303033;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  width: 500px;
  height: 50px;
  border: 1px solid #e1e1e3;
  border-radius: 10px;
  padding: 0px 10px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 40px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;

const TypeGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 500px;

  @media (max-width: 480px) {
    width: 300px;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Radio = styled.input`
  display: none;
`;

const CustomRadio = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const UncheckedIcon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  width: 15px;
  height: 15px;
`;

const CheckedIcon = styled.img`
  display: none;
  width: 24px;
  height: 24px;
  width: 15px;
  height: 15px;
`;

const RadioLabel = styled.label`
  font-size: 16px;
  color: #303033;
  margin-left: 5px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const StartButton = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: #ff812e;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e66f1e;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 40px;
    font-size: 14px;
  }
`;

const CustomRadioInput = styled(Radio)`
  &:checked + ${CustomRadio} ${UncheckedIcon} {
    display: none;
  }

  &:checked + ${CustomRadio} ${CheckedIcon} {
    display: block;
  }
`;
