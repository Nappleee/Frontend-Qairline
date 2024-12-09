import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from './homePage/Home'
import SearchPage from './SearchPage/SearchPage'
import Admin from './admin/Admin'
import AboutPage from './AboutPage/AboutPage'
import BlogPage from './BlogPage/BlogPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/admin/*" element={<Admin/>} />
      </Routes>
    </Router>
  )
}

export default App
