import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./Helper/Auth";
import userService from "./Services/userService";
// useNavigate
import { useNavigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const navigate = useNavigate(); // Import useNavigate hook

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login"); // Navigate to login page if not authenticated
    }

    if (isAuthenticated()) {
      // get user data
      userService
        .getUserData()
        .then((res) => {
          if (res.success && res.data.email_verified_at === null) {
            navigate("/otp-verification"); // Navigate to OTP verification if email not verified
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [navigate]); // Include navigate in dependency array

  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
