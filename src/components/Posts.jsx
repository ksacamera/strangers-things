import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const COHORT_NAME = "2306-FSA-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQyOTkyY2FhZjg3NTAwMTRmOTE3OTEiLCJ1c2VybmFtZSI6ImEiLCJpYXQiOjE2OTE1MjMzNzJ9.bSMqNm208WU9k1eYC0Mfh4UVUgZ75oAlLaJGq32hOj4"

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const userId = localStorage.getItem("userId");

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

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        setPosts(posts.filter((post) => post._id !== postId));
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Posts</h1>
        <div>
          <input
            type="text"
            placeholder="Search Posts"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <Link to="/addpost">Add Post</Link>
        </div>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>
              <strong>Description:</strong> {post.description}
            </p>
            <p>
              <strong>Price:</strong> {post.price}
            </p>
            <p>
              <strong>Seller:</strong> {post.author.username}
            </p>
            <p>
              <strong>Location:</strong> {post.location}
            </p>
            {post.author._id === userId && (
              <button onClick={() => handleDeletePost(post._id, TOKEN)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
