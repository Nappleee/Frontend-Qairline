export const airportCityMap = new Map([
    ['SGN', 'Ho Chi Minh City'],
    ['HAN', 'Hanoi'],
    ['JFK', 'New York'],
    ['LHR', 'London'],
    ['DXB', 'Dubai'],
]);
export function gettingCustomerRequest(setCustomer) {
    // Lấy giá trị từ DOM
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const departureTime = document.getElementById('departure_time').value;
    const returnDate = document.getElementById('returnDate').value;
    const passengers = document.getElementById('passengers').value;

    console.log(departureTime); // Log giá trị ngay lập tức

    // Sử dụng callback để cập nhật state
    setCustomer((prevCustomer) => ({
        ...prevCustomer, // Giữ nguyên các giá trị cũ
        departure: airportCityMap.get(departure), // Map mã thành phố thành tên
        destination: airportCityMap.get(destination),
        departure_time: departureTime,
        returnDate,
        passengers,
    }));

    // Vì setState là bất đồng bộ, bạn không thể log giá trị mới của state ở đây
    console.log('State sau khi setCustomer:', {
        departure: airportCityMap.get(departure),
        destination: airportCityMap.get(destination),
        departure_time: departureTime,
        returnDate,
        passengers,
    });
}
