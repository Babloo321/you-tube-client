import React from 'react';
import Header from './components/home-page/Header.js'
import LeftSidebar from './components/home-page/LeftSidebar.js';
import RightSidebar from './components/home-page/RightSidebar.js';
import MainContent from './components/home-page/MainContent.js';
import './App.css'
const App = () => (
  <div className='App'>
    <Header />
    <LeftSidebar />
    <RightSidebar />
    <MainContent />
  </div>
);

export default App;
