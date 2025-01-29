import React from 'react';
import styles from '../../componentStyle/home-page/LeftSidebar.module.css';
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const LeftSidebar = () => (
  <aside className={styles.leftSidebar}>
    <div className={styles.menuSection}>
      <ul>
        <li><IoMdHome />&nbsp;&nbsp;Home</li>
        <li><SiYoutubeshorts />&nbsp;&nbsp;Shorts</li>
        <li>&nbsp;&nbsp;Subscribers</li>
      </ul>
    </div>
    <div className={styles.menuSection}>
      <ul>
        <li><CgProfile />&nbsp;&nbsp;You</li>
        <li><FaHistory />&nbsp;&nbsp;History</li>
      </ul>
    </div>
    <div className={styles.signInSection}>
      <p>Sign in to like videos, comment, and subscribe.</p>
      <button className={styles.signInButton}>Sign In</button>
    </div>
    <div className={styles.exploreSection}>
      <h3>Explore</h3>
      <ul>
        <li><FaArrowTrendUp />&nbsp;&nbsp;Trending</li>
        <li><SiYoutubeshorts />&nbsp;&nbsp;Shorts</li>
      </ul>
    </div>
  </aside>
);

export default LeftSidebar;
