import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from "./Home";
import Posts from "./Posts";
import Profile from "./Profile";
import Login from "./Login";
import SignUp from "./SignUp";
import AddPost from "./AddPost";
import Authenticate from "./Authenticate"; 

const SignUpForm = ({ setToken }) => {
  return (
    <div>
      <SignUp setToken={setToken} />
      <Authenticate token={setToken} />
    </div>
  );
};

const MainContainer = () => {
  const [token, setToken] = useState(null)

  return (
    <div id="main-section">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="addpost" element={<AddPost />} />
        <Route path="/signup" element={<SignUpForm token={token} setToken={setToken} />} />

      </Routes>
    </div>
  );
};

export default MainContainer;
