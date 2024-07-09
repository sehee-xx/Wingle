"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import { parseJwt } from "../../../utils/jwt";
import { useRouter } from "next/navigation";

interface Course {
  id: number;
  title: string;
  name: string;
  date: string;
  participants: number;
  currentParticipants: number;
  phone: string;
  description: string;
  image: string;
  images: string[];
  price: string;
  content: string;
  numWishes: number;
  createdAt: string;
  isFavorite: boolean;
}

const MySwal = withReactContent(Swal);

const ExpertMypage = () => {
  const [displayName, setDisplayName] = useState("");
  const [userId, setUserId] = useState("");
  const [userType, setUserType] = useState("expert");
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [sortByField, setSortByField] = useState<string>("created_at");
  const [sortByDirection, setSortByDirection] = useState<string>("desc");
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const user = parseJwt(storedToken);
      setUserInfo(user);
      localStorage.setItem("userId", user?.userId);
      setUserId(user?.userId);
      localStorage.setItem("userType", user?.type);
      setUserType(user?.type);
      localStorage.setItem("displayName", user?.displayName);
      setDisplayName(user?.displayName);
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            `${process.env.BACKEND_HOSTNAME}/courses/mypage?sort_by_field=${sortByField}&sort_by_direction=${sortByDirection}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setCourses(res.data.courses || []);
        } catch (error) {
          console.error("Error fetching mypage:", error);
        }
      };
      fetchData();
    }
  }, [token, sortByField, sortByDirection]);

  const handleDeletePost = async (postId: number) => {
    try {
      const response = await axios.delete(
        `${process.env.BACKEND_HOSTNAME}/courses/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Delete response:", response);

      if (response.status === 200) {
        // 상태 코드가 200인 경우에 상태를 업데이트
        const updatedCourses = courses.filter((course) => course.id !== postId);
        setCourses(updatedCourses);
      }

      if (window.innerWidth <= 768) {
        MySwal.fire({
          icon: "success",
          title: "게시물 삭제 성공",
          text: "게시물이 성공적으로 삭제되었습니다.",
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
          title: "게시물 삭제 성공",
          text: "게시물이 성공적으로 삭제되었습니다.",
          confirmButtonText: "확인",
          confirmButtonColor: "#FF812E",
          customClass: {
            popup: "swal-custom-popup",
            title: "swal-custom-title",
            htmlContainer: "swal-custom-html-container",
          },
        });
      }
    } catch (error) {
      console.error("Delete error:", error);
      Swal.fire({
        icon: "error",
        title: "게시물 삭제 실패",
        text: error.response ? error.response.data.message : error.message,
      });
    }
  };

  const handleCreateClick = () => {
    router.push("/createClass");
  };

  const handleEditClick = (id: number) => {
    router.push(`/editClass/${id}`);
  };

  return (
    <>
      <Header />
      <ExpertMypageWrapper>
        <Content>
          <NameBox>
            <div>
              <Name>{displayName}</Name>
              <NameOthers>님 안녕하세요!</NameOthers>
            </div>
            {courses.length > 0 && (
              <CreateClassButtonInNameBox onClick={handleCreateClick}>
                클래스 등록하기
              </CreateClassButtonInNameBox>
            )}
            <DropdownWrapper>
              <Dropdown
                value={`${sortByField}_${sortByDirection}`}
                onChange={(e) => {
                  const [field, direction] = e.target.value.split("_");
                  if (courses) {
                    setSortByField(
                      field === "popularity" ? "popularity" : `${field}_at`
                    );
                    setSortByDirection(
                      e.target.value.substring(10).replace("_", "")
                    );
                    if (e.target.value.startsWith("popularity")) {
                      setSortByDirection("desc");
                    }
                  }
                }}
              >
                <option value="created_at_desc">최신 순</option>
                <option value="created_at_asc">오래된 순</option>
                <option value="popularity_desc">찜 많은 순</option>
              </Dropdown>
            </DropdownWrapper>
          </NameBox>
          {courses.length ? (
            courses.map((course) => (
              <PostCard
                key={course.id}
                onClick={() => router.push(`/card/${course.id}`)}
              >
                <IconWrapper>
                  <EditIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(course.id);
                    }}
                  />
                  <DeleteIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeletePost(course.id);
                    }}
                  />
                </IconWrapper>
                <PostCardImg
                  src={
                    course.images && course.images.length > 0
                      ? course.images[0]
                      : "/path/to/default/image.jpg"
                  }
                  alt={course.title}
                />
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
              <NoClassImage src="/assets/expert.svg" alt="No Classes" />
              <NoClassText>아직 등록된 클래스가 없습니다.</NoClassText>
              <CreateClassButton onClick={handleCreateClick}>
                클래스 등록하기
              </CreateClassButton>
            </NoClassContainer>
          )}
        </Content>
        <Sidebar>
          <StickySidebar>
            <SidebarTitle>목록</SidebarTitle>
            <SidebarItem
              onClick={() => {
                setSortByField("created_at");
                setSortByDirection("desc");
              }}
            >
              최신 순으로 보기
            </SidebarItem>
            <SidebarItem
              onClick={() => {
                setSortByField("created_at");
                setSortByDirection("asc");
              }}
            >
              오래된 순으로 보기
            </SidebarItem>
            <SidebarItem
              onClick={() => {
                setSortByField("popularity");
                setSortByDirection("desc");
              }}
            >
              찜하기 많은 순으로 보기
            </SidebarItem>
          </StickySidebar>
        </Sidebar>
      </ExpertMypageWrapper>
    </>
  );
};

export default ExpertMypage;

const ExpertMypageWrapper = styled.div`
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
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const CreateClassButtonInNameBox = styled.button`
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
  position: relative;

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
  flex: 1;
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

const IconWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  gap: 10px;
`;

const EditIcon = styled(FaEdit)`
  color: #303033;
  cursor: pointer;
  &:hover {
    color: #ff812e;
  }
`;

const DeleteIcon = styled(FaTrashAlt)`
  color: #303033;
  cursor: pointer;
  &:hover {
    color: #ff812e;
  }
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

const CreateClassButton = styled.button`
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
