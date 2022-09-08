import React from 'react';
import styled from 'styled-components';
import featured1 from '../../assests/images/featured1.png';
import featured2 from '../../assests/images/featured2.png';
import featured3 from '../../assests/images/featured3.png';
import featured4 from '../../assests/images/featured4.png';
import featured5 from '../../assests/images/featured5.png';
import houses1 from '../../assests/images/houses1.png';
import houses2 from '../../assests/images/houses2.png';
import { useNavigate } from 'react-router-dom';
export default function Featured() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/room/details');
  };
  return (
    <Div className="container mt-5" style={{ height: '100vh' }}>
      <h6>Most Picked</h6>
      <div className="content">
        <div className="upper_box">
          <div className="hotel_box_left" style={{ position: 'relative' }}>
            <img
              src={featured1}
              alt=""
              width="360px"
              height="460px"
              style={{
                borderRadius: '40px 40px 40px 40px',
              }}
            />
            <div
              className="rectangular"
              style={{
                width: '180px',
                height: '40px',
                position: 'absolute',
                top: '0%',
                right: '8%',
                backgroundColor: 'var(--primary-color)',
                borderRadius: '0px 8px',
                padding: '10px',
                color: 'var(--secondary-color)',
                cursor: 'pointer',
              }}
            >
              pkr 50 per Night
            </div>
          </div>
          <div className="hotel_box_middle">
            <div className="hotel_box">
              <img
                src={featured2}
                alt=""
                style={{
                  width: '361px',
                  height: '245px',
                  borderRadius: '20px 42px 90px 49px ',
                }}
              />
            </div>
            <div className="hotel_box">
              <img
                src={featured3}
                alt=""
                style={{
                  width: '361px',
                  height: '245px',
                  borderRadius: '20px 40px 100px 49px ',
                }}
              />
            </div>
          </div>
          <div className="hotel_box_middle">
            <div className="hotel_box">
              <img
                src={featured4}
                alt=""
                style={{
                  width: '361px',
                  height: '245px',
                  borderRadius: '20px 45px 111px 44px ',
                }}
              />
            </div>
            <div className="hotel_box">
              <img
                src={featured5}
                alt=""
                style={{
                  width: '361px',
                  height: '245px',
                  borderRadius: '20px 40px 100px 49px ',
                }}
              />
            </div>
          </div>
        </div>
        <div className="lower_box">
          <h3>Houses with Beauty Backyard</h3>
          <div className="lower_boxes">
            <div className="room_box">
              <div style={{ height: '190px', width: '280px' }}>
                <img src={houses1} alt="" width="380" />
              </div>
              <h4>Tabby Town</h4>
              <h6>Gunung Batu Indonesia</h6>
            </div>
            <div className="room_box" onClick={handleNavigate}>
              <div style={{ height: '190px', width: '260px' }}>
                <img src={houses2} alt="" width="360px" />
              </div>
              <h4>Angana </h4>
              <h6>Gunung Batu Indonesia</h6>
            </div>
            <div className="room_box">
              <div style={{ height: '190px', width: '260px' }}>
                <img src={houses2} alt="" width="360px" />
              </div>
              <h4>Tabby Town</h4>
              <h6>Gunung Batu Indonesia</h6>
            </div>
            <div className="room_box">
              <div style={{ height: '190px', width: '260px' }}>
                <img src={houses2} alt="" width="360px" />
              </div>
              <h4>Tabby Town</h4>
              <h6>Gunung Batu Indonesia</h6>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}
const Div = styled.div`
  .container {
    height: 100vh;
    // width: 100wh;
    // display: none;
  }

  .upper_box {
    display: flex;
    flex-direction: row;
  }
  .hotel_box_middle {
    display: flex;
    flex-direction: column;
  }
  .lower_boxes {
    display: flex;
    justify-content: center;
  }
  .room_box {
    display: flex;
    flex-direction: column;
    width: 280px;
    cursor: pointer;
  }
  h4 {
    color: var(--primary-color);
  }
`;
