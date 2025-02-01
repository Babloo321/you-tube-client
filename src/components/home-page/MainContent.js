import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import styles from "../../componentStyle/home-page/MainContent.module.css";

const MainContent = ({ activeCategory }) => {
  const [shorts, setShorts] = useState([]);
  const [trending, setTrending] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/shortsAndTranding/shorts");
        setShorts(response.data.data || []);
      } catch (error) {
        console.error("Error fetching shorts videos:", error);
      }
    };

    const fetchTrending = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/shortsAndTranding/tranding");
        setTrending(response.data.data || []);
      } catch (error) {
        console.error("Error fetching trending videos:", error);
      }
    };

    fetchShorts();
    fetchTrending();
  }, []);

  // Scroll Slider
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 400;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 400;
    }
  };

  return (
    <main className={styles.mainContent}>
      {/* Shorts Videos (3 in a Row) */}
      {activeCategory === "All" || activeCategory === "Shorts" ? (
        <>
          <h2>{""}</h2>
          <div className={styles.shortsContainer}>
            {shorts.slice(0, 3).map((short, index) => (
              <div key={index} className={styles.videoCard}>
                <a href={short.videoFile} target="_self" rel="noopener noreferrer">
                  <img src={short.thumbnail} alt={short.title} className={styles.thumbnail} />
                  <div className={styles.videoInfo}>
                    <h3>{short.title}</h3>
                    <p>{short.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {/* Trending Videos (Slider) */}
      {activeCategory === "All" || activeCategory === "Trending" ? (
        <>
          <h2>Trending</h2>
          <div className={styles.trendingContainer}>
            <button className={styles.slideButton} onClick={slideLeft}>❮</button>
            <div className={styles.trendingSlider} ref={sliderRef}>
              {trending.map((trend, index) => (
                <div key={index} className={styles.trendingVideoCard}>
                  <a href={trend.videoFile} target="_self" rel="noopener noreferrer">
                    <img src={trend.thumbnail} alt={trend.title} className={styles.trendingThumbnail} />
                    <div className={styles.trendingInfo}>
                      <h3>{trend.title}</h3>
                      <p>{trend.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <button className={styles.slideButton} onClick={slideRight}>❯</button>
          </div>
        </>
      ) : null}
    </main>
  );
};

export default MainContent;
