import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./Helper/Auth";

const PublicRoute = ({ path, element }) => {
  useEffect(() => {
    if (
      isAuthenticated() &&
      (path === "/login" || path === "/forget-password" || path === "/register")
    ) {
      window.location.href = "/"; // Redirect to home if already authenticated and trying to access login, forget password, or register pages
    }
  }, [path]);

  return (
    <Route
      path={path}
      element={!isAuthenticated() ? element : <Navigate to="/" />}
    />
  );
};

export default PublicRoute;
