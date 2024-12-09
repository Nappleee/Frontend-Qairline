import React from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'
import SearchBar from './SearchBar';
import Carousel from './Carousel'
import PopularFlights from './PopularFlights'
import './Home.css'
function Home() {
    return (
        <div>
            <TopBar/>
            <Navbar/>
            <Carousel/>
            <SearchBar/>
            <PopularFlights/>
        </div>
    );
  }
  
  export default Home;