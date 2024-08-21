
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import ParticlesBg from './Particles.jsx';
import useOnScreen from './Screenhook.jsx'; // Adjust import path as necessary

function Navigationbar() {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactsRef = useRef(null);

    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
        const sections = [
            { ref: aboutRef, name: 'about-section' },
            { ref: skillsRef, name: 'skills-section' },
            { ref: projectsRef, name: 'projects-section' },
            { ref: contactsRef, name: 'contacts-section' },
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            if (section.ref.current) {
                observer.observe(section.ref.current);
            }
        });

        return () => {
            sections.forEach((section) => {
                if (section.ref.current) {
                    observer.unobserve(section.ref.current);
                }
            });
        };
    }, []);

    useEffect(() => {
        if (currentSection) {
            console.log(`You are in the ${currentSection}`);
        }
    }, [currentSection]);


    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                <div className=" flex flex-wrap justify-between max-w-screen-xl mx-auto border-l border-r">
                    <a href="#" className="flex items-center pl-4 dark:border-gray-700">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Rd</span>
                    </a>
                    <div className="flex items-center lg:order-2 dark:border-gray-700">
                        <div className="hidden mr-2 sm:inline-block">
                            <button type="button" class="hs-dark-mode-active:hidden block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-theme-click-value="dark">
                                <span class="group inline-flex shrink-0 justify-center items-center size-9">
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                    </svg>
                                </span>
                            </button>
                            <button type="button" class="hs-dark-mode-active:block hidden hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-theme-click-value="light">
                                <span class="group inline-flex shrink-0 justify-center items-center size-9">
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <path d="M12 2v2"></path>
                                        <path d="M12 20v2"></path>
                                        <path d="m4.93 4.93 1.41 1.41"></path>
                                        <path d="m17.66 17.66 1.41 1.41"></path>
                                        <path d="M2 12h2"></path>
                                        <path d="M20 12h2"></path>
                                        <path d="m6.34 17.66-1.41 1.41"></path>
                                        <path d="m19.07 4.93-1.41 1.41"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* <a className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</a> */}
                        <button data-collapse-toggle="mobile-menu-2" type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2" aria-expanded="true">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col font-medium lg:flex-row lg:space-x-24 lg:mt-0">
                            <li >
                                <div className="border-r border-l border-t px-8 mt-5 pb-2 rounded-t-lg dark:border-gray-700">
                                    <Link to="about-section" smooth={true} duration={500} ref={aboutRef}
                                        className="block mt-2 border-red-200 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                                </div>
                            </li>
                            <li>
                                <div className="border-b border-r border-l rounded-b-lg px-8 pt-2 dark:border-gray-700">
                                    <Link to="skills-section" smooth={true} duration={500}
                                        className="block mb-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:cursor-pointer lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Skills</Link>
                                </div>
                            </li>
                            <li>
                                <div className="border-r pb-2 border-l border-t px-8 mt-5 rounded-t-lg flex dark:border-gray-700">
                                    <Link to="projects-section" smooth={true} duration={500}
                                        className="mt-2 block py-2 pl-3 pr-4 text-gray-700 border border-purple-300 hover:bg-gray-50 hover:cursor-pointer lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        Projects
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="border-b border-r border-l rounded-b-lg px-8 pt-2 dark:border-gray-700">
                                    <Link
                                        to="contacts-section"
                                        smooth={true}
                                        duration={500}
                                        className={`block mb-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700
                                            }`}
                                    >
                                        Connect
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

            <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>

        </>
    )
}

export default Navigationbar;