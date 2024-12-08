import React from 'react';
import './TopBar.css';
import Login from './Login';

function TopBar() {
  return (
    <div className="container-fluid bg-primary px-5 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
              <i className="fab fa-twitter fw-normal"></i>
            </a>
            {/* Other social buttons */}
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
