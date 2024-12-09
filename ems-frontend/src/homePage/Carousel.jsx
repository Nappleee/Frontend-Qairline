import React from 'react';
const images = [
  {
    src: '/img/VIE-2600x1111 2609.jpg',
    alt: 'Image 1',
    caption: {
      title: 'Explore The World',
      subtitle: "Let's The World Together!",
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  },
  {
    src: '/img/1024x512.webp',
    alt: 'Image 2',
    caption: {
      title: 'Discover New Horizons',
      subtitle: 'Adventure Awaits',
      text: 'Find amazing places and create memories.',
    },
  },
  {
    src: '/img/2600x1111_hello_monday.jpg',
    alt: 'Image 3',
    caption: {
      title: 'Unleash Your Curiosity',
      subtitle: 'Journey to the Unknown',
      text: 'Explore, learn, and grow.',
    },
  },
];

const Carousel = () => {
  return (
    <div className="carousel-header">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="true">
        {/* Indicators */}
        <ol className="carousel-indicators">
          {images.map((_, index) => (
            <li
              key={index}
              data-bs-target="#carouselId"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>

        {/* Carousel items */}
        <div className="carousel-inner" role="listbox">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img src={image.src} className="img-fluid" alt={image.alt} />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: '3px' }}
                  >
                    {image.caption.title}
                  </h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">
                    {image.caption.subtitle}
                  </h1>
                  <p className="mb-5 fs-5">{image.caption.text}</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon btn bg-primary"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon btn bg-primary"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
