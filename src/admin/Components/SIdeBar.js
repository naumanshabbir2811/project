import React from 'react';
import logo from '../../assests/images/logo1.png';
import { AiOutlineKey, AiOutlineUser } from 'react-icons/ai';
import styled from 'styled-components';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default function SideBar() {
  return (
    <>
      {' '}
      <Div
        className="sidebar"
        style={{ border: '2px solid var(--secondary-color)' }}
      >
        <div className="title_logo">
          <img src={logo} alt="" width="150px" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link to="dashboard" style={{ textDecoration: 'none' }}>
            <div
              className="siderbar_content_box link"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '30px',
              }}
            >
              <i
                className="fa-solid fa-hotel"
                style={{ fontSize: '30px', color: 'var(--secondary-color)' }}
              ></i>
              <h6
                style={{
                  marginTop: '20px',
                  fontSize: '16px',
                  color: 'var(--secondary-color)',
                  fontWeight: 'bold',
                }}
              >
                Dashboard
              </h6>
            </div>
          </Link>
          <Link to="rooms" className="link">
            <div
              className="siderbar_content_box"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '30px',
                cursor: 'pointer',
              }}
            >
              <AiOutlineKey
                style={{ fontSize: '30px', color: 'var(--secondary-color)' }}
              />
              <h6
                style={{
                  marginTop: '20px',
                  fontSize: '16px',
                  color: 'var(--secondary-color)',
                  fontWeight: 'bold',
                }}
              >
                Rooms
              </h6>
            </div>
          </Link>
          <Link to="bookings" className="link">
            <div
              className="siderbar_content_box"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '30px',
              }}
            >
              <BsFillCalendar2CheckFill
                style={{ fontSize: '40px', color: 'var(--secondary-color)' }}
              />
              <h6
                style={{
                  marginTop: '20px',
                  fontSize: '18px',
                  color: 'var(--secondary-color)',
                  fontWeight: 'bold',
                }}
              >
                Bookings
              </h6>
            </div>
          </Link>
          <Link to="guests" className="link">
            <div
              className="siderbar_content_box"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '30px',
              }}
            >
              <AiOutlineUser
                style={{ fontSize: '40px', color: 'var(--secondary-color)' }}
              />
              <h6
                style={{
                  marginTop: '20px',
                  fontSize: '18px',
                  color: 'var(--secondary-color)',
                  fontWeight: 'bold',
                }}
              >
                Guests
              </h6>
            </div>
          </Link>
        </div>
      </Div>
    </>
  );
}
const Div = styled.div`
  .link {
    text-decoration: none;
  }
`;
