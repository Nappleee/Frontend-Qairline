import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

const userService = {
  // Lấy danh sách người dùng theo phân trang
  getUsers: async (page, size) => {
    const response = await axios.get(`${BASE_URL}/users`, {
      
      params: { page, size },
    });
    console.log(response.data)
  },

  // Tìm kiếm người dùng theo từ khóa và phân trang
  searchUsers: async (keyword, page, size) => {
    const response = await axios.get(`${BASE_URL}/usersSearch`, {
      params: { keyword, page, size },
    });
    return response.data;
  },
};

export default userService;
