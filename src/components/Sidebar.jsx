import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '20px', height: '100vh' }}>
      <h3>Super Admin Dashboard</h3>
      <ul>
        <ul><Link to="/dashboard">Dashboard</Link></ul>
        <ul><Link to="/manage-shops">Shop Owners</Link></ul>
        <ul><Link to="/shopcontext">ShopContext</Link></ul>
        <ul><Link to="/navbar">Logout</Link></ul>

      </ul>
    </div>
  );
};

export default Sidebar;