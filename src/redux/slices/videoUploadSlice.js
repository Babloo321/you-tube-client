import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isUploaded:false,
}
const videoUploadSlice = createSlice({
  name: "videoUpload",
  initialState,
  reducers: {
    uploadVideo(state) {
      state.isUploaded = true;
    },
  },
});
export const { uploadVideo } = videoUploadSlice.actions;
export default videoUploadSlice.reducer;