import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const AircraftService = {
  // Lấy toàn bộ danh sách Aircraft
  getAllAircrafts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getAllAircrafts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching all aircrafts:', error);
      throw error;
    }
  },

  // Lấy Aircrafts theo phân trang
  getAircraftsByPage: async (page, size) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/aircrafts`, {
        params: { page, size },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching paginated aircrafts:', error);
      throw error;
    }
  },

  // Tìm kiếm Aircrafts theo từ khóa
  searchAircrafts: async (keyword, page, size) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/aircraftsSearch`, {
        params: { keyword, page, size },
      });
      return response.data;
    } catch (error) {
      console.error('Error searching aircrafts:', error);
      throw error;
    }
  },

  // Thêm mới Aircraft
  createAircraft: async (aircraftRequest) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/admin/aircrafts`, aircraftRequest);
      return response.data;
    } catch (error) {
      console.error('Error creating aircraft:', error);
      throw error;
    }
  },

  // Xóa Aircraft
  deleteAircraft: async (model) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/deleteaircraft`, null, {
        params: { model },
      });
      return response.data;
    } catch (error) {
      console.error('Error deleting aircraft:', error);
      throw error;
    }
  },
};

export default AircraftService;
