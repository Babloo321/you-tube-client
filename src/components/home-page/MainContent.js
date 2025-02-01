import React, { useEffect, useState } from "react";
import styles from "../../componentStyle/home-page/MainContent.module.css";
import axios from "axios";

const MainContent = ({ activeCategory }) => {
  const [shorts, setShorts] = useState(null);
  // const [trending, setTrending] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/shortsAndTranding/shorts"
        );
        setShorts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8000/api/v1/shortsAndTranding/tranding"
  //       );
  //       setTrending(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const showShortsVideos = () => (
    <div className={styles.card}>
      {shorts ? (
        shorts.data.map((short,index) => (
          <div key={index} className={styles.video}>
            <a
              href={short.videoFile}
              className={styles.link}
              target="_self"
              rel="noopener noreferrer"
            >
              <img
                src={short.thumbnail}
                alt={short.title}
                className={styles.thumbnail}
              />
              <div className={styles.info}>
                <h2 className={styles.title}>{short.title}</h2>
                <p className={styles.description}>{short.description}</p>
              </div>
            </a>
          </div>
        ))
      ) : (
        <div>No more videos</div>
      )}
    </div>
  );

  // const showTrendingVideos = () => (
  //   <div className={styles.card}>
  //     {trending ? (
  //       trending.data.map((short) => (
  //         <div key={short.id} className={styles.trendingVideo}>
  //           <a
  //             href={short.videoFile}
  //             className={styles.link}
  //             target="_self"
  //             rel="noopener noreferrer"
  //           >
  //             <img
  //               src={short.thumbnail}
  //               alt={short.title}
  //               className={styles.trendingThumbnail}
  //             />
  //             <div className={styles.info}>
  //               <h2 className={styles.title}>{short.title}</h2>
  //               <p className={styles.description}>{short.description}</p>
  //             </div>
  //           </a>
  //         </div>
  //       ))
  //     ) : (
  //       <div>No more videos</div>
  //     )}
  //   </div>
  // );

  return (
    <main className={styles.mainContent}>
      {activeCategory === "All" && (
        <>
          {showShortsVideos()}
          <h1>Trending</h1>
          {showShortsVideos()}
          {/* {showTrendingVideos()} */}
        </>
      )}
      {activeCategory === "Shorts" && showShortsVideos()}
      {activeCategory === "Trending" && showShortsVideos()}
      {activeCategory === "Music" && <h1>Music Content Coming Soon...</h1>}
      {activeCategory === "News" && <h1>News Content Coming Soon...</h1>}
      {activeCategory === "Videos" && <h1>Video Content Coming Soon...</h1>}
    </main>
  );
};

export default MainContent;
