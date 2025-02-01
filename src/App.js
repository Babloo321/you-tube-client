import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Header from "./components/home-page/Header.js";
import LeftSidebar from "./components/home-page/LeftSidebar.js";
import Home from "./components/home-page/home/Home.js";
import Login from "./components/home-page/auth/Login.js";
import Signup from "./components/home-page/auth/Signup.js";
import Channels from "./components/landing-page/channel/Channels.js";
import RefreshHandler from "./RefreshHandler.js";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("accessToken") // Initial check
  );

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("accessToken"));
  }, []);

  // ✅ Private Route: Redirects if user is NOT authenticated
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <Provider store={store}>
      <div className="App">
        <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <Header />
        <LeftSidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/channel" element={<PrivateRoute element={<Channels />} />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Provider>
  );
}

export default App;
