import React, { useState, useEffect } from "react";

const COHORT_NAME = "2306-FSA-ET-WEB-FT-SF"; 
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const Profile = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        const allMessages = data.data.posts;
        setMessages(allMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    getMessages();
  }, []);

  return (
    <>
      <h1>Welcome So&So</h1>
      <p>Messages to Me:</p>
      <ul>
        {messages.map(message => (
          <li key={message._id}>{message.content}</li>
        ))}
      </ul>
    </>
  );
};

export default Profile;
