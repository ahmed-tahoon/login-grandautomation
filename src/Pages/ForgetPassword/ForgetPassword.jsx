


import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { MdOutlineErrorOutline } from "react-icons/md";
import { ReactComponent as GrandAutomation } from '../../images/ProductsLogo/DarkBg/Frame.svg';
import userService from '../../Services/userService';
import { toast } from 'react-hot-toast';
import ButtonLoader from '../../Components/Common/ButtonLoader';
import { Link, json, useNavigate } from 'react-router-dom';
import { userIsLoginContext } from '../../Context/UserIsLoginProvider';

function ForgetPassword() {
    const { authData, setAuthData, setToken } = useContext(userIsLoginContext);

    useEffect(() => {
        document.title = "Grand Automation | Forget Password";
    }, []);
    const nav = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (authData) {
            nav('/')
        }

    }, [authData])


    const formik = useFormik({

        initialValues: {
            email: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('this is an inavlid email').required('Please Enter Your Email')
        }),
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            setLoading(true)
            try {
                const sendData = {
                    email: values.email.toString()
                };

                const res = await userService.resetPassword(sendData).then((res) => {
                    return res
                }).catch((error) => {
                    setLoading(false)
                    toast.success("Password reset link has been sent successfully")
                    console.log(error)
                    nav('/login')

                })


                if (res.success) {
                    toast.success("Password reset link has been sent successfully")
                    setLoading(false)
                    nav('/login')
                    resetForm()
                } else {
                    setLoading(false)
                }



                console.log(res)

            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <div className='animate__fadeIn animate__animated animate__faster text-white basis-11/12 flex flex-col justify-center items-center md:px-0 px-5 bg-[#121212]'>
            <form onSubmit={formik.handleSubmit}>

                <div className='flex justify-between items-center'>
                    <div className='me-44'>
                        <div className='text-xl font-semibold mb-1'>
                            Reset Your Password <br />

                        </div>
                        <div className='text-[15px]'>
                            <span className='me-2 font-[100]'>Or</span><Link to='/login' className='cursor-pointer'>login</Link>
                        </div>
                    </div>
                    <GrandAutomation />
                </div>


                <p className='my-7 font-[400]'>If your email address matches an account in our records, we will send a password reset link to your inbox</p>
                <div className=''>
                    <div className='w-full'>
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

                                    "block w-full bg-[#121212] rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-[#272728] placeholder:text-[#272728] focus:ring-2 focus:ring-inset focus:ring-slate-50 sm:text-sm sm:leading-6"
                                }
                                placeholder="Enter Your Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.email && formik.touched.email && <MdOutlineErrorOutline className='text-[#ff0000] text-xl absolute right-2.5 top-2.5 ' />}
                        </div>

                        {formik.errors.email && formik.touched.email ?

                            <div className="mt-2 text-[#ff0000] text-sm">
                                {formik.errors.email}
                            </div> : null}
                    </div>
                </div>

                <ButtonLoader loading={loading} text="Continue" />
            </form>

        </div>
    )
}

export default ForgetPassword
