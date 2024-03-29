



import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { MdOutlineErrorOutline } from "react-icons/md";
import GrandAutomationLogo from '../../images/ProductsLogo/DarkBg/Frame.svg'
import { Link, useNavigate } from 'react-router-dom';
import { userIsLoginContext } from '../../Context/UserIsLoginProvider';
import authService from '../../Services/authService';
import ButtonLoader from '../../Components/Common/ButtonLoader';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import userService from '../../Services/userService';

function LoginPage() {

    useEffect(() => {
        document.title = "Grand Automation | Login";
    }, []);

    const { authData, setAuthData, setToken } = useContext(userIsLoginContext);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

   


    const formik = useFormik({

        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('this is an inavlid email').required('Please Enter Your Email'),
            password: Yup.string().required('Please Enter Your password')
        })
        ,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                setLoading(true)
                // convert email and password to string
                const sendData = {
                    email: values.email.toString(), // Use toString() instead of ToString()
                    password: values.password
                };

                // Call the register method from the authService
                const response = await authService.login(sendData)


                if (response.success) {
                    localStorage.setItem('auth', JSON.stringify(response.data))
                    toast.success("Welcome back! We've missed you.")
                    setToken(response.data.token)
                    // get user data

                    await userService.getUserData(response.data.token).then((res) => {
                        if (res.success) {
                            setAuthData(res.data)
                        }
                    }
                    )
                    setLoading(false)
                    navigate('/')
                    resetForm();

                } else {
                    toast.error("Either your email or password may be incorrect. Please verify your details and attempt to log in again.")
                    setLoading(false)
                }


                // Reset the form after successful submission
            } catch (error) {
                setLoading(false)
                console.error('Error:', error);
            } finally {
                // Set submitting state to false after submission
                setSubmitting(false);
            }
        },
    })



    useEffect(() => {
        if (authData) {
            navigate('/')
        }
    }, [authData])

    return (
        <div className='animate__fadeIn animate__animated animate__faster text-white h-full flex flex-col justify-center items-center md:px-0 px-5 bg-[#121212]'>

            <form onSubmit={formik.handleSubmit}>

                <div className='flex sm:flex-row flex-col-reverse justify-between items-center'>
                    <div className='md:me-44 me-28'>
                        <div className='md:text-xl text-base font-semibold mb-1'>
                            LOGIN
                        </div>
                        <p className='text-sm font-extralight'>One account for all our products</p>
                    </div>
                    <img src={GrandAutomationLogo} alt="" className='md:w-40 w-28 sm:mb-0 mb-10' />
                </div>

                <div className=''>
                    <div className='w-full mt-10'>
                        <div className='flex'>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 me-1">
                                Email Address
                            </label>
                            <span className='text-[#ff0000]'>*</span>
                        </div>
                        <div className="mt-2 relative">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className={formik.errors.email && formik.touched.email ? "block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] sm:text-sm sm:leading-6 py-2" :

                                    "block w-full bg-[#121212] rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 sm:text-sm sm:leading-6"
                                }
                                placeholder="Enter Your Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.email && formik.touched.email && <MdOutlineErrorOutline className='text-[#ff0000] text-xl absolute right-2.5 top-2.5' />}
                        </div>

                        {formik.errors.email && formik.touched.email ?

                            <div className="mt-2 text-[#ff0000] text-sm">
                                {formik.errors.email}
                            </div> : null}
                    </div>
                </div>

                <div className='mt-4'>
                    <div className='flex'>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 me-1">
                            Password
                        </label>
                        <span className='text-[#ff0000]'>*</span>
                    </div>

                    <div className="my-2 relative">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className={formik.errors.password && formik.touched.password ? "block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] sm:text-sm sm:leading-6 py-2" :

                                "block w-full bg-[#121212] rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 sm:text-sm sm:leading-6"
                            }
                            placeholder='Enter Password Here'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.password && formik.touched.password && <MdOutlineErrorOutline className='text-[#ff0000] text-xl absolute right-2.5 top-2.5 ' />}
                    </div>

                    {formik.errors.password && formik.touched.password ?

                        <div className="mt-2 text-[#f80000] text-sm">
                            {formik.errors.password}
                        </div> :

                        null}

                    <div className="text-sm mt-3">
                        <Link to='/forget-password' className="font-semibold underline">
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <ButtonLoader loading={loading} text='Login' />


            </form>
        </div>
    )
}

export default LoginPage
