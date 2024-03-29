
import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MdOutlineErrorOutline } from "react-icons/md";
import PasswordChecklist from "react-password-checklist"
import valid from '../../images/check (4).png';
import invalid from '../../images/close (3).png';
import Checkbox from '@mui/material/Checkbox';
import { Link, json, useNavigate } from 'react-router-dom';
import './style.css';
import { ReactComponent as GrandAutomation } from '../../images/ProductsLogo/DarkBg/Frame.svg';
import authService from '../../Services/authService';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import ButtonLoader from '../../Components/Common/ButtonLoader';
import { userIsLoginContext } from '../../Context/UserIsLoginProvider';
import GrandAutomationLogo from '../../images/ProductsLogo/DarkBg/Frame.svg'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'; // Import eye icons
import axios from 'axios';
//useNavigate 
function Register() {
    const { authData, setAuthData, setToken } = useContext(userIsLoginContext);

    useEffect(() => {
        document.title = "Grand Automation | Register";
    }, []);

    const navigate = useNavigate()

    useEffect(() => {
        if (authData) {
            navigate('/')
        }

    }, [authData])


    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const initialValuesInput = {
        FullName: '',
        email: '',
        password: '',
        ComfirmPassword: '',
    };

    const nav = useNavigate();

    const formik = useFormik({
        initialValues: initialValuesInput,
        validationSchema: Yup.object().shape({
            // valodation for max length of 32 for full name
            FullName: Yup.string().max(32, 'Full Name must be at most 32 characters').required('Please Enter Your Full Name'),

            email: Yup.string().email('Invalid email').required('Please Enter Your Email Address'),
            password: Yup.string().required('Please Enter Your Password'),
            ComfirmPassword: Yup.string().required('Please Repeat Your Password')
                .oneOf([Yup.ref('password')], 'Passwords must match'),
            CompanyName: checked ? Yup.string().required("Please Enter Company's Name") : Yup.string(),
            Address: checked ? Yup.string().required("Please Enter company's Address") : Yup.string(),
            TAX_ID: checked ? Yup.number().required('Please Enter TAX ID') : Yup.number(),
        }),
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                setLoading(true)
                const sendData = {
                    name: values.FullName,
                    email: values.email,
                    password: values.password,
                    confirm_password: values.ComfirmPassword,
                    is_company: checked,
                    company_name: values.CompanyName,
                    company_address: values.Address,
                    company_tax_number: values.TAX_ID

                }

                // Call the register method from the authService
                const response = await authService.register(sendData);

                if (response.success) {
                    toast.success('Registration Successful');
                    setLoading(false)
                    setToken(response.data);
                    // add token 
                    axios.defaults.headers.common["Authorization"] = response.data.token ? `Bearer ${response.data.token}` : null;

                    localStorage.setItem('auth', JSON.stringify(response.data));
                    nav('/otp-verification')


                }


                // Reset the form after successful submissions
                resetForm();
            } catch (error) {
                setLoading(false)
                console.error('Error:', error);
            } finally {
                // Set submitting state to false after submission
                setSubmitting(false);
            }
        },
    });
    if (checked) {
        formik.initialValues.CompanyName = '';
        formik.initialValues.Address = '';
        formik.initialValues.TAX_ID = '';
    }

    const checkALLRequiredHasFill = () => {
        if (formik.values.FullName !== '' && formik.values.email !== '' && formik.values.password !== '' && formik.values.ComfirmPassword !== '') {
            if (checked) {
                if (formik.values.CompanyName !== '' && formik.values.Address !== '' && formik.values.TAX_ID !== '') {
                    return false
                } else {
                    return true
                }
            } else {
                return false
            }
        } else {
            return true
        }
    }
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);



    return (

        <div className='animate__fadeIn animate__animated animate__faster flex justify-center items-center text-white bg-[#121212] py-14 px-5 px-md-0'>
            <div>
                <div className='flex sm:flex-row flex-col-reverse justify-between mb-10'>
                    <div className='md:me-64 sm:me-28 me-0'>
                        <h6 className='md:text-xl text-base font-semibold'>SIGNUP</h6>
                        <p className='font-light'>One account for all our products</p>
                    </div>
                    <div className='flex justify-center md:justify-start'>
                        <img src={GrandAutomationLogo} alt="" className='md:w-40 w-28 sm:mb-0 mb-10' />
                    </div>
                </div>

                {/* Register Form */}
                <form className='mt-6' onSubmit={formik.handleSubmit}>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-0 gap-y-5'>
                        {/* Full Name */}
                        <div className=''>
                            <div className='flex'>
                                <label htmlFor="FullName" className="block text-sm font-medium leading-6 me-1">
                                    Full Name
                                </label>
                                <span className='text-[#ff0000]'>*</span>
                            </div>
                            <div className="mt-2 relative">
                                <input
                                    type="text"
                                    name="FullName"
                                    id="FullName"
                                    className={formik.errors.FullName && formik.touched.FullName ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6" :

                                        "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6"
                                    }
                                    placeholder='Enter Your Name Here'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {/* // message for max length */}
                                {formik.errors.FullName && formik.touched.FullName && <MdOutlineErrorOutline className='text-[#ff0000] text-xl absolute right-2.5 top-2.5' />}
                            </div>

                            {formik.errors.FullName && formik.touched.FullName ?

                                <div className="mt-2 text-[#ff0000] text-sm">
                                    {formik.errors.FullName}
                                </div> : null}
                        </div>

                        {/*Email*/}
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
                                        className={formik.errors.email && formik.touched.email ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6" :

                                            "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6"
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
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-0 gap-y-5 gap-4 mt-4'>
                        <div className=''>
                            {/* Password */}
                            <div className=''>
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
                                        type={showPassword ? 'text' : 'password'} // Toggle between text and password type
                                        autoComplete="current-password"
                                        className={formik.errors.password && formik.touched.password ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6" :
                                            "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6"
                                        }
                                        placeholder='Enter Password Here'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.password && formik.touched.password && <MdOutlineErrorOutline className='text-[#ff0000] text-xl absolute right-2.5 top-2.5' />}
                                    {!showPassword ? (
                                        <MdOutlineVisibilityOff className='text-[#4c4c4c] text-xl absolute right-2.5 top-2.5 cursor-pointer' onClick={() => setShowPassword(true)} />
                                    ) : (
                                        <MdOutlineVisibility className='text-[#4c4c4c] text-xl absolute right-2.5 top-2.5 cursor-pointer' onClick={() => setShowPassword(false)} />
                                    )}
                                </div>


                                {formik.errors.password && formik.touched.password ?

                                    <div className="mt-2 text-[#f80000] text-sm">
                                        {formik.errors.password}
                                    </div> :

                                    null}
                            </div>

                            {/*Comfirm Password */}
                            <div className='mt-4'>
                                <div className='flex'>
                                    <label htmlFor="ComfirmPassword" className="block text-sm font-medium leading-6 me-1">
                                        Repeat password
                                    </label>
                                    <span className='text-[#ff0000]'>*</span>
                                </div>

                                <div className="my-2 relative">
                                    <input
                                        id="ComfirmPassword"
                                        name="ComfirmPassword"
                                        type={showConfirmPassword ? 'text' : 'password'} // Toggle between text and password type
                                        autoComplete="current-password"
                                        className={formik.errors.ComfirmPassword && formik.touched.ComfirmPassword ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6 " :

                                            "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6"
                                        }
                                        placeholder='Repeat Your Password Here'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.ComfirmPassword && formik.touched.ComfirmPassword && <MdOutlineErrorOutline className='text-[#ff0000] text-xl absolute right-2.5 top-2.5' />}
                                    {!showConfirmPassword ? (
                                        <MdOutlineVisibilityOff className='text-[#4c4c4c] text-xl absolute right-2.5 top-2.5 cursor-pointer' onClick={() => setShowConfirmPassword(true)} />
                                    ) : (
                                        <MdOutlineVisibility className='text-[#4c4c4c] text-xl absolute right-2.5 top-2.5 cursor-pointer' onClick={() => setShowConfirmPassword(false)} />
                                    )}
                                </div>

                                {formik.errors.ComfirmPassword && formik.touched.ComfirmPassword ?

                                    <div className="mt-2 text-[#f80000] text-sm">
                                        {formik.errors.ComfirmPassword}
                                    </div> :

                                    null}
                            </div>

                        </div>


                        <div className=' text-sm text-start md:items-center items-start md:pt-10 pt-0 flex flex-col justify-center mb-6'>
                            <PasswordChecklist
                                rules={["minLength", "specialChar", "number", "capital", "match"]}
                                minLength={5}
                                value={formik.values.password}
                                valueAgain={formik.values.ComfirmPassword}
                                onChange={(isValid) => { }}
                                className=''
                                iconComponents={{ ValidIcon: <img src={valid} width={10} className='me-3 mt-2' />, InvalidIcon: <img src={invalid} width={10} className='me-3 mt-2' /> }}
                            />
                        </div>

                    </div>


                    <hr className='border-[#252526] my-3' />

                    {/* checkbox */}
                    <div className='flex items-center'>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{
                                color: '#9fa6b2',
                                '&.Mui-checked': {
                                    color: 'white',
                                },
                            }}
                            className='ms-0'
                        />
                        <label htmlFor="comments" className="text-white ms-1 text-sm underline">
                            Registering as a company
                        </label>
                    </div>

                    {/* company Register */}

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-0 gap-y-3  mt-5'>
                        {/* Company Name */}
                        <div className=''>

                            <label htmlFor="CompanyName" className={checked ? "text-white block text-sm font-medium leading-6 me-1"
                                : "text-[#484848] block text-sm font-medium leading-6 me-1"
                            }>
                                Company Name
                            </label>

                            <div className="mt-2 relative">
                                <input
                                    type="text"
                                    name="CompanyName"
                                    id="CompanyName"
                                    className={formik.errors.CompanyName && formik.touched.CompanyName && checked ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6" :

                                        "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6"
                                    }
                                    placeholder='Company Name'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    disabled={checked ? false : true}
                                />
                                {formik.errors.CompanyName && formik.touched.CompanyName && checked && <MdOutlineErrorOutline className='text-[#ff0000] text-xl absolute right-2.5 top-2.5' />}
                            </div>

                            {formik.errors.CompanyName && formik.touched.CompanyName && checked ?

                                <div className="mt-2 text-[#ff0000] text-sm">
                                    {formik.errors.CompanyName}
                                </div> : null}
                        </div>

                        {/* Address */}
                        <div className=''>

                            {/* text-[#484848] */}

                            <label htmlFor="Address" className={checked ? "text-white block text-sm font-medium leading-6 me-1"
                                : "text-[#484848] block text-sm font-medium leading-6 me-1"
                            }>
                                Address
                            </label>

                            <div className="mt-2 relative">
                                <input
                                    type="text"
                                    name="Address"
                                    id="Address"
                                    className={formik.errors.Address && formik.touched.Address && checked ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6" :

                                        "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6"
                                    }
                                    placeholder='Address'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    disabled={checked ? false : true}
                                />
                                {formik.errors.Address && formik.touched.Address && checked && <MdOutlineErrorOutline className='text-[#ff0000] text-xl absolute right-2.5 top-2.5' />}
                            </div>

                            {formik.errors.Address && formik.touched.Address && checked ?

                                <div className="mt-2 text-[#ff0000] text-sm">
                                    {formik.errors.Address}
                                </div> : null}
                        </div>
                    </div>

                    {/*TAX ID*/}
                    <div className='mt-3'>

                        <label htmlFor="CompanyName" className={checked ? "text-white block text-sm font-medium leading-6 me-1"
                            : "text-[#484848] block text-sm font-medium leading-6 me-1"
                        }>
                            TAX ID
                        </label>

                        <div className="mt-2 relative">
                            <input
                                type="number"
                                name="TAX_ID"
                                id="TAX_ID"
                                className={formik.errors.TAX_ID && formik.touched.TAX_ID && checked ? "py-2 block w-full bg-[#121212] rounded-md border-0 text-[#ff0000] shadow-sm ring-1 ring-inset ring-[#ff0000] placeholder:text-[#ff0000] focus:ring-2 focus:ring-inset focus:ring-[#ff0000] text-sm sm:leading-6" :

                                    "py-2 block w-full bg-[#121212] rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-[#4c4c4c] placeholder:text-[#4c4c4c] focus:ring-2 focus:ring-inset focus:ring-slate-50 text-sm sm:leading-6"
                                }
                                placeholder='TAX ID'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                disabled={checked ? false : true}
                            />
                            {formik.errors.TAX_ID && formik.touched.TAX_ID && checked && <MdOutlineErrorOutline className='text-[#ff0000] text-xl absolute right-2.5 top-2.5' />}
                        </div>

                        {formik.errors.TAX_ID && formik.touched.TAX_ID && checked ?

                            <div className="mt-2 text-[#ff0000] text-sm">
                                {formik.errors.TAX_ID}
                            </div> : null}
                    </div>

                    <p className='text-[#4c4c4c] md:text-base text-sm font-semibold mt-4'>By registering you agree to the <span className='font-extralight underline text-white ms-1'>Term and Conditions</span></p>


                    <ButtonLoader data={checkALLRequiredHasFill} loading={loading} text='Sign Up' />
                </form>

            </div>
        </div>
    )
}


export default Register
