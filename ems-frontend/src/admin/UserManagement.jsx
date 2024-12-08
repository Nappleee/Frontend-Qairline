import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import userService from '../services/userService'; // Service để gọi API
import './UserManagement.css';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const USERS_PER_PAGE = 5;

  const fetchUsers = async () => {
    try {
      const response = searchKeyword
        ? await userService.searchUsers(searchKeyword, currentPage - 1, USERS_PER_PAGE)
        : await userService.getUsers(currentPage - 1, USERS_PER_PAGE);

      setUsers(response.content || []);
      setTotalPages(response.totalPages || 1);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage, searchKeyword]);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    setCurrentPage(1);
  };

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="user-management">
      <h1>Customer Management</h1>

      {/* Thanh tìm kiếm */}
      <SearchBar onSearch={handleSearch} />

      {/* Tổng số bản ghi */}
      <div className="mt-4">
        <span>{users.length} records found</span>
      </div>

      {/* Bảng danh sách người dùng */}
      <div className="table-container mt-4">
        <table className="table" id="usersTable">
          <thead className="table-header">
            <tr>
              <th>User ID</th>
              <th>Full Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Role</th>
              <th>Create at</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.fullName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.address}</td>
                <td>{user.role}</td>
                <td>{new Date(user.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Phân trang */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={() => handlePageChange('next')}
        onPrev={() => handlePageChange('prev')}
      />
    </div>
  );
}

export default UserManagement;
