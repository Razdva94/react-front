import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ component, loggedIn }) => {
  console.log(loggedIn)
  return loggedIn ? (
    component
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRouteElement;
