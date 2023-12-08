import React from 'react';
import tanipa from '../../assets/tanipa.png';
import { TypeAnimation } from 'react-type-animation';
import { Element, Link } from 'react-scroll';

const Banner = () => {
    return (
        <Element name="section1" className="element">
            <div className='bg-[#EFFBF8] py-14 px-5 lg:flex justify-around  items-center'>
                <div className='lg:w-1/2 grid justify-center text-center lg:text-left'>
                    <h1 className='lg:mb-5 font-bold text-2xl lg:text-5xl'>Hi, I'm <span className='text-[#A5A6FF]'>Tania!</span></h1>
                    <TypeAnimation className='text-2xl'
                        preRenderFirstString={true}
                        sequence={[
                            500,
                            'MERN Stack Developer', // initially rendered starting point
                            1000,
                            'React.js Developer',
                            1000,
                            'Web Designer',
                            1000,
                            'JavaScript Programmer',
                            500,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                    <p className='font-mono my-4 lg:my-8 text-justify lg:text-left text-sm lg:text-lg '>
                        Passionate Junior React Developer with <span className='text-[#A5A6FF] font-bold'>1+ years</span> expertise in crafting efficient and user-friendly interfaces. Collaborative team player eager to contribute creativity and enhance technical skills. Let's build something extraordinary together!
                    </p>
                    <div className='flex lg:justify-start justify-center gap-4 lg:my-4'>
                        <button className='btn btn-xs lg:btn-md bg-black text-white'><Link to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>Demo Projects
                        </Link>
                        </button>
                        <button className='btn btn-xs  lg:btn-md btn-outline'><Link to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>Let's Talk
                        </Link>
                        </button>
                    </div>
                    <div className='mt-5 border-l-4 border-[#FF972D]'>
                        <div className='lg:pl-5 grid gap-2 justify-center lg:justify-start text-xs lg:text-base'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M3.714 5.258C3.523 4 4.41 2.87 5.765 2.456a.988.988 0 0 1 1.214.598l.435 1.16a1 1 0 0 1-.26 1.088L5.86 6.487a.501.501 0 0 0-.152.47l.012.052l.031.13a7.265 7.265 0 0 0 .729 1.805a7.264 7.264 0 0 0 1.296 1.627l.04.036a.5.5 0 0 0 .482.103l1.673-.527a1 1 0 0 1 1.072.319l.792.961c.33.4.29.988-.089 1.341c-1.037.967-2.463 1.165-3.455.368a12.732 12.732 0 0 1-3.024-3.529a12.432 12.432 0 0 1-1.554-4.385Zm3.043 1.765l1.072-.984a2 2 0 0 0 .521-2.176l-.434-1.16A1.988 1.988 0 0 0 5.473 1.5c-1.683.515-3.034 2.024-2.748 3.909c.2 1.316.661 2.99 1.678 4.738a13.732 13.732 0 0 0 3.262 3.805c1.488 1.195 3.474.787 4.764-.415a1.98 1.98 0 0 0 .179-2.708l-.792-.962a2 2 0 0 0-2.144-.636l-1.389.437a6.604 6.604 0 0 1-.936-1.223a6.268 6.268 0 0 1-.59-1.421Z" /></svg>
                                <p>+880 1886860386</p>
                            </div>

                            <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5zm-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51c-.13.16-.43.15-.56.05l-4.37-3.73l-2.14 1.95l-2.13-1.95l-4.37 3.73c-.13.1-.43.11-.56-.05c-.14-.15-.06-.37.06-.51l3.9-4.06l-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04l6.25-5.04c.28-.24.62-.4.95-.07z" /></svg>
                                <p>tania35.291@gmail.com</p>
                            </div>
                            <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"><path d="M13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" /><path d="M17.5 9.5c0 3.038-2 6.5-5.5 10.5c-3.5-4-5.5-7.462-5.5-10.5a5.5 5.5 0 1 1 11 0Z" /></g></svg>
                                <p>Tongi, Gazipur-1711</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid justify-center'>
                    <img className='lg:w-[350px] w-[250px]' src={tanipa} alt="" />
                </div>
            </div>
        </Element>
    );
};

export default Banner;