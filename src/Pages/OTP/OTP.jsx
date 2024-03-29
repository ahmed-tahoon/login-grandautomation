import React, { useContext, useEffect, useState, useRef } from 'react';
import { ReactComponent as GrandAutomation } from '../../images/ProductsLogo/DarkBg/Frame.svg';
import { Link, useNavigate } from 'react-router-dom';
import { userIsLoginContext } from '../../Context/UserIsLoginProvider';
import Loader from '../../Components/Common/Loader';
import toast from 'react-hot-toast';
import userService from '../../Services/userService';
import ButtonLoader from '../../Components/Common/ButtonLoader';

function OTP() {
    const { authData, setAuthData, setToken } = useContext(userIsLoginContext);
    const nav = useNavigate();
    const [allDigitsFilled, setAllDigitsFilled] = useState(false); // State to track if all digits are filled

    useEffect(() => {
        document.title = 'Grand Automation | OTP';

        // Add paste event listener to the document body
        document.body.addEventListener('paste', handlePaste);

        return () => {
            document.body.removeEventListener('paste', handlePaste);
        };
    }, []);

    const [loading, setLoading] = useState(true);
    const [timer, setTimer] = useState(59);
    const [resending, setResending] = useState(false);

    const digit1Ref = useRef(null);
    const digit2Ref = useRef(null);
    const digit3Ref = useRef(null);
    const digit4Ref = useRef(null);

    useEffect(() => {
        if (!authData?.email_verified_at) {
            setLoading(false);
        } else {
            nav('/');
        }
    }, [authData, nav]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer((prevTimer) => prevTimer - 1);
            } else {
                setResending(false);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const getFirstName = (name) => {
        if (!name) return 'loading...';
        return name.split(' ')[0];
    };

    const [resendLoading, setResendLoading] = useState(false);

    const resendOtp = async () => {
        setResendLoading(true)
        const response = await userService.resendOtp()

        if (response.success) {
            toast.success(response.message)
            setResendLoading(false)
            setResending(true);
            setTimer(59);

        } else {
            toast.error(response.error.message)
            setResendLoading(false)

        }



        // Additional logic to resend OTP
    };

    const handleInputChange = (e, ref) => {
        const input = e.target;
        const maxLength = parseInt(input.getAttribute('maxlength'), 10);

        if (input.value.length >= maxLength && ref) {
            ref.current.focus();
        }

        // check if is digit 4 and all digits are filled call submit 
        if (input.name === 'digit4' && input.value.length === 1) {
            handleSubmit();
        }



    };

    const handlePaste = (e) => {
        const pastedText = e.clipboardData.getData('text/plain');
        const otpRegex = /\b\d{4}\b/; // Regular expression to match 4-digit OTP

        if (otpRegex.test(pastedText)) {
            const otpDigits = pastedText.match(otpRegex)[0].split('');

            if (otpDigits.length === 4) {
                // Fill input fields with OTP digits
                digit1Ref.current.value = otpDigits[0];
                digit2Ref.current.value = otpDigits[1];
                digit3Ref.current.value = otpDigits[2];
                digit4Ref.current.value = otpDigits[3];

                // Automatically submit the form
                handleSubmit();
            }
        }
    };

    const [loadingSend, setLoadingSend] = useState(false)

    const handleSubmit = async () => {
        try {



            const digit1 = digit1Ref.current.value;
            const digit2 = digit2Ref.current.value;
            const digit3 = digit3Ref.current.value;
            const digit4 = digit4Ref.current.value;
            setLoadingSend(true)
            if (!digit1 || !digit2 || !digit3 || !digit4) {
                toast.error('Please enter OTP');
                setLoadingSend(false)
                return;
            }

            let otp = digit1 + digit2 + digit3 + digit4;

            // convert to number 


            const response = await userService.verifyEmail(otp)

            if (response.success) {
                toast.success(response.message)
                setAuthData((prevData) => ({ ...prevData, email_verified_at: new Date().toISOString() }));
                nav('/');
                setLoadingSend(false)

            } else {
                toast.error(response.error.message)
                setLoadingSend(false)

            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            setLoadingSend(false)
        }

        // Additional logic to handle OTP submission
    };



    return (
        <div className="flex justify-center items-center text-white basis-11/12 py-10 px-5 px-md-0 bg-[#121212]">
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <div className="flex justify-between">
                        <h6 className="text-3xl">Welcome! {getFirstName(authData?.name)}</h6>
                        <GrandAutomation />
                    </div>
                    <div className="mt-10 font-thin text-[#b8b8b8]">
                        <p className="mb-4">
                            Thank you for registering with our service! We are excited to have you as a <br /> part of our
                            community.
                        </p>
                        <p className="mb-4">
                            To complete your registration, please enter the One-Time Password (OTP) <br /> that was sent to your email
                            address :{'  '}
                            <span className="text-white font-semibold">{authData?.email}</span> <br />
                            This is an important step in verifying your account and ensuring its security.
                        </p>
                        <p>
                            If you did not receive the OTP within an hour, please click on resend OTP to <br /> request a new one.
                        </p>
                        <p className='mt-4'>Thank you for choosing our service. We look forward to serving you!</p>
                    </div>

                    <div className="grid grid-cols-4 my-6 gap-4">
                        <input
                            type="text"
                            name="digit1"
                            id="digit1"
                            maxLength="1"
                            ref={digit1Ref}
                            onInput={(e) => handleInputChange(e, digit2Ref)}
                            className="block rounded-md border-0 bg-transparent shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-28 py-3 ring-[#E5E7EB1A] text-center"
                        />
                        <input
                            type="text"
                            name="digit2"
                            id="digit2"
                            maxLength="1"
                            ref={digit2Ref}
                            onInput={(e) => handleInputChange(e, digit3Ref)}
                            className="block rounded-md border-0 bg-transparent shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-28 text-center py-3 ring-[#E5E7EB1A]"
                        />
                        <input
                            type="text"
                            name="digit3"
                            id="digit3"
                            maxLength="1"
                            ref={digit3Ref}
                            onInput={(e) => handleInputChange(e, digit4Ref)}
                            className="block rounded-md border-0 bg-transparent shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-28 text-center py-3 ring-[#E5E7EB1A]"
                        />
                        <input
                            type="text"
                            name="digit4"
                            id="digit4"
                            maxLength="1"
                            ref={digit4Ref}
                            onInput={(e) => handleInputChange(e, null)} // No need to move to next input after the fourth digit
                            className="block rounded-md border-0 bg-transparent shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-28 text-center py-3 ring-[#E5E7EB1A]"
                        />

                    </div>

                    <ButtonLoader data={true} functionToCall={handleSubmit} loading={loadingSend} text="Sign Up" />


                    <div className="mt-5 flex justify-between">
                        <p className="text-[#4C4C4C]">
                            Didn't receive a code{' '}
                            <button
                                to=""
                                className={`font-medium ${resending || resendLoading ? 'text-gray-500' : 'text-white'} underline ms-2 ${resending || resendLoading ? '' : 'cursor-pointer'}`}
                                onClick={resendOtp}
                                disabled={resending || resendLoading}
                            >
                                {resending ? `Resending OTP in ${timer} seconds` : resendLoading ? 'Resending...' : 'Resend OTP'}
                            </button>
                        </p>
                    </div>
                </div>
            )
            }
        </div >
    );
}

export default OTP;
