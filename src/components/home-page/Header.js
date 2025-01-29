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
