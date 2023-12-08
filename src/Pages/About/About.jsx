import React from 'react';
import { Element, Link } from 'react-scroll';

const About = () => {
    return (
        <Element name="section2" className="element py-8 lg:py-20 px-6 lg:px-10">
            <div className='lg:flex items-center gap-5 justify-around w-full'>
                <div className='grid justify-center text-center lg:text-left gap-3 lg:w-1/3'>
                    <p>- NICE TO MEET YOU!</p>
                    <h1 className='font-bold text-3xl py-0'>Tania Ahmed Nipa</h1>
                    <p>MERN Stack Developer</p>
                    <button className='lg:w-2/3 mb-4 btn btn-xs lg:btn-md bg-black text-white'>
                        <Link to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>Demo Projects
                        </Link>
                    </button>
                </div>
                <div className='lg:w-2/3'>
                    <p className='text-justify font-serif text-sm lg:text-lg tracking-wider'>
                        Hello there! My name is <span className='text-[#FF972D]'>Tania Ahmed Nipa</span>. I am a MERN Stack Web developer, and I'm very passionate and dedicated to my work. <br/><br/>

                        With 1.5 years experience as a professional a MERN Stack Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the implementation process, from discussion and collaboration.
                    </p>
                </div>
            </div>
        </Element>
    );
};

export default About;