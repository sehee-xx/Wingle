"use client";
import React from "react";
import Header from "../../components/Header";
import styled from "styled-components";

const Mypage = () => {
  return (
    <>
      <Header />
      <MypageWrapper>
        <Content>
          <NameBox>
            <Name>양세희</Name>
            <NameOthers>님 안녕하세요!</NameOthers>
          </NameBox>
          <PostCard>
            <PostCardImg src="/assets/card1.png" />
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
            <PostCardImg src="/assets/card2.png" />
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
            <PostCardImg src="/assets/card3.png" />
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
            <PostCardImg src="/assets/card4.png" />
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
            <PostCardImg src="/assets/card5.png" />
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
            <PostCardImg src="/assets/card6.png" />
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
            <PostCardImg src="/assets/card7.png" />
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
            <PostCardImg src="/assets/card8.png" />
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
            <PostCardImg src="/assets/card9.png" />
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
            <PostCardImg src="/assets/card10.png" />
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
            <PostCardImg src="/assets/card11.png" />
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
            <PostCardImg src="/assets/card12.png" />
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
            <SidebarItem>최신 순으로 보기</SidebarItem>
            <SidebarItem>오래된 순으로 보기</SidebarItem>
            <SidebarItem>찜하기 많은 순으로 보기</SidebarItem>
          </StickySidebar>
        </Sidebar>
      </MypageWrapper>
    </>
  );
};

export default Mypage;

const MypageWrapper = styled.div`
  display: flex;
  padding: 100px;
`;

const Content = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const Sidebar = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.label`
  font-size: 24px;
  font-weight: 700;
  color: #ff812e;
`;

const NameOthers = styled.label`
  font-size: 20px;
  font-weight: 700;
  color: #303033;
`;

const PostCard = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f7f8f9;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  padding: 30px 30px;
  box-sizing: border-box;
  border-radius: 10px;
  gap: 15px;
  cursor: pointer;
`;

const PostCardImg = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 10px;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PostName = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #303033;
`;

const PostSubData = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #303033;
`;

const PostDescription = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #303033;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
`;

const StickySidebar = styled.div`
  position: sticky;
  top: 100px;
`;

const SidebarTitle = styled.h2`
  font-size: 14px;
  font-weight: 700;
  color: #303033;
  margin-bottom: 10px;
`;

const SidebarItem = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
  padding: 10px;
  color: #303033;
  background-color: #f1f1f1;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e66f1e;
    color: #ffffff;
  }
`;
