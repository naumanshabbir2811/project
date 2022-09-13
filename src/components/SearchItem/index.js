import React from 'react';
import './searchItem.css';
import hotelImage from '../../assests/images/hoteldetail3.png';
export default function SearchItem() {
  return (
    <>
      <div className="searchItem">
        <img src={hotelImage} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">Fajar Street Hotels</h1>
          <span className="siDistance">500m from Airport</span>
          <span className="siTaxiOp">Free Airport Taxi</span>
          <span className="siSubtitle">Full Air Conditioner Room</span>
          <span className="siFeatures">
            Entire Hall * 1 Bathroom * Full Double Bed
          </span>
          <span className="siCancelOp">Free Cancellation</span>
          <span className="siCancelOpSubtitle">
            You can Cancel any time so grap this Opportunity Now
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailsTexts">
            <span className="siPrice">Rs-10000</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See Availablity</button>
          </div>
        </div>
      </div>
    </>
  );
}
