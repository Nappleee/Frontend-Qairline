import React from "react";
import "./PopularFlights.css";

const PopularFlights = () => {
  const flights = [
    {
      id: 1,
      route: "TP. Hồ Chí Minh - Hà Nội",
      date: "06/02/2025",
      price: "979,000 VND",
      image: "/img/hanoi.jpg",
    },
    {
      id: 2,
      route: "Hà Nội - Đà Nẵng",
      date: "09/02/2025",
      price: "666,000 VND",
      image: "/img/dn1.jpg",
    },
    {
      id: 3,
      route: "TP. Hồ Chí Minh - Đà Nẵng",
      date: "16/12/2024",
      price: "1,065,000 VND",
      image: "/img/dn2.jpg",
    },
    {
      id: 4,
      route: "Hà Nội - Phú Quốc",
      date: "25/12/2024",
      price: "1,200,000 VND",
      image: "/img/pq1.jpg",
    },
    {
      id: 5,
      route: "Đà Nẵng - Phú Quốc",
      date: "27/12/2024",
      price: "1,100,000 VND",
      image: "/img/pq2.jpg",
    },
    {
      id: 6,
      route: "Hà Nội - Quy Nhơn",
      date: "25/12/2024",
      price: "1,300,000 VND",
      image: "/img/hn2.jpg",
    },
  ];

  return (
    <div className="container bg-light p-4 rounded" style={{ position: "relative" }}>
    <div className="popular-flights-container">
      <h2 className="popular-flights-title">Popular Flights</h2>
      <div className="flight-grid">
        {flights.map((flight) => (
          <div className="flight-card" key={flight.id}>
            <img
              src={flight.image}
              alt={flight.route}
              className="flight-image"
            />
            <div className="flight-overlay">
              <h3 className="flight-route">{flight.route}</h3>
              <p className="flight-date">{flight.date}</p>
              <p className="flight-price">Từ {flight.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PopularFlights;
