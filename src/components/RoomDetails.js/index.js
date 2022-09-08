import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import hoteldetail from '../../assests/images/hoteldetail.png';
import hoteldetail2 from '../../assests/images/hoteldetail2.png';
import hoteldetail3 from '../../assests/images/hoteldetail3.png';
export default function RoomDetails() {
  const location = useLocation();
  return (
    <Div className="container" style={{ marginTop: '30px' }}>
      <div className="header">
        <p style={{ width: '1%' }}>{location.pathname}</p>
        <div
          className="title "
          style={{ flexDirection: 'column', alignItems: 'center' }}
        >
          <h2 className="text-color-primary">Village Angga</h2>
          <h6 style={{ color: 'var(--secondary-color)' }}>Bogar Indonesia</h6>
        </div>
        <div></div>
      </div>
      <div
        className="image_content "
        style={{ justifyContent: 'space-between' }}
      >
        <div className="left_box">
          <img src={hoteldetail} alt="" width="600px" />
        </div>
        <div className="right_box">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <img src={hoteldetail2} alt="" width="460px" height="220px" />
            </div>
            <div>
              <img src={hoteldetail3} alt="" width="460px" height="220px" />
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: 'center';
  }
  .image_content {
    display: flex;
    justify-content: space-between;
  }
`;
