import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <div id="navbar">
      <h2>Stranger's Things</h2>
      <Link to="home">HOME</Link>
      <Link to="posts">POSTS</Link>
      <Link to="profile">PROFILE</Link>
      <Link to="login">LOGOUT</Link>
    </div>
    </>
  )   
  
}

export default NavBar;


