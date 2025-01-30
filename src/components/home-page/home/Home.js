import React, {useState} from 'react'
import NavigationBar from '../NavigationBar.js'
import MainContent from '../MainContent.js'
function Home() {
    
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <>
          <NavigationBar setActiveCategory={setActiveCategory}/>
          <MainContent activeCategory={activeCategory}/>
    </>
  )
}

export default Home