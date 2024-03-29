import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";
import SignUp from "./Pages/Register/Register";
import OTP from "./Pages/OTP/OTP";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import NavbarComponent from "./Components/Navbar/Navbar";
import UserIsLoginProvider from "./Context/UserIsLoginProvider";
import "./App.css";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./Pages/ForgetPassword/ResetPassword";
import PrivateRoute from "./PrivateRoute";
import FooterComponent from "./Components/Footer/FooterComponent";

//c
function App() {
  const toastOptions = {
    duration: 4000, // 5 seconds in milliseconds
  };
  return (
    <>
      <Toaster toastOptions={toastOptions} />
      <UserIsLoginProvider>
        <div className="flex flex-col h-screen bg-[#121212]">
          <NavbarComponent />
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="register" element={<SignUp />} />
            <Route
              path="otp-verification"
              element={
                <PrivateRoute>
                  <OTP />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="auth-pass-change/:token"
              element={<ResetPassword />}
            />
          </Routes>
          <FooterComponent />
        </div>
      </UserIsLoginProvider>
    </>
  );
}

export default App;
