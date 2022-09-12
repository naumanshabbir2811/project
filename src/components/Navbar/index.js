import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/customer/signup');
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">StayWithUs</span>
        <div className="navButton">
          <button className="navButton" onClick={handleRegister}>
            Register
          </button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}
