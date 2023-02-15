import React from "react";
import "react-quill/dist/quill.snow.css";
import { Outlet } from "react-router";
import Profile from "../components/MyPage/Profile";
const MyPage = () => {
  return (
    <section className="max-w-7xl mx-auto flex rounded-lg shadow mt-24">
      <Profile />
      <Outlet />
    </section>
  );
};
export default MyPage;
