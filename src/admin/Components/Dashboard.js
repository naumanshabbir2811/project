import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuthContext } from '../../context/AdminAuthContext';
import { Navigate } from 'react-router-dom';
export default function Dashboard() {
  const [isAuthenticated, { handleChangeAuthContext }] = useUserAuthContext();
  const handleAuthLogout = () => {
    localStorage.removeItem('auth_token');
    handleChangeAuthContext(false);
    return <Navigate to="/admin/signin" />;
  };
  return (
    <>
      <div className="header_dashboard">
        <h1>I am dashboard</h1>
        <Button onClick={handleAuthLogout}>Logout</Button>
      </div>
    </>
  );
}
