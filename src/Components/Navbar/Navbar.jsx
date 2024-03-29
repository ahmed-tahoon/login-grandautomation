

import React, { useState, useEffect, useContext } from 'react'
import { Navbar } from 'flowbite-react';
import logo from '../../images/Logos02.png'
import logoSidebar from '../../images/Logo01.png'
import { Link, useNavigate } from 'react-router-dom';
import ProfileIcon from '../../Icons/User Menu.svg'
import SidePanelIcon from '../../Icons/icon-park-outline_application-menu.svg'
import SupportIcon from '../../Icons/radix-icons_external-link.svg'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import 'animate.css';
import { userIsLoginContext } from '../../Context/UserIsLoginProvider';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

// Import products images
import TransferProduct from '../../images/ProductsLogo/whiteBG/TransferWhiteBg.svg';
import Calender from '../../images/ProductsLogo/whiteBG/calenderWhiteBg.svg';
import Form from '../../images/ProductsLogo/whiteBG/Property 1=G-Form.svg';
import WorkFlow from '../../images/ProductsLogo/whiteBG/Property 1=G-Workflow.svg';
import SupportTick from '../../images/ProductsLogo/whiteBG/Property 1=G-Support Tick.svg';
import HRM from '../../images/ProductsLogo/whiteBG/Property 1=G-HRM.svg';
import Signature from '../../images/ProductsLogo/whiteBG/Property 1=G-Signature.svg';
import Accounting from '../../images/ProductsLogo/whiteBG/Property 1=G-Accounting.svg';
import Projects from '../../images/ProductsLogo/whiteBG/Property 1=G-Projects.svg';
import Forms from '../../images/ProductsLogo/whiteBG/Property 1=G-Forms.svg';
import Inventory from '../../images/ProductsLogo/whiteBG/Property 1=G-Inventory.svg';
import VideoConference from '../../images/ProductsLogo/whiteBG/Property 1=G-Video Conference.svg';

// import icons
import settingsIcon from '../../Icons/settings icon.svg';
import logoutIcon from '../../Icons/logout icon.svg';

import { toast } from 'react-hot-toast';

function NavbarComponent() {

    // products logos
    const products = [
        TransferProduct,
        Calender,
        Form,
        WorkFlow,
        SupportTick,
        HRM,
        Signature,
        Accounting,
        Projects,
        Forms,
        Inventory,
        VideoConference
    ];

    const { authData, setAuthData } = useContext(userIsLoginContext);

    console.log(authData);

    // offcanvas
    const [open, setOpen] = useState(false);

    // dropDown Menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openDropdown = Boolean(anchorEl);
    const id = openDropdown ? 'simple-popover' : undefined;

    const navigate = useNavigate()
    const RemoveToken = () => {
        localStorage.removeItem('auth');
        setAuthData(null);
        toast.success("You 're now logged out. See you soon");
        navigate('/');
    }

    return (
        <div>
            <div className='bg-[#121212] border-b border-[#2a2a2a] px-0'>

                <Navbar className='bg-[#121212] py-5 px-0 m-0 w-11/12'>
                    <Link to='/' className=''>
                        <img src={logo} className=" h-7 sm:h-6" alt="Flowbite React Logo" />
                    </Link>
                    <Navbar.Toggle className='flex' />
                    <Navbar.Collapse className='m-0'>
                        <a href=' https://support.grandautomation.io/login' className='text-white font-normal flex items-center' target='_blank' >
                            SUPPORT
                            <img src={SupportIcon} alt="" className='ms-3 mt-0.5' />
                        </a>

                        {!authData ? <>
                            <Link to='/login' className='text-white font-normal flex items-center'>
                                LOGIN
                            </Link>
                            <Link to='/register' className='text-white font-normal flex items-center'>
                                SIGN UP
                            </Link>
                        </> :

                            <img src={authData?.profile_photo_url ? authData?.profile_photo_url : ProfileIcon}
                                alt=""
                                aria-haspopup="true"
                                onClick={handleClick}
                                className='cursor-pointer rounded-full object-cover w-7 h-7'
                            />
                        }

                        <div className='flex items-center cursor-pointer'>
                            <img src={SidePanelIcon} alt="" className='ms-3' id="fade-button" onClick={() => setOpen(true)} />
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>


            {/* dropDown Menu  */}
            <div>
                <Popover
                    id={id}
                    open={openDropdown}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    sx={{ marginTop: 1 }}
                >
                    <Typography>
                        <div className=' text-sm p-4'>
                            <Link to='/Account-Setting' className='flex pe-6 mb-5' onClick={handleClose}>
                                <img src={settingsIcon} alt="" className='me-3' />
                                <h6>
                                    Account Settings
                                </h6>
                            </Link>
                            <div className='flex cursor-pointer' onClick={() => { RemoveToken(); handleClose() }}>
                                <img src={logoutIcon} alt="" className='me-3' />
                                <h6>
                                    Logout
                                </h6>
                            </div>
                        </div>
                    </Typography>
                </Popover>
            </div>


            {/* offcanvas */}
            <Transition.Root show={open} as={Fragment} >
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <div className="fixed inset-0" />
                    <div className="fixed inset-0 overflow-hidden">
                        <div className={open ? "absolute inset-0 animate-opacityAnimation-start overflow-hidden" : "absolute inset-0 overflow-hidden"}>
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto offcanvansWidth">
                                        <div className="flex h-full flex-col overflow-auto bg-white py-7 shadow-xl rounded-l-3xl">
                                            <div className="relative flex-1 px-10 flex flex-col justify-between">

                                                <div>
                                                    <div className='flex justify-center'>
                                                        <img src={logoSidebar} alt="" width={90} />
                                                    </div>

                                                    <div className='grid grid-cols-2 my-7'>
                                                        {products.map((product, index) => {
                                                            return <img key={index} src={product}
                                                                className={(index === 0) ? 'cursor-pointer' : ''} />
                                                        })}
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className='mb-4 font-[350]'>We try to provide a unique experience to meet your business needs. So feel free to contact us to hear suggestions</p>
                                                    <button className='bg-black text-white font-semibold w-full text-center rounded-md py-2'>Contact Us</button>
                                                </div>

                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default NavbarComponent
