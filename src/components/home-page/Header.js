/*
import React from 'react';
import styles from '../../componentStyle/home-page/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>Looks</div>
    <div className={styles.searchBox}>
      <input type="text" placeholder="Search..." />
    </div>
    <div className={styles.authButtons}>
      <button className={styles.loginButton}>Login</button>
      <button className={styles.signupButton}>Signup</button>
    </div>
  </header>
);

export default Header;
*/
import React, { useState } from "react";
import styles from "../../componentStyle/home-page/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const togglePopup = (signup) => {
    setIsSignup(signup);
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Looks</div>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.authButtons}>
        <button onClick={() => togglePopup(false)} className={styles.loginButton}>Login</button>
        <button onClick={() => togglePopup(true)} className={styles.signupButton}>Signup</button>
      </div>

      {isOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>{isSignup ? "Sign Up" : "Login"}</h2>
            <form>
              {isSignup && 
                <>
  <input type="text" placeholder="Username" className={styles.input} required />
 

  <label className={styles.fileLabel}>Upload Avatar</label>
  <input type="file" name="avatar" className={styles.inputFile} required />

  <label className={styles.fileLabel}>Upload Cover Image</label>
  <input type="file" name="coverImage" className={styles.inputFile} required />
</>

              }
              <input type="text" name="fullName" placeholder="Full Name" className={styles.input} required />
              <input type="email" placeholder="Email" className={styles.input} />
              <input type="password" placeholder="Password" className={styles.input} />
              <button type="submit" className={styles.submitButton}>
                {isSignup ? "Register" : "Login"}
              </button>
            </form>
            <p onClick={() => togglePopup(!isSignup)} className={styles.toggleText}>
              {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
