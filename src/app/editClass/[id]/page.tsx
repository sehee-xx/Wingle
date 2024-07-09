"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../../../components/Header";
import CreateClassForm from "../../../components/CreateClassForm";
import styled from "styled-components";

const EditClassPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchClassData = async () => {
        try {
          const response = await axios.get(
            `${process.env.BACKEND_HOSTNAME}/courses/${id}`
          );
          setInitialData(response.data);
        } catch (error) {
          console.error("Failed to fetch class data:", error);
          Swal.fire({
            icon: "error",
            title: "Failed to fetch class data",
            text: error.response ? error.response.data.message : error.message,
          });
        }
      };
      fetchClassData();
    }
  }, [id]);

  if (!initialData)
    return (
      <LoadingWrapper>
        <LoadingImage src="/assets/wingle.png" alt="Loading" />
        <LoadingText>Loading...</LoadingText>
      </LoadingWrapper>
    );

  return (
    <>
      <Header />
      <CreateClassForm initialData={initialData} mode="edit" />
    </>
  );
};

export default EditClassPage;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f8f9;
`;

const LoadingImage = styled.img`
  width: 120px;
  height: 120px;
`;

const LoadingText = styled.div`
  margin-top: 20px;
  font-size: 30px;
  color: #ff812e;
  font-weight: 600;
`;
