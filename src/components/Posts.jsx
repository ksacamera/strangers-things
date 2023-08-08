import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom

const COHORT_NAME = "2306-FSA-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        const allPosts = data.data.posts;
        setPosts(allPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []);

  return (
    <div>
      <div >
        <h1>Posts</h1>
        <div >
          <input
            type="text"
            placeholder="Search Posts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to="/add-post">Add Post</Link>
        </div>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>
              <strong>Price:</strong> {post.price}
            </p>
            <p>
              <strong>Seller:</strong> {post.author.username}
            </p>
            <p>
              <strong>Location:</strong> {post.location}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
