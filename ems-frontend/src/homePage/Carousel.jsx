import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel-header">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src="img/carousel-2.jpg" className="img-fluid" alt="Image" />
            <div className="carousel-caption">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Explore The World</h4>
                <h1 className="display-2 text-capitalize text-white mb-4">Let's The World Together!</h1>
                <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="d-flex align-items-center justify-content-center">
                  <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                </div>
              </div>
            </div>
          </div>
          {/* Các item khác trong carousel */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
          <span className="carousel-control-prev-icon btn bg-primary" aria-hidden="false"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
          <span className="carousel-control-next-icon btn bg-primary" aria-hidden="false"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
