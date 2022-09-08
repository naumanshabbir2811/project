import React from 'react';

import { Navigate } from 'react-router-dom';

export default function SignInAdminRoute({ children }) {
  const isAuthenthenticated = true;
  if (!isAuthenthenticated) {
    return <Navigate to="/admin/signin" />;
  }
  return children;
}
