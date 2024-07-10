import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-secondary">
      <NavBar />
      <div className="p-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
