import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/customer/signup');
  };
  const handleLogin = () => {
    navigate('/customer/signin');
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link
          to="/"
          style={{
            color: 'inherit',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <span className="logo">StayWithUs</span>
        </Link>
        <div className="navButton">
          <button className="navButton" onClick={handleRegister}>
            Register
          </button>
          <button className="navButton" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
