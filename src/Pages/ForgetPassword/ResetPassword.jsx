



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
import PasswordChecklist from "react-password-checklist"
import valid from '../../images/check (4).png';
import invalid from '../../images/close (3).png';
// useParams 
import { useParams } from 'react-router-dom';
import userService from '../../Services/userService';
function ResetPassword() {

    useEffect(() => {
        document.title = "Grand Automation | Update password";
    }, []);

    const { token } = useParams()


    const nav = useNavigate()


    useEffect(() => {
        if (!token) {
            nav('/login')
        }
    })

    const { authData, setAuthData, setToken } = useContext(userIsLoginContext);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const formik = useFormik({

        initialValues: {
            password: '',
            confirm_password: ''
        },
        validationSchema: Yup.object().shape({
            password: Yup.string().required('Please Enter Your password'),
            confirm_password: Yup.string().required('Please Enter Your Confirm password')

        })
        ,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                setLoading(true)
                // convert email and password to string
                const sendData = {
                    password: values.password,
                    token: token
                };

                // Call the register method from the authService
                const response = await userService.updatePassword(sendData)


                if (response.success) {
                    localStorage.setItem('auth', JSON.stringify(response.data))
                    toast.success("Password Updated Successfully")
                    setLoading(false)
                    navigate('/login')
                    resetForm();

                } else {
                    toast.error(response.error.message)
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





    return (
        <div className='animate__fadeIn animate__animated animate__faster text-white h-full flex flex-col justify-center items-center md:px-0 px-5 bg-[#121212]'>

            <form onSubmit={formik.handleSubmit}>

                <div className='flex sm:flex-row flex-col-reverse justify-between items-center'>
                    <div className='md:me-44 me-28'>
                        <div className='md:text-xl text-base font-semibold mb-1'>
                            Update Password
                        </div>
                    </div>
                    <img src={GrandAutomationLogo} alt="" className='md:w-40 w-28 sm:mb-0 mb-10' />
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



                </div>
                <div className='mt-4'>
                    <div className='flex'>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 me-1">
                            Confirm Password
                        </label>
                        <span className='text-[#ff0000]'>*</span>
                    </div>

                    <div className="my-2 relative">
                        <input
                            id="confirm_password"
                            name="confirm_password"
                            type="password"
                            autoComplete="confirm_password"
                            className={formik.errors.password && formik.touched.password ? "block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] sm:text-sm sm:leading-6 py-2" :

                                "block w-full bg-[#121212] rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 sm:text-sm sm:leading-6"
                            }
                            placeholder='Enter Confirm Password Here'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.confirm_password && formik.touched.confirm_password && <MdOutlineErrorOutline className='text-[#ff0000] text-xl absolute right-2.5 top-2.5 ' />}
                    </div>

                    {formik.errors.confirm_password && formik.touched.confirm_password ?

                        <div className="mt-2 text-[#f80000] text-sm">
                            {formik.errors.confirm_password}
                        </div> :

                        null}


                </div>


                <div className='my-4 relative'>
                    <PasswordChecklist
                        rules={["minLength", "specialChar", "number", "capital", "match"]}
                        minLength={5}
                        value={formik.values.password}
                        valueAgain={formik.values.confirm_password}
                        onChange={(isValid) => { }}
                        className=''
                        iconComponents={{ ValidIcon: <img src={valid} width={10} className='me-3 mt-2' />, InvalidIcon: <img src={invalid} width={10} className='me-3 mt-2' /> }}
                    />
                </div>
                <ButtonLoader loading={loading} text='Update' />


            </form>
        </div>
    )
}

export default ResetPassword
