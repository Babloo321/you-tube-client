import React, { useState, useEffect } from "react";
import styles from "../../../componentStyle/auth/Profile.module.css";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from '../../../utlis.js';
import { ToastContainer } from 'react-toastify';
const Profile = ({ onClose }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p>Loading user data...</p>; // Show a loading message if user is null
  }

  const { userName, email, avatar } = user;
  const handleViewChannels = () =>{
    navigate("/channels");
    onClose();
  }
  const handleLogout = () =>{
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    handleSuccess('User Loggedout');
    onClose();
    setTimeout(() => {
        navigate('/login');
    }, 1000)
    window.location.reload();

  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <ul className={styles.profileDetails}>
        <div className={styles.userDetails}>
          <div><img src={avatar} alt="User Avatar" className={styles.avatar} /></div>
          <div>
          <li><strong>{userName.toUpperCase()}</strong> </li>
          <li><strong> {email}</strong></li>
          <li><strong><button className={styles.channels} onClick={handleViewChannels}>View your Channels</button></strong></li>
          </div>
        </div>
        <hr />
        <div>
          <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </div>

        </ul>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
