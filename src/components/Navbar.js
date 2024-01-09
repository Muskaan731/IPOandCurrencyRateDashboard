// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-item">Home</Link>
      <div className="nav-right">
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/register" className="nav-item">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
