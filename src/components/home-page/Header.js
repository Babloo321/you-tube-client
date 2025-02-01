import React, { useState,useEffect } from 'react';
import styles from '../../componentStyle/home-page/Header.module.css';
import Signup from './auth/Signup.js'
import Login from './auth/Login.js';
import Profile from './auth/Profile.js'
const Header = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [token, setToken] = useState(null);
  const [user,setUser] = useState(null);
  useEffect(() =>{
    setToken(localStorage.getItem("accessToken"));
    setUser(JSON.parse(localStorage.getItem("user")));
  },[]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Looks</div>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search..." />
      </div>
{
  token ? (
    <div className={styles.avatarButton}>
        <img src={user.avatar} alt='avatar' className={styles.avatar} onClick={()=>setShowProfile(true)}/>
      </div>
  ) : (
    <div className={styles.authButtons}>
        <button className={styles.loginButton} onClick={()=>setShowLogin(true)}>Login</button>
        <button className={styles.signupButton} onClick={() =>setShowSignup(true)}>Signup</button>
      </div>
  )
}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showProfile && <Profile onClose={() => setShowProfile(false)}/>}
    </header>
  );
};

export default Header;
