import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Cột hình ảnh */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="https://via.placeholder.com/500x300" 
              alt="About QAirline" 
              className="img-fluid rounded shadow-lg"
            />
          </div>
          {/* Cột nội dung */}
          <div className="col-lg-6">
            <h2 className="about-title mb-4">About QAirline</h2>
            <p className="about-description mb-3">
              QAirline is an innovative airline founded by three talented and passionate students: 
            </p>
            <ul className="about-team mb-4">
              <li><i className="fa fa-user text-primary me-2"></i>Nguyễn Văn A - MSSV: 123456789</li>
              <li><i className="fa fa-user text-primary me-2"></i>Trần Thị B - MSSV: 987654321</li>
              <li><i className="fa fa-user text-primary me-2"></i>Lê Hoàng C - MSSV: 456789123</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
