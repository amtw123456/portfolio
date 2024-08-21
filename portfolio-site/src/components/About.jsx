import React, { useEffect, useRef, useState } from 'react';
import useThemeSwitcher from '../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import DeveloperPhoto from '../images/Dev_Photo.jpeg';

import useOnScreen from './Screenhook'; // Adjust import path as necessary

const About = () => {
    const [activeTheme] = useThemeSwitcher();

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            console.log("Element is on screen");
        } else {
            console.log("Element is not on screen");
        }
    }, [isVisible]);

    return (
        <section ref={ref} id="about-section" className='border border-white'>
            {isVisible ? (
                <div className='z-50 mb-72 pt-36'>
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                        className="flex flex-col items-center justify-center"
                    >
                        <div className="w-full">
                            <div className='items-center flex justify-center'>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        ease: 'easeInOut',
                                        duration: 1.9,
                                        delay: 0.1,
                                    }}
                                    className="font-general-semibold text-2xl text-center text-ternary-dark"
                                >
                                    <img src={DeveloperPhoto} alt="Random Image" className="w-64 h-64 rounded-full" />
                                </motion.div>

                            </div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    ease: 'easeInOut',
                                    duration: 0.9,
                                    delay: 0.2,
                                }}
                                className="font-general-medium mt-4 text-lg text-center leading-normal text-gray-500"
                            >
                                A Full-Stack Developer & Design Enthusiast
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    ease: 'easeInOut',
                                    duration: 0.9,
                                    delay: 0.1,
                                }}
                            >
                                <div className='mx-48 text-center'>
                                    <span>
                                        Hi, I'm RD, a recent Computer Science graduate with a strong passion for machine learning, data analytics,
                                        and software development. My academic background has equipped me with a solid foundation in these areas, and \
                                        I am eager to apply my skills in a professional setting. I am enthusiastic about tackling real-world problems
                                        and contributing to innovative projects that make an impact. I'm looking forward to starting my career and
                                        continuing to learn and grow in these dynamic fields.
                                    </span>
                                </div>
                            </motion.div>
                            <div className='flex flex-row justify-evenly'>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        ease: 'easeInOut',
                                        duration: 0.9,
                                        delay: 0.3,
                                    }}
                                    className="flex justify-center sm:block"
                                >
                                    <a
                                        download="Stoman-Resume.pdf"
                                        href="/files/Stoman-Resume.pdf"
                                        className="font-general-medium flex justify-center items-center w-36 sm:w-56 mt-12 mb-6 sm:mb-0 text-lg border border-purple-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                                        aria-label="Download Resume"
                                    >
                                        <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                                        <span className="text-sm sm:text-lg font-general-medium duration-100">
                                            Download Resume
                                        </span>
                                    </a>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        ease: 'easeInOut',
                                        duration: 0.9,
                                        delay: 0.3,
                                    }}
                                    className="flex justify-center sm:block"
                                >
                                    <a
                                        download="Stoman-Resume.pdf"
                                        href="/files/Stoman-Resume.pdf"
                                        className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-purple-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                                        aria-label="Download Resume"
                                    >
                                        <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                                        <span className="text-sm sm:text-lg font-general-medium duration-100">
                                            Download CV
                                        </span>
                                    </a>
                                </motion.div>
                            </div>
                        </div>

                    </motion.section>
                </div >
            ) : (
                <div className="z-50 mb-72 pt-36">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full">
                            <div className="items-center flex justify-center">
                                <div className="font-general-semibold text-2xl text-center text-ternary-dark">
                                    <img src={DeveloperPhoto} alt="Random Image" className="w-64 h-64 rounded-full" />
                                </div>
                            </div>
                            <p className="font-general-medium mt-4 text-lg text-center leading-normal text-gray-500">
                                A Full-Stack Developer & Design Enthusiast
                            </p>
                            <div className="mx-48 text-center">
                                <span>
                                    Hi, I'm RD, a recent Computer Science graduate with a strong passion for machine learning, data analytics,
                                    and software development. My academic background has equipped me with a solid foundation in these areas, and
                                    I am eager to apply my skills in a professional setting. I am enthusiastic about tackling real-world problems
                                    and contributing to innovative projects that make an impact. I'm looking forward to starting my career and
                                    continuing to learn and grow in these dynamic fields.
                                </span>
                            </div>
                            <div className="flex flex-row justify-evenly">
                                <div className="flex justify-center sm:block">
                                    <a
                                        download="Stoman-Resume.pdf"
                                        href="/files/Stoman-Resume.pdf"
                                        className="font-general-medium flex justify-center items-center w-36 sm:w-56 mt-12 mb-6 sm:mb-0 text-lg border border-purple-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                                        aria-label="Download Resume"
                                    >
                                        <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100" />
                                        <span className="text-sm sm:text-lg font-general-medium duration-100">
                                            Download Resume
                                        </span>
                                    </a>
                                </div>
                                <div className="flex justify-center sm:block">
                                    <a
                                        download="Stoman-Resume.pdf"
                                        href="/files/Stoman-Resume.pdf"
                                        className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-purple-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                                        aria-label="Download CV"
                                    >
                                        <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100" />
                                        <span className="text-sm sm:text-lg font-general-medium duration-100">
                                            Download CV
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </section>
    );
}

export default About;