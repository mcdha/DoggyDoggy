import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://specialdog.online/api/savedata', formData)
      .then((response) => {
        console.log('Data saved successfully:', response.data);
        // Perform any additional actions after successful save
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        // Handle the error gracefully
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {/* Add more input fields here */}
      <button type="submit">Save</button>
    </form>
  );
};

export default MyForm;
