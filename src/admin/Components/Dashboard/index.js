import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuthContext } from '../../../context/AdminAuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './dashboard.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function Dashboard() {
  const [isAuthenticated, { handleChangeAuthContext }] = useUserAuthContext();
  const navigate = useNavigate();
  const handleAuthLogout = () => {
    localStorage.removeItem('auth_token');
    handleChangeAuthContext(false);
    navigate('/admin/signin');
  };
  const value = 0.66;
  return (
    <>
      <div className="dashboard_container">
        <div className="dashboardTopbar">
          <Button onClick={handleAuthLogout}>Logout</Button>
          <input
            type="text"
            className="search_dashboard"
            placeholder="Search Here"
          />
        </div>
        <div className="header_dashboard">
          <div className="dashboardProgressHeader">
            <div className="vl"></div>
            <div className="ProgressHeaderBox">
              <div className="ProgressHeaderBoxLeft">
                <label>Bookings</label>
                <label>600</label>
              </div>
              <div
                className="ProgressHeaderBoxRight"
                style={{ width: 100, height: 100 }}
              >
                <CircularProgressbar
                  value={value}
                  maxValue={1}
                  text={`${value * 100}%`}
                />
              </div>
            </div>
            <div className="vl"></div>
            <div className="ProgressHeaderBox">
              <div className="ProgressHeaderBoxLeft">
                <label>Bookings</label>
                <label>600</label>
              </div>
              <div
                className="ProgressHeaderBoxRight"
                style={{ width: 100, height: 100 }}
              >
                <CircularProgressbar
                  value={value}
                  maxValue={1}
                  text={`${value * 100}%`}
                />
              </div>
            </div>
            <div className="vl"></div>
            <div className="ProgressHeaderBox">
              <div className="ProgressHeaderBoxLeft">
                <label>Bookings</label>
                <label>600</label>
              </div>
              <div
                className="ProgressHeaderBoxRight"
                style={{ width: 100, height: 100 }}
              >
                <CircularProgressbar
                  value={value}
                  maxValue={1}
                  text={`${value * 100}%`}
                />
              </div>
            </div>
            <div className="vl"></div>
            <div className="ProgressHeaderBox">
              <div className="ProgressHeaderBoxLeft">
                <label>Bookings</label>
                <label>600</label>
              </div>
              <div
                className="ProgressHeaderBoxRight"
                style={{ width: 100, height: 100 }}
              >
                <CircularProgressbar
                  value={value}
                  maxValue={1}
                  text={`${value * 100}%`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
