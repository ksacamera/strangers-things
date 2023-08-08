import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import Profile from "./Profile";
import Login from "./Login";
import SignUp from "./SignUp";
import AddPost from "./AddPost";

const MainContainer = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="add" element={<AddPost />} />
      </Routes>
    </div>
  );
};


export default MainContainer;