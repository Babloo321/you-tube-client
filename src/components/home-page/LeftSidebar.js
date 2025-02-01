
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../componentStyle/home-page/LeftSidebar.module.css";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RiVideoAddFill } from "react-icons/ri";

const LeftSidebar = () => {
  const [token,setToken] = useState(null);
  useEffect(() =>{
    setToken(localStorage.getItem("accessToken"));
  },[])
  return (
    <aside className={styles.leftSidebar}>
      <div className={styles.menuSection}>
        <ul>
          <li>
            <Link to="/" className={styles.activeLink}>
              <IoMdHome />&nbsp;&nbsp;Home
            </Link>
          </li>
          <li>
            <Link to="/shorts" className={styles.activeLink}>
              <SiYoutubeshorts />&nbsp;&nbsp;Shorts
            </Link>
          </li>
          <li>
            <Link to="/subscribers" className={styles.activeLink}>
              &nbsp;&nbsp;Subscribers
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.menuSection}>
        <ul>
          <li>
            <Link to="/profile" className={styles.activeLink}>
              <CgProfile />&nbsp;&nbsp;You
            </Link>
          </li>
          <li>
            <Link to="/history" className={styles.activeLink}>
              <FaHistory />&nbsp;&nbsp;History
            </Link>
          </li>
        </ul>
      </div>
    {
      token ? (
        <div className={styles.addVideo}>
        <button className={styles.addVideoButton}><RiVideoAddFill className={styles.icon} />&nbsp;&nbsp;Upload</button>
        </div>
      ) : (
        <div className={styles.signInSection}>
        <p>Sign in to like videos, comment, and subscribe.</p>
        <button className={styles.signInButton}>Sign In</button>
      </div>

      )
    }
    
      <div className={styles.exploreSection}>
        <h3>Explore</h3>
        <ul>
          <li>
            <Link to="/trending" className={styles.activeLink}>
              <FaArrowTrendUp />&nbsp;&nbsp;Trending
            </Link>
          </li>
          <li>
            <Link to="/shorts" className={styles.activeLink}>
              <SiYoutubeshorts />&nbsp;&nbsp;Shorts
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default LeftSidebar;
