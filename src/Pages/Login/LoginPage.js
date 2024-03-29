import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdOutlineErrorOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../index.css";
function LoginPage({ submit }) {
  useEffect(() => {
    document.title = "Grand Automation | Login";
  }, []);

  const [loading, setLoading] = useState(false);
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
      submit(data);
      const data = {
        email: values.email,
        password: values.password,
      };

      try {
        axios.post("http://localhost:5000/api/login", data).then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard");
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="animate__fadeIn animate__animated animate__faster text-white h-full flex flex-col justify-center items-center md:px-0 px-5 bg-[#121212]">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex sm:flex-row flex-col-reverse justify-between items-center">
          <div className="md:me-44 me-28">
            <div className="md:text-xl text-base font-semibold mb-1">LOGIN</div>
            <p className="text-sm font-extralight">
              One account for all our products
            </p>
          </div>
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
                className={
                  formik.errors.email && formik.touched.email
                    ? "block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] sm:text-sm sm:leading-6 py-2"
                    : "block w-full bg-[#121212] rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 sm:text-sm sm:leading-6"
                }
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
              className={
                formik.errors.password && formik.touched.password
                  ? "block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] sm:text-sm sm:leading-6 py-2"
                  : "block w-full bg-[#121212] rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 sm:text-sm sm:leading-6"
              }
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
            type="submit"
            className="w-full bg-[#ff0000] text-white py-2 rounded-md mt-4"
          >
            Login
          </button>

          <div className="text-sm mt-3">
            <Link to="/forget-password" className="font-semibold underline">
              Forgot password?
            </Link>
          </div>
        </div>
      </form>

      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
