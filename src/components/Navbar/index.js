import React from 'react';
// import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">StayWithUs</span>
        <div className="navButton">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}
