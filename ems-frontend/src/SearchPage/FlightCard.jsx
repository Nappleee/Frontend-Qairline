import React, { useState } from "react";
import "./FlightCard.css";

const FlightCard = ({ flight }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flight-card-container">
      <div className="flight-card">
        {/* Thông tin chuyến bay */}
        <div className="flight-details">
          <div className="flight-route">
            <div className="flight-time">
              <p className="location">{flight.departure}</p>
            </div>
            <div className="arrow">→</div>
            <div className="flight-time">
              <p className="location">{flight.destination}</p>
            </div>
          </div>
          <div className="flight-info">
            <p>
              <strong>Thời gian bay:</strong> {flight.departureTime}
            </p>
            <p>
              <strong>Hãng:</strong> {flight.airline}
            </p>
          </div>
        </div>

        {/* Phần giá vé */}
        <div
          className={`flight-price ${isExpanded ? "highlight" : ""}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <p className="price">
            {flight.ticketPrice} <span>VND</span>
          </p>
          <p className="label">Thông tin thêm</p>
        </div>

        {/* Dropdown box */}
        {isExpanded && (
          <div className="flight-extra-info">
            <p>
              <strong>Ký gửi:</strong> {flight.baggage}
            </p>
            <p>
              <strong>Phí đổi vé:</strong> 800,000 VND
            </p>
            <p>
              <strong>Loại vé:</strong> {flight.ticketType}
            </p>
            <div class="confirmAndContinue">
                <button class="button-3" role="button" onClick="checkIfLogin()">Xác nhận đặt chuyến bay?</button>
            </div>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default FlightCard;

