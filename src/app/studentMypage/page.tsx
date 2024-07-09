"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import axios from "axios";
import { parseJwt } from "../../../utils/jwt";
import { useRouter } from "next/navigation";

interface Course {
  id: number;
  title: string;
  date: string;
  participants: number;
  currentParticipants: number;
  description: string;
  image: string;
}

const StudentMypage = () => {
  const [displayName, setDisplayName] = useState("");
  const [token, setToken] = useState<string>("");
  const [courses, setCourses] = useState<Course[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const user = parseJwt(storedToken);
      setDisplayName(user?.displayName);
      setToken(storedToken);
    }
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.BACKEND_HOSTNAME}/courses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const wishedCourses = res.data.courses
        .filter
        // (course: Course) => course.wishelists && course.wishes.length > 0
        ();
      setCourses(wishedCourses || []);
    } catch (error) {
      console.error("Error fetching mypage:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const handleViewClick = () => {
    router.push("/");
  };

  return (
    <>
      <Header />
      <StudentMypageWrapper>
        <Content>
          <NameBox>
            <Name>{displayName}</Name>
            <NameOthers>님 안녕하세요!</NameOthers>
            <DropdownWrapper>
              <Dropdown>
                <option value="latest">찜한 클래스 보기</option>
                <option value="oldest">신청한 클래스 보기</option>
              </Dropdown>
            </DropdownWrapper>
          </NameBox>
          {courses.length > 0 ? (
            courses.map((course) => (
              <PostCard key={course.id}>
                <PostCardImg src={course.image} />
                <PostInfo>
                  <PostName>{course.title}</PostName>
                  <PostSubData>{course.date}</PostSubData>
                  <PostSubData>신청자 {course.participants}명</PostSubData>
                  <PostSubData>
                    종료 여부:{" "}
                    {course.currentParticipants >= course.participants
                      ? "종료"
                      : "진행중"}
                  </PostSubData>
                  <PostDescription>{course.description}</PostDescription>
                </PostInfo>
              </PostCard>
            ))
          ) : (
            <NoClassContainer>
              <NoClassImage src="/assets/student.svg" alt="No Classes" />
              <NoClassText>아직 찜한 클래스가 없습니다.</NoClassText>
              <ViewClassButton onClick={handleViewClick}>
                클래스 구경하기
              </ViewClassButton>
            </NoClassContainer>
          )}
        </Content>
        <Sidebar>
          <StickySidebar>
            <SidebarTitle>목록</SidebarTitle>
            <SidebarItem>내가 찜한 클래스 보기</SidebarItem>
            <SidebarItem>내가 신청한 클래스 보기</SidebarItem>
          </StickySidebar>
        </Sidebar>
      </StudentMypageWrapper>
    </>
  );
};

export default StudentMypage;

const StudentMypageWrapper = styled.div`
  display: flex;
  padding: 100px;

  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    padding-top: 90px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 30px;
  }
`;

const Content = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding-left: 150px;

  @media (max-width: 1024px) {
    padding-left: 10px;
  }

  @media (max-width: 480px) {
    padding-left: 0px;
  }
`;

const Sidebar = styled.div`
  flex: 1;
  margin-left: 20px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Name = styled.label`
  font-size: 24px;
  font-weight: 700;
  color: #ff812e;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const NameOthers = styled.label`
  font-size: 20px;
  font-weight: 700;
  color: #303033;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const PostCard = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  background-color: #f7f8f9;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  padding: 30px 30px;
  box-sizing: border-box;
  border-radius: 10px;
  gap: 15px;
  cursor: pointer;

  @media (max-width: 480px) {
    margin-top: 20px;
    padding: 15px 15px;
  }
`;

const PostCardImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PostName = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #303033;
`;

const PostSubData = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #303033;
`;

const PostDescription = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #303033;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;

  @media (max-width: 480px) {
    display: none;
  }
`;

const StickySidebar = styled.div`
  position: sticky;
  top: 100px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const SidebarTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #303033;
  margin-bottom: 10px;
`;

const SidebarItem = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  padding: 15px;
  color: #303033;
  background-color: #f1f1f1;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e66f1e;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    &.latest::after {
      content: "최신 순";
    }

    &.oldest::after {
      content: "오래된 순";
    }

    &.most-liked::after {
      content: "찜 많은 순";
    }

    &.latest,
    &.oldest,
    &.most-liked {
      font-size: 14px;
      content: attr(data-short);
    }
  }
`;

const DropdownWrapper = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    margin-left: auto;
  }
`;

const Dropdown = styled.select`
  padding: 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: #303033;
  font-size: 12px;
`;

const NoClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 10px;
`;

const NoClassImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 50%;
`;

const NoClassText = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #303033;
  margin-bottom: 20px;
`;

const ViewClassButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
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
`;
