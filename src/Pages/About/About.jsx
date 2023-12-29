import React from 'react';
import { Element, Link } from 'react-scroll';
import './About.css';
import 'animate.css';

const About = () => {
    return (
        <Element name="section2" className="element py-8 lg:py-10 ">
            <div className='px-6 lg:px-10'>
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
                            Hello there! My name is <span className='text-[#FF972D]'>Tania Ahmed Nipa</span>. I am a MERN Stack Web developer, and I'm very passionate and dedicated to my work. <br /><br />

                            With 1.5 years experience as a professional a MERN Stack Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the implementation process, from discussion and collaboration.
                        </p>

                        <div className='flex lg:gap-16 gap-5 lg:mt-12 mt-3'>
                            <p className='grid lg:gap-3'>
                                <span className='underline uppercase'>Age</span>
                                <span className='font-bold text-sm lg:text-base'>23</span>
                            </p>
                            <p className='grid lg:gap-3'>
                                <span className='underline uppercase'>Born In</span>
                                <span className='font-bold text-sm lg:text-base'>Magura, Bangladesh</span>
                            </p>
                            <p className='grid lg:gap-3'>
                                <span className='underline uppercase'>Phone</span>
                                <span className='font-bold text-sm lg:text-base'>+880 1886860386</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* three div */}
                <div className='flex justify-around lg:gap-8 gap-2 mt-6 lg:mt-16'>
                    {/* experience */}
                    <div className='bg-[#EFFBF8] lg:p-8 p-2 text-center rounded-lg btn1-css glowing-border'>
                        <h1 className='font-semibold lg:text-base text-xs'>
                            <span className='font-extrabold text-lg lg:text-2xl'>1+</span> <br /> <span>YEARS OF EXPERIENCE</span>
                        </h1>
                    </div>

                    {/* Projects */}
                    <div className='bg-[#FCE8D4] lg:p-8 p-2 text-center rounded-lg btn1-css glowing-border'>
                        <h1 className='font-semibold lg:text-base text-xs'>
                            <span className='font-extrabold text-lg lg:text-2xl'>30+</span> <br /> <span>PROJECTS COMPLETED</span>
                        </h1>
                    </div>

                    {/* Clients */}
                    <div className='bg-[#E3F9E0] lg:p-8 p-2 text-center rounded-lg btn1-css glowing-border'>
                        <h1 className=' font-semibold lg:text-base text-xs'>
                            <span className='font-extrabold text-lg lg:text-2xl'>10+</span> <br /> <span>HAPPY CLIENTS</span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* Experience */}
            <div className='bg-[#F3F9FF] mt-6 lg:mt-16 py-6 lg:py-10 px-6 lg:px-10'>
                <p>- Experience</p>
                <h1 className='text-blue-950 lg:font-extrabold font-bold lg:text-3xl text-lg'>Everything about me!</h1>
                <div className='mt-8 grid gap-5 lg:grid-cols-2'>
                    {/* Card-1 */}
                    <div className="card ex-card lg:w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div>
                                <p className='text-[#FF972D] font-semibold'>2020(January) - 2023(July)</p>
                            </div>
                            <h2 className="card-title"> Jr. React Developer</h2>
                            <p>"Bismillah Engineering Workshop"</p>
                        </div>
                    </div>
                    {/* Card-2 */}
                    <div className="card ex-card lg:w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div>
                                <p className='text-[#FF972D] font-semibold'>2022(July) - Present</p>
                            </div>
                            <h2 className="card-title"> Student - Last Semester</h2>
                            <p>B.Sc. in Computer Science & Engineering</p>
                            <p>"Daffodil International University"</p>
                        </div>
                    </div>
                    {/* Card-3 */}
                    <div className="card ex-card lg:w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div>
                                <p className='text-[#FF972D] font-semibold'>2023(January) - 2023(July)</p>
                            </div>
                            <h2 className="card-title">Web Development(MERN Stack)</h2>
                            <p>"Web Development Course With Jhankar Mahbub - Programming Hero"</p>
                        </div>
                    </div>
                    {/* Card-4 */}
                    <div className="card ex-card lg:w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div>
                                <p className='text-[#FF972D] font-semibold'>2023(October) - 2023(November)</p>
                            </div>
                            <h2 className="card-title"> Employability Skilling Program - Advance</h2>
                            <p>"Wadhwani Foundation Bangladesh"</p>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default About;