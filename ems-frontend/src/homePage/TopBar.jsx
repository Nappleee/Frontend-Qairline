import React from 'react';
import './TopBar.css';

function TopBar() {
  return (
    <div className="container-fluid bg-primary px-5 d-none d-lg-block">
      <h1></h1>
      <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
              <i className="fab fa-twitter fw-normal"></i>
            </a>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
              <i className="fab fa-facebook-f fw-normal"></i>
            </a>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
              <i className="fab fa-linkedin-in fw-normal"></i>
            </a>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
              <i className="fab fa-instagram fw-normal"></i>
            </a>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="#">
              <i className="fab fa-youtube fw-normal"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
            <a href="#" className="me-3 text-light">
              <small><i className="fa fa-user me-2"></i>Register</small>
            </a>

            <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="custom-link">
              <small className="me-3 text-light">
                <i className="fa fa-sign-in-alt me-2"></i>Đăng nhập
              </small>
            </a>

            {/* Modal */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">Đăng nhập</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">Tên đăng nhập</label>
                        <input type="text" className="form-control" id="username" placeholder="Nhập tên đăng nhập" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                        <input type="password" className="form-control" id="password" placeholder="Nhập mật khẩu" />
                      </div>
                      <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-primary">Đăng nhập</button>
                        <a href="#" className="btn btn-link text-decoration-none">Đăng ký tài khoản</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown */}
            <div className="dropdown">
              <a href="#" className="dropdown-toggle text-light" data-bs-toggle="dropdown">
                <small><i className="fa fa-home me-2"></i> My Dashboard</small>
              </a>
              <div className="dropdown-menu rounded">
                <a href="#" className="dropdown-item">
                  <i className="fas fa-user-alt me-2"></i> My Profile
                </a>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-comment-alt me-2"></i> Inbox
                </a>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-bell me-2"></i> Notifications
                </a>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-cog me-2"></i> Account Settings
                </a>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-power-off me-2"></i> Log Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
