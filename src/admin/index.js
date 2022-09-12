import React from 'react';
import { Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import SideBar from './Components/SIdeBar';
export default function Admin() {
  return (
    <div style={{ margin: '40px 50px' }}>
      <div className="row ">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-6 d-flex">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
