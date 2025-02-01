import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../../componentStyle/auth/Login.module.css';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../../utlis.js';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = formData;
    if (!email || !password) {
      handleError('Email and password are required');
      setLoading(false);
      return;
    }

    try {
      // Sending request to the server
      const response = await axios.post(
        'http://localhost:8000/api/v1/users/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      const { success,message } = response.data;

      if (success) {
        const { user, accessToken, refreshToken } = response.data.data;
        if (user && accessToken) {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          
        }else{
          handleError("Not found accessToken");
        }
        handleSuccess(message);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        handleError(message || 'Login failed');

      }
      onClose();
      window.location.reload();

    } catch (err) {
      console.error('Login Error:', err.response?.data || err.message);
      handleError(err.response?.data?.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <label className={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <span>
            Don't have an account? <Link to="/signup">Signup</Link>
          </span>
        </form>

        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
      
      {/* ✅ Ensure ToastContainer is properly placed */}
      <ToastContainer />
    </div>
  );
};

export default Login;
