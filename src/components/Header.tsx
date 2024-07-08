"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { parseJwt } from "../../utils/jwt";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [userId, setUserId] = useState("");
  const [userType, setUserType] = useState("expert");
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const token = localStorage.getItem("token");
    if (token) {
      const user = parseJwt(token);
      setUserInfo(user);
      setToken(localStorage.getItem("token") ?? "");
      localStorage.setItem("userId", user?.userId);
      setUserId(localStorage.getItem("userId") ?? "");
      localStorage.setItem("userType", user?.type);
      setUserType(localStorage.getItem("userType") ?? "expert");
      localStorage.setItem("displayName", user?.displayName);
      setDisplayName(localStorage.getItem("displayName") ?? "");
    }
  }, []);

  const handleSigninClick = () => {
    router.push("/signin");
  };

  const handleSignupClick = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userType");
      localStorage.removeItem("displayName");
      setUserInfo(null);
      if (window.innerWidth <= 768) {
        MySwal.fire({
          icon: "success",
          title: "로그아웃 되었습니다!",
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
          title: "로그아웃 되었습니다!",
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
    } else {
      router.push("/signup");
    }
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleProfileClick = () => {
    if (userType === "expert") {
      router.push("/expertMypage");
    } else {
      router.push("/studentMypage");
    }
  };

  return (
    <>
      <HeaderWrapper>
        <Logo onClick={handleLogoClick} src="/assets/logo.svg" alt="Logo" />
        <SignBox>
          <Signin onClick={handleSigninClick}>
            {token
              ? localStorage.getItem("displayName") + "님 안녕하세요!"
              : "로그인"}
          </Signin>
          <Signup onClick={handleSignupClick}>
            {token ? "로그아웃" : "회원가입"}
          </Signup>
          <Profile
            onClick={handleProfileClick}
            src={
              userType === "student"
                ? "/assets/student.svg"
                : "/assets/expert.svg"
            }
          />
        </SignBox>
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  z-index: 1000;
  border-bottom: 1px solid #e1e1e2;
  padding: 5px 240px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 5px 20px;
  }

  @media (max-width: 768px) {
    padding: 5px 20px;
  }
`;

const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

const SignBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Signin = styled.div`
  font-size: 14px;
  color: #303033;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Signup = styled.div`
  font-size: 14px;
  color: #303033;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;
