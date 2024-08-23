
import React, { useRef, useEffect, useState, useContext } from 'react';
import { Link } from 'react-scroll';

import { AppContext } from '../providers/AppStateProvider'; // Adjust the path as necessary

function Navigationbar() {
    const { inAboutSection, setInAboutSection } = useContext(AppContext);
    const { inSkillsSection, setInSkillsSection } = useContext(AppContext);
    const { inProjectsSection, setInProjectsSection } = useContext(AppContext);
    const { inContactsSection, setInContactsSection } = useContext(AppContext);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                <div className="flex flex-wrap justify-between max-w-screen-xl mx-auto border-l border-r">
                    <a href="#" className="hidden lg:flex items-center pl-4 dark:border-gray-700">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Rd</span>
                    </a>
                    <div className="hidden lg:flex flex items-center lg:order-2 dark:border-gray-700 ">
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

                    </div>
                    <div className="justify-center flex flex-1 items-center w-full lg:w-auto lg:order-1">
                        <ul className="flex font-medium space-x-2 md:space-x-24" >
                            <li >
                                <div className="border-r border-l border-t sm:px-8 mt-4 pb-2 rounded-t-lg">
                                    <Link to="about-section" smooth={true} duration={500}
                                        className={`select-none	block pl-3 pr-4 text-gray-700 hover:cursor-pointer lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${inAboutSection ? 'text-purple-700' : ''}`}
                                    >
                                        About
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="border-b border-r border-l rounded-b-lg sm:px-8 pt-2">
                                    <Link to="skills-section" smooth={true} duration={500}
                                        className={`select-none	block pl-3 pr-4 text-gray-700 hover:cursor-pointer lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${inSkillsSection ? 'text-purple-700' : ''}`}
                                    >
                                        Skills
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="border-r border-l border-t sm:px-8 mt-4 pb-2 rounded-t-lg">
                                    <Link to="projects-section" smooth={true} duration={500}
                                        className={`select-none	block pl-3 pr-4 text-gray-700 hover:cursor-pointer lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${inProjectsSection ? 'text-purple-700' : ''}`}
                                    >
                                        Projects
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="border-b border-r border-l rounded-b-lg sm:px-8 pt-2">
                                    <Link to="contacts-section" smooth={true} duration={500}
                                        className={`select-none	block pl-3 pr-4 text-gray-700 hover:cursor-pointer lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${inContactsSection ? 'text-purple-700' : ''}`}
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