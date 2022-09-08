import React from 'react';
import logo from '../../assests/images/logo1.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="container mt-4">
      <div className="row nav_main">
        <div className="col nav_left">
          <img src={logo} alt="" height="40px" style={{ cursor: 'pointer' }} />
        </div>
        <div className="col nav_right mt-2">
          <ul className="d-flex  ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/browse">Browse by</Link>
            </li>
            <li>
              <Link to="/story">Story</Link>
            </li>
            <li>
              <Link to="/agent">Agent</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
