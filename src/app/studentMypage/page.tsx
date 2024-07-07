"use client";
import React from "react";
import Header from "../../components/Header";
import styled from "styled-components";

const StudentMypage = () => {
  return (
    <>
      <Header />
      <StudentMypageWrapper>
        <Content>
          <NameBox>
            <Name>박상우</Name>
            <NameOthers>님 안녕하세요!</NameOthers>
            <DropdownWrapper>
              <Dropdown>
                <option value="latest">찜한 클래스 보기</option>
                <option value="oldest">신청한 클래스 보기</option>
              </Dropdown>
            </DropdownWrapper>
          </NameBox>
          <PostCard>
            <PostCardImg src="/assets/card/card1.png" />
            <PostInfo>
              <PostName>게시물 이름</PostName>
              <PostSubData>업로드 날짜</PostSubData>
              <PostSubData>신청자 n명</PostSubData>
              <PostSubData>종료 여부: 진행중</PostSubData>
              <PostDescription>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PostDescription>
            </PostInfo>
          </PostCard>
          <PostCard>
            <PostCardImg src="/assets/card/card2.png" />
            <PostInfo>
              <PostName>게시물 이름</PostName>
              <PostSubData>업로드 날짜</PostSubData>
              <PostSubData>신청자 n명</PostSubData>
              <PostSubData>종료 여부: 진행중</PostSubData>
              <PostDescription>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PostDescription>
            </PostInfo>
          </PostCard>
          <PostCard>
            <PostCardImg src="/assets/card/card3.png" />
            <PostInfo>
              <PostName>게시물 이름</PostName>
              <PostSubData>업로드 날짜</PostSubData>
              <PostSubData>신청자 n명</PostSubData>
              <PostSubData>종료 여부: 진행중</PostSubData>
              <PostDescription>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PostDescription>
            </PostInfo>
          </PostCard>
          <PostCard>
            <PostCardImg src="/assets/card/card4.png" />
            <PostInfo>
              <PostName>게시물 이름</PostName>
              <PostSubData>업로드 날짜</PostSubData>
              <PostSubData>신청자 n명</PostSubData>
              <PostSubData>종료 여부: 진행중</PostSubData>
              <PostDescription>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PostDescription>
            </PostInfo>
          </PostCard>
          <PostCard>
            <PostCardImg src="/assets/card/card5.png" />
            <PostInfo>
              <PostName>게시물 이름</PostName>
              <PostSubData>업로드 날짜</PostSubData>
              <PostSubData>신청자 n명</PostSubData>
              <PostSubData>종료 여부: 진행중</PostSubData>
              <PostDescription>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PostDescription>
            </PostInfo>
          </PostCard>
          <PostCard>
            <PostCardImg src="/assets/card/card6.png" />
            <PostInfo>
              <PostName>게시물 이름</PostName>
              <PostSubData>업로드 날짜</PostSubData>
              <PostSubData>신청자 n명</PostSubData>
              <PostSubData>종료 여부: 진행중</PostSubData>
              <PostDescription>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PostDescription>
            </PostInfo>
          </PostCard>
          <PostCard>
            <PostCardImg src="/assets/card/card7.png" />
            <PostInfo>
              <PostName>게시물 이름</PostName>
              <PostSubData>업로드 날짜</PostSubData>
              <PostSubData>신청자 n명</PostSubData>
              <PostSubData>종료 여부: 진행중</PostSubData>
              <PostDescription>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PostDescription>
            </PostInfo>
          </PostCard>
          <PostCard>
            <PostCardImg src="/assets/card/card8.png" />
            <PostInfo>
              <PostName>게시물 이름</PostName>
              <PostSubData>업로드 날짜</PostSubData>
              <PostSubData>신청자 n명</PostSubData>
              <PostSubData>종료 여부: 진행중</PostSubData>
              <PostDescription>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PostDescription>
            </PostInfo>
          </PostCard>
          <PostCard>
            <PostCardImg src="/assets/card/card9.png" />
            <PostInfo>
              <PostName>게시물 이름</PostName>
              <PostSubData>업로드 날짜</PostSubData>
              <PostSubData>신청자 n명</PostSubData>
              <PostSubData>종료 여부: 진행중</PostSubData>
              <PostDescription>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PostDescription>
            </PostInfo>
          </PostCard>
          <PostCard>
            <PostCardImg src="/assets/card/card10.png" />
            <PostInfo>
              <PostName>게시물 이름</PostName>
              <PostSubData>업로드 날짜</PostSubData>
              <PostSubData>신청자 n명</PostSubData>
              <PostSubData>종료 여부: 진행중</PostSubData>
              <PostDescription>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PostDescription>
            </PostInfo>
          </PostCard>
          <PostCard>
            <PostCardImg src="/assets/card/card11.png" />
            <PostInfo>
              <PostName>게시물 이름</PostName>
              <PostSubData>업로드 날짜</PostSubData>
              <PostSubData>신청자 n명</PostSubData>
              <PostSubData>종료 여부: 진행중</PostSubData>
              <PostDescription>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PostDescription>
            </PostInfo>
          </PostCard>
          <PostCard>
            <PostCardImg src="/assets/card/card12.png" />
            <PostInfo>
              <PostName>게시물 이름</PostName>
              <PostSubData>업로드 날짜</PostSubData>
              <PostSubData>신청자 n명</PostSubData>
              <PostSubData>종료 여부: 진행중</PostSubData>
              <PostDescription>
                설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PostDescription>
            </PostInfo>
          </PostCard>
        </Content>
        <Sidebar>
          <StickySidebar>
            <SidebarTitle>목록</SidebarTitle>
            <SidebarItem className="latest" data-short="최신 순">
              내가 찜한 클래스 보기
            </SidebarItem>
            <SidebarItem className="oldest" data-short="오래된 순">
              내가 신청한 클래스 보기
            </SidebarItem>
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
