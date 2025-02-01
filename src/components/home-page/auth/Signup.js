import React, { useState } from "react";
import axios from "axios";
import styles from "../../../componentStyle/auth/Signup.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../../utlis.js';
const Signup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    avatar: null,
    coverImage: null,
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      const formDataToSend = new FormData();
  
      // Append text fields
      formDataToSend.append("userName", formData.userName);
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
  
      // Append file fields
      if (formData.avatar) {
        formDataToSend.append("avatar", formData.avatar); // Attach file directly
      }else{
        handleError("Please select an avatar");
      }
  
      if (formData.coverImage) {
        formDataToSend.append("coverImage", formData.coverImage);
      }
  
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );
      handleSuccess("User Registeration is in processing, Please wait...");
      setTimeout(() => {
        navigate("/login");
        onClose();
      }, 1000);
      // Clear form after submission
      setFormData({
        userName: "",
        fullName: "",
        email: "",
        password: "",
        avatar: null,
        coverImage: null,
      });

    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
      handleError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Sign Up</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* UserName */}
          <label htmlFor="userName" className={styles.label}>Username:</label>
          <input type="text" name="userName" placeholder="Username" onChange={handleChange} required />

          {/* Full Name */}
          <label htmlFor="fullName" className={styles.label}>Full Name:</label>
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />

          {/* Email */}
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />

          {/* Password */}
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

          {/* Avatar Upload */}
          <label htmlFor="avatar" className={styles.label}>Upload Avatar:</label>
          <input type="file" name="avatar" onChange={handleChange} required/>

          {/* Cover Image Upload */}
          <label htmlFor="coverImage" className={styles.label}>Upload Cover Image:</label>
          <input type="file" name="coverImage" onChange={handleChange} required />

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
          <span>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </span>
        </form>

        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
