import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './reserve.css';
export default function Reserve() {
  return (
    <>
      <div className="reserve">
        <div className="rContainer">
          <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick="" />
          <span>Select your Room</span>
        </div>
      </div>
    </>
  );
}
