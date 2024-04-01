import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdOutlineErrorOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ga } from "../../config";
function LoginPage({ submit, app, loading, setLoading }) {
  useEffect(() => {
    document.title = "Grand Automation | Login";
  }, []);

  const [error, setError] = useState(false);

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
        app: app,
      };

      setLoading(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      // submit the data
      fetch("https://api-staging.grandautomation.io/api/login", requestOptions)
        .then((response) => response.json())
        .then((data) => {

          console.log(data, "data");
          if (data.data.status === "success") {
            const token = data.data.token;
            const iframeUrl = `${ga.GA_URL}/sso?token=${encodeURIComponent(
              token
            )}`;
            const targetIframe = document.getElementById("targetIframe");
            targetIframe.src = iframeUrl;
            submit(data.data);
          } else {
            setError(data.error.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setLoading(false);
          submit(data);
        });

   
    },
  });

  return (
    <div className="">
      <iframe id="targetIframe" style={{ display: "none" }}></iframe>

      {error && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span class="font-medium">{error}</span>
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={"https://grandpdf.b-cdn.net/GA-Logo-colored.svg"}
            alt=""
            style={{ width: "13rem", marginBottom: "1rem" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "1rem", fontWeight: "200" }}>
            One account for all our products
          </p>
        </div>

        <div className="">
          <div className="w-full mt-10">
            <div className="flex">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 me-1"
              >
                Email Address
              </label>
              <span className="text-danger">*</span>
            </div>
            <div className="mt-2 relative">
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.errors.email && formik.touched.email ? (
              <div
                style={{
                  marginTop: "0.2rem",
                  color: "#f80000",
                  fontSize: "0.875rem",
                }}
              >
                {formik.errors.email}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 me-1"
            >
              Password
            </label>
            <span className="text-danger">*</span>
          </div>

          <div className="my-2 relative">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Password Here"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
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
          <div className="flex items-center mt-4">
            <button
              disabled={loading}
              type="submit"
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "#4c4c4c",
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
                  Loading...
                </div>
              ) : (
                "Login"
              )}
            </button>
          </div>

          <div className="text-sm mt-3">
            {/* <Link to="/forget-password" className="font-semibold underline">
              Forgot password?
            </Link> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
