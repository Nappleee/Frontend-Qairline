import React from 'react'
import TopBar from '../homePage/TopBar'
import Navbar from '../homePage/Navbar'
import Blog from './Blog'
import Carousel from '../homePage/Carousel'
import './BlogPage.css'
function Home() {
    return (
        <div>
            <TopBar/>
            <Navbar/>
            <Carousel/>
            <Blog/>
        </div>
    );
  }
  
  export default Home;