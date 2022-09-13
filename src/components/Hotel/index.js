import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import './hotel.css';
import inside1 from '../../assests/images/inside1.jpg';
import inside2 from '../../assests/images/inside2.jpg';
import inside3 from '../../assests/images/inside3.jpg';
import inside4 from '../../assests/images/inside4.jpg';
import inside5 from '../../assests/images/inside5.jpg';
import inside6 from '../../assests/images/inside6.jpg';
export default function Hotel() {
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">BookNow</button>
          <h1 className="hotelTitle">Fajar Street Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="hotelDistance">
              Awesome Location - 500 Meters from Airport
            </span>
          </div>
          <span className="hotelPriceHighlight">
            Book and Stay in just Rs-10000 and get a free Taxi to the Airport
          </span>
          <div className="hotelImages">
            <div className=" imagesRow">
              <div className="imageCol">
                <img
                  src={inside1}
                  alt=""
                  className="hotelImg"
                  width="300px"
                  height="300px"
                />
              </div>
              <div className="imageCol">
                <img
                  src={inside2}
                  alt=""
                  className="hotelImg"
                  width="300px"
                  height="300px"
                />
              </div>
              <div className="imageCol">
                <img
                  src={inside3}
                  alt=""
                  className="hotelImg"
                  width="300px"
                  height="300px"
                />
              </div>
            </div>
            <div className=" imagesRow">
              <div className="imageCol">
                <img
                  src={inside4}
                  alt=""
                  className="hotelImg"
                  width="300px"
                  height="300px"
                />
              </div>
              <div className="imageCol">
                <img
                  src={inside5}
                  alt=""
                  className="hotelImg"
                  width="300px"
                  height="300px"
                />
              </div>
              <div className="imageCol">
                <img
                  src={inside6}
                  alt=""
                  className="hotelImg"
                  width="300px"
                  height="300px"
                />
              </div>
            </div>
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                Stay with Us in the Heart of Lahore
              </h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt non fuga voluptates laborum fugit deleniti labore
                deserunt maiores asperiores ipsa ut debitis dicta, vero magni
                cum hic quo pariatur accusantium quas sunt ipsam eaque neque at
                tempora? Tempore et qui laborum reiciendis error fuga saepe eos
                molestias labore accusamus blanditiis unde quos nobis, illum
                assumenda architecto aperiam facilis animi explicabo nisi
                provident quaerat numquam illo. Autem obcaecati libero
                voluptatum ratione.
              </p>
            </div>
            <div className="hoteldetailsPrice">
              <h1>Perfect for Honey Moon </h1>
              <span>
                located at the Heart of Lahore -- this place has the history of
                Lahore in it
              </span>
              <h2>
                <b>Rs-70000</b>
                (7-Nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
