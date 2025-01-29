import React, { useEffect, useState } from 'react';
import styles from '../../componentStyle/home-page/MainContent.module.css';
import axios from 'axios';
const MainContent = () => {
  const [shorts, setShorts] = useState(null);
  const [tranding, setTranding] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/v1/shortsAndTranding/shorts'
        );
        setShorts(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);
  console.log(shorts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/shortsAndTranding/tranding');
        setTranding(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  },[]);
const showShortsVideos = () => (
  <div className={styles.card}>
        {shorts ?
          shorts.data.map((short) => (
            <div key={short.id} className={styles.video}>
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
          :
          <div>no more videos</div>}
      </div>
)

const showTrandingVideos = () => (
  <div className={styles.card}>
        {tranding ?
          tranding.data.map((short) => (
            <div key={short.id} className={styles.trandingvideo}>
              <a
                href={short.videoFile}
                className={styles.link}
                target="_self"
                rel="noopener noreferrer"
              >
                <img
                  src={short.thumbnail}
                  alt={short.title}
                  className={styles.trandingthumbnail}
                />
                <div className={styles.info}>
                  <h2 className={styles.title}>{short.title}</h2>
                  <p className={styles.description}>{short.description}</p>
                </div>
              </a>
            </div>
          ))
          :
          <div>no more videos</div>}
          </div>
)
  return (
    <main className={styles.mainContent}>
{showShortsVideos()}
<h1>Tranding</h1>
    {showTrandingVideos()}
{showShortsVideos()}
{showShortsVideos()}
{showShortsVideos()}
{showShortsVideos()}
{showShortsVideos()}
{showShortsVideos()}
{showShortsVideos()}
    </main>
  );
};

export default MainContent;
