import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchResult.css";
import { listFlights } from "../services/listFlights"; // Import Axios instance
import Spinner from "../homePage/spinner"
import FlightCard from "./FlightCard"
const SearchResult = () => {
  const { state } = useLocation(); // Nhận thông tin từ navigate
  const { departure, destination, date } = state;

  const [flights, setFlights] = useState([]); // State để lưu danh sách chuyến bay
  const [isLoading, setIsLoading] = useState(true); // State để kiểm tra trạng thái tải

  useEffect(() => {
    // Gọi API để lấy danh sách chuyến bay
    listFlights()
      .then((response) => {
        const allFlights = response.data.content;

        // Lọc danh sách chuyến bay phù hợp với yêu cầu
        const filteredFlights = allFlights.filter((flight) => {
          const flightDate = flight.departureTime.split("<br>")[0]; // Lấy ngày từ `departureTime`
          return (
            flight.departure === departure &&
            flight.destination === destination
          );
        });
        console.log(departure, destination)
        setFlights(filteredFlights); // Cập nhật state với danh sách đã lọc
        setIsLoading(false); // Tắt trạng thái tải
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách chuyến bay:", error);
        setIsLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
      });
  }, [departure, destination, date]);

  return (
    <div className="search-page">
      <div className="search-header">
        <h2>Kết quả chuyến bay từ {departure} đến {destination}</h2>
        <p>Ngày: {date}</p>
      </div>

      {isLoading ? (
        <Spinner />
      ) : flights.length > 0 ? (
        <div className="flights-container">
          {flights.map((flight) => (
            <FlightCard key={flight.flightId} flight={flight} />
          ))}
        </div>
      ) : (
        <p className="no-flights">Không tìm thấy chuyến bay phù hợp.</p>
      )}
    </div>
  );
};

export default SearchResult;
