import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import uploadVideoReducer from "./slices/videoUploadSlice.js";
const store = configureStore({
  reducer: {
    auth: authReducer,
    videoUpload: uploadVideoReducer,
  },
});
export default store