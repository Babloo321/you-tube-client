import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null, // Store user _id from the database
  userName:null,
  fullName:null,
  avatar:null,
  coverImage:null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      const { userId, userName, fullName, avatar, coverImage } = action.payload;
      state.userId = userId;
      state.userName = userName;
      state.fullName = fullName;
      state.avatar = avatar;
      state.coverImage = coverImage;
      state.isAuthenticated = true; // Mark user as logged in
    },
    logoutUser(state) {
      return { ...initialState }; // Reset state to initial values
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
