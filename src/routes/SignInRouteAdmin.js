import React from 'react';

import { Navigate } from 'react-router-dom';
import { useUserAuthContext } from '../context/AdminAuthContext';

export default function SignInAdminRoute({ children }) {
  const [isAuthenticated] = useUserAuthContext();
  const token = localStorage.getItem('auth_token');
  if (!isAuthenticated && !token) {
    return <Navigate to="/admin/signin" />;
  }
  return children;
}
