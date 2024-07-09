"use client";

import React from "react";
import CreateClassForm from "../../components/CreateClassForm";
import Header from "../../components/Header";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);

const CreateClassPage = () => {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(`${process.env.BACKEND_HOSTNAME}/courses`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push("/expertMypage");
    } catch (error) {
      console.error("Failed to create class:", error);
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
      {/* <CreateClassForm onSubmit={handleSubmit} mode="create" /> */}
      <CreateClassForm mode="create" />
    </>
  );
};

export default CreateClassPage;
