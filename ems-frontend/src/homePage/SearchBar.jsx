import React, { useState, useEffect } from 'react';
import { listFlights } from '../services/listFlights'; // Import Axios instance

export const airportCityMap = new Map([
    ['SGN', 'Ho Chi Minh City'],
    ['HAN', 'Hanoi'],
    ['JFK', 'New York'],
    ['LHR', 'London'],
    ['DXB', 'Dubai'],
]);
var guestRequest = {
    departure: '',
    destination: '',
    departureTime: '',
    returnDate: '',
    passengers: '',
};
const SearchBar = () => {
  const [customer, setCustomer] = useState([]);

  const [flights, setFlights] = useState([]); // Lưu danh sách chuyến bay lấy từ API
  useEffect(() => {
    listFlights().then((response) => {
        
        setFlights(response.data.content);
    }).catch(error => {
        console.log(error)
    })
  }, [])

    const handleSubmit = () => {

        guestRequest.departure = airportCityMap.get(document.getElementById('departure').value);
        guestRequest.destination = airportCityMap.get(document.getElementById('destination').value);
        guestRequest.departureTime = document.getElementById('departure_time').value;
        guestRequest.returnDate = document.getElementById('returnDate').value;
        guestRequest.passengers = document.getElementById('passengers').value;
        console.log(guestRequest)
  };
  
  const [error, setError] = useState([])

  return (
    <div id="searchContainer" className="container-fluid search-bar position-relative" style={{ top: '-50%' }}>
      <div className="container bg-light p-4 rounded">
        <div className="row g-3">
          <div className="col-md-6 col-lg-3">
            <label htmlFor="departure" className="form-label fw-bold">Từ</label>
            <input id="departure" type="text" className="form-control rounded-pill" placeholder="Nhập tên thành phố..." />
          </div>
          <div className="col-md-6 col-lg-3">
            <label htmlFor="destination" className="form-label fw-bold">Đến</label>
            <input id="destination" type="text" className="form-control rounded-pill" placeholder="Nhập tên thành phố..." />
          </div>
          <div className="col-md-6 col-lg-3">
            <label htmlFor="departure_time" className="form-label">Ngày đi</label>
            <input type="date" className="form-control rounded-pill" id="departure_time" />
          </div>
          <div className="col-md-6 col-lg-3">
            <label htmlFor="returnDate" className="form-label">Ngày về</label>
            <input type="date" className="form-control rounded-pill" id="returnDate" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-lg-3">
            <label htmlFor="passengers" className="form-label">Số hành khách</label>
            <select id="passengers" className="form-select rounded-pill">
              <option value="1">1 Hành khách</option>
              <option value="2">2 Hành khách</option>
              <option value="3">3 Hành khách</option>
              <option value="4">4+ Hành khách</option>
            </select>
          </div>
          <div className="col-md-6 col-lg-3">
            <label htmlFor="promoCode" className="form-label">Mã giảm giá</label>
            <input type="text" className="form-control rounded-pill" id="promoCode" placeholder="Nhập mã giảm giá" />
          </div>
          <div className="col-lg-6 d-flex align-items-end">
            <button id="finding" type="button" className="btn btn-primary w-100 rounded-pill py-2" onClick={handleSubmit}>
              Tìm chuyến bay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
