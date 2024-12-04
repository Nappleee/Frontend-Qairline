import React from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'
import './Home.css'
function Home() {
    return (
        <div>
            {/* Đây là comment trong JSX */}
            <Navbar/>
            <TopBar/>
            
        </div>
    );
  }
  
  export default Home;