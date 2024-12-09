import React from 'react'
import TopBar from '../homePage/TopBar'
import Navbar from '../homePage/Navbar'
import About from './About'
import Carousel from '../homePage/Carousel'
import './AboutPage.css'
function Home() {
    return (
        <div>
            <TopBar/>
            <Navbar/>
            <Carousel/>
            <About/>
        </div>
    );
  }
  
  export default Home;