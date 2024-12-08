import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import UserManagement from './UserManagement';

function Admin() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="users" element={<UserManagement/>} />
        <Route path="reports" element={<div>Báo cáo</div>} />
      </Route>
    </Routes>
  );
}

export default Admin;
