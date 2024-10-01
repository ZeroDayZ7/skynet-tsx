import React from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from './AuthContext';

const Protected = ({ children }) => {
  const { isAuthenticated } = useAuth();
  // console.log(`Protected: ${isAuthenticated}`);
  // console.log(`isLoggedIn: ${isLoggedIn}`);
  // const { isAuthenticated } = false;

  // return isAuthenticated ? children : <Login />;
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default Protected;
