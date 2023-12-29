import React from 'react';
import { Element } from 'react-scroll';
import './Services.css';

const Services = () => {
    return (
        <Element name="section3" className="px-6 lg:px-10 element py-8 ">
            <p>- Services</p>
            <h1 className='text-blue-950 lg:font-extrabold font-bold lg:text-3xl text-lg mb-8'>My Services!</h1>

            <div className=' grid lg:grid-cols-3 gap-5'>
                {/* Service - 1 */}
                <div className='glowing box lg:w-64 lg:h-[300px] border-[1.5px] p-5 '>
                    <h1 className='font-bold text-center font-serif text-lg lg:text-xl mb-3 lg:mb-5'>Web Application Development</h1>
                    <ul className='list-[square] list-inside'>
                        <li className='mb-3 font-serif text-gray-500'>
                            Designing and implementing the frontend using React.js.</li>
                        <li className=' font-serif text-gray-500'>
                            Developing the backend using Node.js and Express.js.</li>
                    </ul>
                </div>
                {/* Service - 2 */}
                <div className='glowing box lg:w-64 lg:h-[300px] border-[1.5px] p-5 '>
                    <h1 className='font-bold text-center font-serif text-lg lg:text-xl mb-3 lg:mb-5'>Database Design and Integration</h1>
                    <ul className='list-[square] list-inside'>
                        <li className='mb-3 font-serif text-gray-500'>
                            Designing MongoDB databases to efficiently store and retrieve data.</li>
                        <li className=' font-serif text-gray-500'>
                            Integrating MongoDB with the backend to lierform CRUD (Create, Read, Update, Delete) operations.</li>
                    </ul>
                </div>
                {/* Service - 3 */}
                <div className='glowing box lg:w-64 lg:h-[300px] border-[1.5px] p-5 '>
                    <h1 className='font-bold text-center font-serif text-lg lg:text-xl mb-3 lg:mb-5'>Testing & Debugging</h1>
                    <ul className='list-[square] list-inside'>
                        <li className='mb-3 font-serif text-gray-500'>
                            Writing unit tests, integration tests, and end-to-end tests to ensure code reliability.</li>
                        <li className=' font-serif text-gray-500'>
                            Conducting performance testing to identify and address bottlenecks.</li>
                    </ul>
                </div>
                {/* Service - 4 */}
                <div className='glowing box lg:w-64 lg:h-[300px] border-[1.5px] p-5 '>
                    <h1 className='font-bold text-center font-serif text-lg lg:text-xl mb-3 lg:mb-5'>API Development</h1>
                    <ul className='list-[square] list-inside'>
                        <li className='mb-3 font-serif text-gray-500'>
                            Developing RESTful APIs for seamless communication between the frontend and backend.</li>
                        <li className=' font-serif text-gray-500'>
                            Implementing authentication and authorization mechanisms to secure API endpoints.</li>
                    </ul>
                </div>
                {/* Service - 5 */}
                <div className='glowing box lg:w-64 lg:h-[300px] border-[1.5px] p-5 '>
                    <h1 className='font-bold text-center font-serif text-lg lg:text-xl mb-3 lg:mb-5'>Optimization and Performance</h1>
                    <ul className='list-[square] list-inside'>
                        <li className='mb-3 font-serif text-gray-500'>
                            Implementing best practices to reduce load times and enhance user experience.</li>
                        <li className=' font-serif text-gray-500'>
                            Refactoring code for better readability, maintainability, and efficiency.</li>
                    </ul>
                </div>
                {/* Service - 6 */}
                <div className='glowing box lg:w-64 lg:h-[300px] p-5'>
                    <div className='glow'></div>
                    <div className='content py-3'>
                        <h1 className='font-bold text-center font-serif text-lg lg:text-xl mb-3 lg:mb-5'>Collaboration & Maintenance</h1>
                        <ul className='list-[square] list-inside'>
                            <li className='mb-3 font-serif text-gray-500'>
                                Collaborating with designers, other developers, and stakeholders.
                            </li>
                            <li className='font-serif text-gray-500'>
                                Providing ongoing maintenance, updates, and support for the web application.
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </Element>

    );
};

export default Services;