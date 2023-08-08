import React, { useState } from "react";

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic here

    // Clear form inputs after submission
    setFormData({
      title: "",
      description: "",
      price: "",
      location: "",
      willingToDeliver: false,
    });
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
