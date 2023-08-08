import React, { useState } from "react";

const COHORT_NAME = "2306-FSA-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    willingToDeliver: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQyOTkyY2FhZjg3NTAwMTRmOTE3OTEiLCJ1c2VybmFtZSI6ImEiLCJpYXQiOjE2OTE1MjMzNzJ9.bSMqNm208WU9k1eYC0Mfh4UVUgZ75oAlLaJGq32hOj4"}`
        },
        body: JSON.stringify({
          post: {
            title: formData.title,
            description: formData.description,
            price: formData.price,
            location: formData.location,
            willDeliver: formData.willingToDeliver
          }
        })
      });

      const result = await response.json();
      console.log(result);

    
      setFormData({
        title: "",
        description: "",
        price: "",
        location: "",
        willingToDeliver: false,
      });

    } catch (err) {
      console.error(err);
    }
  };
    

  return (
    <div>
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        /><br /><br />

        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows="1"
          cols="30"
          required
        ></textarea><br /><br />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
        /><br /><br />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        /><br /><br />

        <label>
          <input
            type="checkbox"
            name="willingToDeliver"
            checked={formData.willingToDeliver}
            onChange={handleInputChange}
          /> Willing to Deliver?
        </label><br /><br />

        <input type="submit" value="CREATE" />
      </form>
    </div>
  );
};

export default AddPost;
