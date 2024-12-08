import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const menuItems = [
    { label: 'Dashboard', link: '/admin/dashboard', icon: '🏠' },
    { label: 'Aircraft', link: '/admin/aircrafts', icon: '✈️' },
    { label: 'Customer', link: '/admin/users', icon: '👤' },
    { label: 'Ticket', link: '/admin/tickets', icon: '🎫' },
    { label: 'Content', link: '/admin/announcements', icon: '📄' },
    { label: 'Promotion', link: '/admin/promotions', icon: '💸' },
    { label: 'Flight', link: '/admin/flights', icon: '🛫' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <nav className="sidebar-menu">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
