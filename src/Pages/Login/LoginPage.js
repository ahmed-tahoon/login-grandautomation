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
      <form onSubmit={formik.handleSubmit}>
        <div className="flex sm:flex-row flex-col-reverse justify-between items-center">
          <div className="md:me-44 me-28">
            <div className="md:text-xl text-base font-semibold mb-1">LOGIN</div>
            <p className="text-sm font-extralight">
              One account for all our products
            </p>
          </div>
          <img
            src={"https://grandpdf.b-cdn.net/GA-Logo-colored.svg"}
            alt=""
            className="md:w-40 w-28 sm:mb-0 mb-10"
          />
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
              <span className="text-[#ff0000]">*</span>
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
              {formik.errors.email && formik.touched.email && (
                <MdOutlineErrorOutline className="text-[#ff0000] text-xl absolute right-2.5 top-2.5" />
              )}
            </div>

            {formik.errors.email && formik.touched.email ? (
              <div className="mt-2 text-[#ff0000] text-sm">
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
            <span className="text-[#ff0000]">*</span>
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
            {formik.errors.password && formik.touched.password && (
              <MdOutlineErrorOutline className="text-[#ff0000] text-xl absolute right-2.5 top-2.5 " />
            )}
          </div>

          {formik.errors.password && formik.touched.password ? (
            <div className="mt-2 text-[#f80000] text-sm">
              {formik.errors.password}
            </div>
          ) : null}

          <button
            disabled={loading}
            type="submit"
            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="w-4 h-4 border-2 border-t-2 border-gray-200 rounded-full animate-spin"></div>{" "}
                loading...
              </div>
            ) : (
              "Login"
            )}
          </button>

          <div className="text-sm mt-3">
            <Link to="/forget-password" className="font-semibold underline">
              Forgot password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
