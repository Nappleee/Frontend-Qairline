import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
var availableFlights = [];
const suggestions = {
  "Việt Nam": [
    { code: "HAN", name: "Hà Nội" },
    { code: "SGN", name: "Tp. Hồ Chí Minh" },
    { code: "DAD", name: "Đà Nẵng" },
    { code: "PQC", name: "Phú Quốc" },
  ],
  "Đông Bắc Á": [
    { code: "NRT", name: "Tokyo" },
    { code: "ICN", name: "Seoul" },
    { code: "PEK", name: "Bắc Kinh" },
  ],
  "Đông Nam Á": [
    { code: "BKK", name: "Bangkok" },
    { code: "KUL", name: "Kuala Lumpur" },
    { code: "SIN", name: "Singapore" },
    { code: "CGK", name: "Jakarta" },
    { code: "PNH", name: "Phnom Penh" },
    { code: "VTE", name: "Viêng Chăn" },
  ],
};

const SearchBar = () => {
  const navigate = useNavigate();
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [showSuggestions, setShowSuggestions] = useState({
    departure: false,
    destination: false,
  });
  const [activeCategory, setActiveCategory] = useState("Việt Nam");

  

  const handleSubmit = () => {
     // Lấy hàm điều hướng từ react-router-dom
  
    // Chuẩn hóa thông tin tìm kiếm
    const departureCode = departure.split(" (")[1]?.replace(")", "") || departure;
    const destinationCode = destination.split(" (")[1]?.replace(")", "") || destination;
    const passengers = document.getElementById("passengers").value;
  
    if (!departureCode || !destinationCode || !date) {
      alert("Vui lòng nhập đầy đủ thông tin tìm kiếm!");
      return;
    }
  
    // Tìm chuyến bay phù hợp
    const filteredFlights = availableFlights.filter((flight) => {
      const flightDate = flight.departureTime.split("<br>")[0]; // Lấy ngày từ `departureTime`
      return (
        flight.departure === departureCode &&
        flight.destination === destinationCode &&
        flightDate === date
      );
    });
  
    // Điều hướng sang trang SearchPage với kết quả tìm kiếm
    navigate("/search", {
      state: {
        departure: departureCode,
        destination: destinationCode,
        date,
        passengers,
        filteredFlights, // Gửi danh sách chuyến bay phù hợp
      },
    });
  };
  

  const handleFocusInput = (type) => {
    // Đóng dropdown khác, chỉ mở dropdown hiện tại
    setShowSuggestions((prev) => ({
      departure: type === "departure",
      destination: type === "destination",
    }));
  };

  const renderSuggestions = (type) => (
    <div
      style={{
        top: "100%",
        left: 0,
        width: "100%", // Rộng theo input
        backgroundColor: "#f8f9fa",
        border: "1px solid lightgray",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 10,
        maxHeight: "200px", // Giới hạn chiều cao dropdown
        overflow: "hidden", // Chỉ cuộn phần cần thiết
      }}
    >
      {/* Nút đóng */}
      <div
        style={{
          top: "8px",
          right: "8px",
          cursor: "pointer",
          fontSize: "14px",
          color: "#007bff",
          padding: "4px",
        }}
        onClick={() =>
          setShowSuggestions((prev) => ({ ...prev, [type]: false }))
        }
        onMouseEnter={(e) => (e.target.style.color = "red")}
        onMouseLeave={(e) => (e.target.style.color = "#007bff")}
      >
        ✖
      </div>
  
      {/* Danh mục và sân bay */}
      <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
        {/* Danh mục */}
        <div
          style={{
            borderRight: "1px solid lightgray",
            paddingRight: "10px",
            flex: "0 0 150px",
          }}
        >
          {Object.keys(suggestions).map((category) => (
            <div
              key={category}
              style={{
                backgroundColor: activeCategory === category ? "white" : "#007bff",
                color: activeCategory === category ? "black" : "white",
                padding: "10px",
                marginBottom: "5px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
  
        {/* Danh sách sân bay */}
        <div
          style={{
            flex: 1,
            maxHeight: "200px", // Giới hạn chiều cao
            overflowY: "auto", // Chỉ cuộn danh sách sân bay
          }}
        >
          {suggestions[activeCategory]?.map((place) => (
            <div
              key={place.code}
              style={{
                cursor: "pointer",
                padding: "10px",
                borderBottom: "1px solid lightgray",
              }}
              onMouseEnter={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.target.style.textDecoration = "none";
              }}
              onClick={() => {
                if (type === "departure") {
                  setDeparture(`${place.name} (${place.code})`);
                } else {
                  setDestination(`${place.name} (${place.code})`);
                }
                setShowSuggestions((prev) => ({ ...prev, [type]: false }));
              }}
            >
              {place.name} ({place.code})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  

  return (
    <div className="container bg-light p-4 rounded" style={{ position: "relative" }}>
      <div className="row g-3">
        {/* Departure Input */}
        <div className="col-md-6 col-lg-3">
          <label htmlFor="departure" className="form-label fw-bold">
            Từ
          </label>
          <input
            className="form-control rounded-pill"
            type="text"
            id="departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            onFocus={() => handleFocusInput("departure")}
          />
          {showSuggestions.departure && renderSuggestions("departure")}
        </div>

        {/* Destination Input */}
        <div className="col-md-6 col-lg-3">
          <label htmlFor="destination" className="form-label fw-bold">
            Đến
          </label>
          <input
            className="form-control rounded-pill"
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onFocus={() => handleFocusInput("destination")}
          />
          {showSuggestions.destination && renderSuggestions("destination")}
        </div>

        {/* Date Input */}
        <div className="col-md-6 col-lg-3">
          <label htmlFor="departure_time" className="form-label">
            Ngày đi
          </label>
          <input
            type="date"
            className="form-control rounded-pill"
            id="departure_time"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Return Date */}
        <div className="col-md-6 col-lg-3">
          <label htmlFor="returnDate" className="form-label">
            Ngày về
          </label>
          <input type="date" className="form-control rounded-pill" id="returnDate" />
        </div>
      </div>
      {/* Passengers */}
      <div className="row mt-3">
        <div className="col-md-6 col-lg-3">
          <label htmlFor="passengers" className="form-label">
            Số hành khách
          </label>
          <select id="passengers" className="form-select rounded-pill">
            <option value="1">1 Hành khách</option>
            <option value="2">2 Hành khách</option>
            <option value="3">3 Hành khách</option>
            <option value="4">4+ Hành khách</option>
          </select>
        </div>
        <div className="col-md-6 col-lg-3">
          <label htmlFor="promoCode" className="form-label">
            Mã giảm giá
          </label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="promoCode"
            placeholder="Nhập mã giảm giá"
          />
        </div>
        <div className="col-lg-6 d-flex align-items-end">
          <button
            type="button"
            className="btn btn-primary w-100 rounded-pill py-2"
            onClick={handleSubmit}
          >
            Tìm chuyến bay
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
