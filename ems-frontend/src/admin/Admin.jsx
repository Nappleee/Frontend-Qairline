import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import UserManagement from './UserManagement';
import AircraftPage from './Aircraft/AircraftPage';

function Admin() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="users" element={<UserManagement/>} />
        <Route path="aircrafts" element={<AircraftPage/>}/>
        <Route path="reports" element={<div>Báo cáo</div>} />
      </Route>
    </Routes>
  );
}

export default Admin;
