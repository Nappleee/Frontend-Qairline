import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <NavLink to="/" className="navbar-brand p-0">
          <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>Travela</h1>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            {/* Sử dụng NavLink để tự động thêm class active */}
            <NavLink to="/" className="nav-item nav-link" end>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/services" className="nav-item nav-link">
              Services
            </NavLink>
            <NavLink to="/packages" className="nav-item nav-link">
              Packages
            </NavLink>
            <NavLink to="/blog" className="nav-item nav-link">
              Blog
            </NavLink>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu m-0">
                <NavLink to="/destination" className="dropdown-item">
                  Destination
                </NavLink>
                <NavLink to="/tour" className="dropdown-item">
                  Explore Tour
                </NavLink>
                <NavLink to="/booking" className="dropdown-item">
                  Travel Booking
                </NavLink>
                <NavLink to="/gallery" className="dropdown-item">
                  Our Gallery
                </NavLink>
                <NavLink to="/guides" className="dropdown-item">
                  Travel Guides
                </NavLink>
                <NavLink to="/testimonial" className="dropdown-item">
                  Testimonial
                </NavLink>
                <NavLink to="/404" className="dropdown-item">
                  404 Page
                </NavLink>
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link">
              Contact
            </NavLink>
          </div>
          <NavLink to="/" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">
            Book Now
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
