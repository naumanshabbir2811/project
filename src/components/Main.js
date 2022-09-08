import React from 'react';
import Banner from './Banner';
import Featured from './Featured';
import Navbar from './Navbar';
import RoomDetails from './RoomDetails.js';

export default function Main() {
  return (
    <>
      <Navbar />
      <hr />
      <Banner />
      <Featured />
    </>
  );
}
