"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../../../components/Header";
import CreateClassForm from "../../../components/CreateClassForm";

const EditClassPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [initialData, setInitialData] = useState(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);

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

  const handleSuccess = () => {
    router.push("/expertMypage");
  };

  const handleSubmit = async (formData) => {
    const data = new FormData();
    for (const key in formData) {
      const value = formData[key as keyof typeof formData];
      if (value !== undefined) {
        data.append(key, value);
      }
    }

    if (thumbnail) {
      data.append("thumbnail", thumbnail);
    }

    additionalImages.forEach((image) => {
      data.append(`additionalImages`, image);
    });

    const token = localStorage.getItem("token");

    try {
      // Axios 요청 설정
      await axios.put(`${process.env.BACKEND_HOSTNAME}/courses/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "multipart/form-data", // 헤더를 설정하지 않으면 브라우저가 자동으로 설정합니다.
        },
      });
      handleSuccess();
    } catch (error) {
      console.error("Failed to update class:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to update class",
        text: error.response ? error.response.data.message : error.message,
      });
    }
  };

  if (!initialData) return <div>Loading...</div>;

  return (
    <>
      <Header />
      {/* <CreateClassForm
        initialData={initialData}
        onSubmit={handleSubmit}
        mode="edit"
      /> */}
      <CreateClassForm initialData={initialData} mode="edit" />
    </>
  );
};

export default EditClassPage;
