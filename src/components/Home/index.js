import React from 'react';
import Banner from '../Banner';
import Featured from '../Featured';
import Header from '../Header';
import Navbar from '../Navbar';
import Property from '../Property';
import './home.css';
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Banner />
      <div className="homeContainer">
        <Featured />

        <Property />
      </div>
    </>
  );
}
