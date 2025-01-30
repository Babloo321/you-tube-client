import React from 'react';
import Header from './components/home-page/Header.js'
import LeftSidebar from './components/home-page/LeftSidebar.js';
import Home from './components/home-page/home/Home.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
function App() {
  return (
  <div className='App'>
    <Header />
    <Router>
    <LeftSidebar />
    <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscribers" element={<Subscribers />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/trending" element={<Trending />} /> */}
          </Routes>
    </Router>
    {/* <Home /> */}
  </div>
  )
};

export default App;
