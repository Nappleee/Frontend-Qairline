import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import './AdminLayout.css';

function AdminLayout() {
  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="content">
        <Outlet /> {/* Đây là nơi các route con được hiển thị */}
      </main>
    </div>
  );
}

export default AdminLayout;
