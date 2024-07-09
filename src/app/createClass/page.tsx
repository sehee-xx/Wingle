"use client";

import React from "react";
import CreateClassForm from "../../components/CreateClassForm";
import Header from "../../components/Header";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);

const CreateClassPage = () => {
  return (
    <>
      <Header />
      <CreateClassForm mode="create" />
    </>
  );
};

export default CreateClassPage;
