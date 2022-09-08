import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import SideBar from './Components/SIdeBar';
export default function Admin() {
  return (
    <div style={{ margin: '40px 50px' }}>
      <div className="row ">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
