import React from 'react';
import banner from '../../assests/images/banner.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';
export default function Banner() {
  return (
    <Div className="container d-flex banner ">
      <div className="col-6 left">
        <h3
          style={{
            color: 'var(--primary-color)',
            fontSize: '42px',
            fontWeight: 'bold',
          }}
        >
          Forget Busy Work,
          <br />
          Start new Vacation
        </h3>
        <p
          style={{
            color: 'var(--secondary-color)',
            fontWeight: '400',
            fontSize: '18px',
            width: '340px',
            lineHeight: '30px',
            marginTop: '20px',
          }}
        >
          We Provide you what you need for your holiday with family , Time to
          make another Memorable Moments
        </p>
        <button
          className="btn"
          style={{
            backgroundColor: 'var(--trimary-color)',
            color: '#fff',
            padding: '10px 20px',
          }}
        >
          Show Me More
        </button>
        <div className="icons_banner">
          <div className="box mt-4">
            <i
              className="fa-solid fa-suitcase-rolling"
              style={{ fontSize: '40px', color: 'var(--primary-color)' }}
            ></i>
            <p
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'var(--primary-color)',
              }}
            >
              10,000{' '}
              <span
                style={{
                  fontWeight: 'lighter',
                  color: 'var(--secondary-color)',
                  fontSize: '16px',
                }}
              >
                Travels
              </span>
            </p>
          </div>
          <div className="box mt-4">
            <i
              className="fa-solid fa-camera"
              style={{ fontSize: '40px', color: 'var(--primary-color)' }}
            ></i>
            <p
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'var(--primary-color)',
              }}
            >
              10,000{' '}
              <span
                style={{
                  fontWeight: 'lighter',
                  color: 'var(--secondary-color)',
                  fontSize: '16px',
                }}
              >
                Travels
              </span>
            </p>
          </div>
          <div className="box mt-4">
            <i
              className="fa-solid fa-location-dot"
              style={{ fontSize: '40px', color: 'var(--primary-color)' }}
            ></i>
            <p
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'var(--primary-color)',
              }}
            >
              10,000{' '}
              <span
                style={{
                  fontWeight: 'lighter',
                  color: 'var(--secondary-color)',
                  fontSize: '16px',
                }}
              >
                Travels
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-6 ">
        <img
          src={banner}
          alt=""
          width="500px"
          style={{ borderRadius: '55px 0px 0px 0px', position: 'absolute' }}
        />
        <div
          className="bann"
          width="500px"
          height="400px"
          style={{ border: '2px solid #C4C4C4', borderRadius: '20px' }}
        ></div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  .icons_banner {
    display: flex;
    // justify-content: space-around;
    align-items: center;
  }
  .box {
    margin: 0px 10px;
  }
`;
