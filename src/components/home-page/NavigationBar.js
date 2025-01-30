import React from "react";
import styles from "../../componentStyle/home-page/RightSidebar.module.css";

const NavigationBar = ({ setActiveCategory }) => {
  const categories = ["All", "News", "Music", "Videos", "Shorts", "Trending"];

  return (
    <aside className={styles.rightSidebar}>
      <div className={styles.linkContainer}>
        <ul>
          {categories.map((category) => (
            <li key={category} onClick={() => setActiveCategory(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default NavigationBar;

