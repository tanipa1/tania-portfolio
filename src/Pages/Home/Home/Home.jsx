import React from 'react';
import me from '../../../assets/me.jpg';
import logo from '../../../assets/logo.png';
import Banner from '../../Banner/Banner';
import cv from '../../../assets/CV.pdf';
import { Link, /* animateScroll as scroll, Element */ } from 'react-scroll';
import About from '../../About/About';

const Home = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mb-72">
                {/* Responsive SideBar */}
                <div className='mx-3 py-2 lg:hidden items-center flex gap-32 justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className=' rounded-full h-[50px] w-[50px]' src={me} alt="" />
                        <p className='font-serif font-bold text-lg'>Tania <span className='text-[#A5A6FF]'>A.</span></p>
                    </div>
                    <label htmlFor="my-drawer-2" tabIndex={0} role="button" className="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg></label>
                </div>
                {/* Page content here */}
                <Banner></Banner>
                <About></About>

                {/* Large screen sidebar */}
            </div>
            <div className="border-r-2 drawer-side grid justify-center">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className=" menu p-4 w-80 min-h-full  bg-white text-base-content">
                    {/* Sidebar content here */}
                    <div className="grid justify-center avatar w-full">
                        <div className="w-36 h-36 rounded-full ring  ring-offset-[#A5A6FF] ring-offset-1">
                            <img src={me} />
                        </div>
                    </div>
                    {/* logo */}
                    <div className='grid justify-center mb-2 lg:mb-6'>
                        <img className='mt-0' src={logo} alt="" />
                        <div className='grid justify-center'>
                        <a href={cv} download className='btn btn-outline flex gap-2 font-bold text-sm '>Download CV
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z" /></svg>
                        </a>
                        </div>
                    </div>

                    {/* page link */}
                    <div className='grid gap-2 font-serif justify-center'>
                        <Link className='hover:text-[#A5A6FF]'
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <button>Home</button>
                        </Link>
                        <Link className='hover:text-[#A5A6FF]'
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <button>About</button>
                        </Link>
                        
                        <Link className='hover:text-[#A5A6FF]'
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <button>Services</button>
                        </Link>

                        <Link className='hover:text-[#A5A6FF]'
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <button>Portfolio</button>
                        </Link>
                        
                        <Link className='hover:text-[#A5A6FF]'
                            activeClass="active"
                            to="section5"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <button>Skills</button>
                        </Link>
                        <Link className='hover:text-[#A5A6FF]'
                            activeClass="active"
                            to="section6"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <button>Contact</button>
                        </Link>
                    </div>

                    {/* Footer */}
                    <div className='mt-5 lg:mt-12'>
                        {/* Social */}
                        <div className='flex justify-center gap-3'>
                            {/* fb */}
                            <a href="https://www.facebook.com/tanipa.hood" target='_black'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825" /></svg>
                            </a>
                            {/* github */}
                            <a href="https://github.com/tanipa1" target='_black'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" /></svg>
                            </a>
                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/tanipa/" target='_black'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z" /><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" /></svg>
                            </a>
                        </div>
                        {/* copyright */}
                        <p className='text-center mt-3'>
                            Copyright © 2023 Tania Ahmed.<br /> All rights reserved.
                        </p>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default Home;