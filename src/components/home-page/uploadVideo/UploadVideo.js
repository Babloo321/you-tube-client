import React, { useState } from 'react';
import styles from '../../../componentStyle/uploadVideo/uploadVideo.module.css';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../../utlis.js';
import { useDispatch } from "react-redux";
import { uploadVideo } from "../../../redux/slices/videoUploadSlice.js";
import API from '../../../axiosInstance.js';

const UploadVideo = ({ isOpen, onClose  }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    if (!title || !description || !thumbnail || !videoFile) {
      handleError('All fields are required');
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('thumbnail', thumbnail);
    formData.append('videoFile', videoFile);
    if (!formData) {
      setError('Something went wrong with formating data. Please try again.');
    }
    try {
      const response = await API.post('/videos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { message } = response.data;
      console.log('Message: ', message);
      if (!message) {
        setError('Failed to upload video. Please try again.');
      }else{
        handleSuccess("Video uploaded successfully"); // ✅ Show success toast
      }
      dispatch(uploadVideo());
      setTitle('');
      setDescription('');
      setThumbnail(null);
      setVideoFile(null);
      onClose(); // Close modal after success
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        'Failed to upload video. Please try again.';
      setError(errorMessage);
      handleError(errorMessage); // ✅ Show error toast
    } finally {
      setLoading(false);
      
    }
  };

  return (
    isOpen && (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <h2>Upload Video</h2>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                name="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="thumbnail">Thumbnail</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setThumbnail(e.target.files[0])}
                required
              />
            </div>
            <div>
              <label htmlFor="videoFile">Video File</label>
              <input
                name="videoFile"
                type="file"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files[0])}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Uploading...' : 'Upload'}
            </button>
            <button type="button" onClick={onClose} className={styles.closeBtn}>
              Close
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    )
  );
};

export default UploadVideo;
