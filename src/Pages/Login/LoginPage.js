import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdOutlineErrorOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function LoginPage({ submit, loading, setLoading }) {
  useEffect(() => {
    document.title = "Grand Automation | Login";
  }, []);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("this is an inavlid email")
        .required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your password"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      // send request to the server
      // if successfull
      // store the token in local storage
      // redirect to the dashboard
      // if failed
      // show error message
      const data = {
        email: values.email,
        password: values.password,
      };

      submit(data);
    },
  });

  return (
    <div className="">
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "4.4rem", marginBottom: "2.8rem" }}>
          <div
            style={{
              fontSize: "1.6rem",
              fontWeight: "600",
              marginBottom: "0.1rem",
            }}
          >
            LOGIN
          </div>
          <p style={{ fontSize: "1rem", fontWeight: "200" }}>
            One account for all our products
          </p>
        </div>
        <img
          src={"https://grandpdf.b-cdn.net/GA-Logo-colored.svg"}
          alt=""
          className="login__logo"
          style={{ width: "10rem", marginBottom: "1rem" }}
        />

        <div style={{ width: "100%", marginTop: "1.0rem" }}>
          <div style={{ display: "flex" }}>
            <label
              htmlFor="email"
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                marginRight: "0.1rem",
              }}
            >
              Email Address
            </label>
            <span style={{ color: "#ff0000" }}>*</span>
          </div>
          <div style={{ marginTop: "0.2rem", position: "relative" }}>
            <input
              type="text"
              name="email"
              id="email"
              style={{
                backgroundColor: "#f9fafb",
                borderColor: "#d1d5db",
                color: "#111827",
                fontSize: "0.875rem",
                borderRadius: "0.5rem",
                outline: "none",
                padding: "0.625rem",
              }}
              placeholder="Enter Your Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <MdOutlineErrorOutline
                style={{
                  color: "#ff0000",
                  fontSize: "1.6rem",
                  position: "absolute",
                  right: "0.625rem",
                  top: "0.625rem",
                }}
              />
            )}
          </div>

          {formik.errors.email && formik.touched.email ? (
            <div
              style={{
                marginTop: "0.2rem",
                color: "#ff0000",
                fontSize: "0.875rem",
              }}
            >
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div style={{ marginTop: "0.4rem" }}>
          <div style={{ display: "flex" }}>
            <label
              htmlFor="password"
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                marginRight: "0.1rem",
              }}
            >
              Password
            </label>
            <span style={{ color: "#ff0000" }}>*</span>
          </div>

          <div style={{ marginTop: "0.2rem", position: "relative" }}>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              style={{
                backgroundColor: "#f9fafb",
                borderColor: "#d1d5db",
                color: "#111827",
                fontSize: "0.875rem",
                borderRadius: "0.5rem",
                outline: "none",
                padding: "0.625rem",
              }}
              placeholder="Enter Password Here"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <MdOutlineErrorOutline
                style={{
                  color: "#ff0000",
                  fontSize: "1.6rem",
                  position: "absolute",
                  right: "0.625rem",
                  top: "0.625rem",
                }}
              />
            )}
          </div>

          {formik.errors.password && formik.touched.password ? (
            <div
              style={{
                marginTop: "0.2rem",
                color: "#f80000",
                fontSize: "0.875rem",
              }}
            >
              {formik.errors.password}
            </div>
          ) : null}

          <button
            disabled={loading}
            type="submit"
            className="login__button"
            style={{
              width: "100%",
              color: "#ffffff",
              backgroundColor: "#3b82f6",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              padding: "0.625rem",
              textAlign: "center",
              outline: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "0.625rem",
                    height: "0.625rem",
                    borderWidth: "0.125rem",
                    borderTopWidth: "0.125rem",
                    borderColor: "#e5e7eb",
                    borderRadius: "9999px",
                    animation: "spin 1s linear infinite",
                  }}
                ></div>{" "}
                loading...
              </div>
            ) : (
              "Login"
            )}
          </button>

          <div style={{ fontSize: "0.875rem", marginTop: "0.3rem" }}>
            <Link
              to="/forget-password"
              style={{ fontWeight: "600", textDecoration: "underline" }}
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
