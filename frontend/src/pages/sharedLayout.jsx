import React from "react";
import AppHeader from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const SharedLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
