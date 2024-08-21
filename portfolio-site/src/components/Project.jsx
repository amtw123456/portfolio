// import { GitHubIcon, VisitIcon } from '../../Icons';
// import Image from 'next/image';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from './Screenhook'; // Adjust import path as necessary


const Project = (data) => {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            console.log("Project Section is on screen");
        } else {
            console.log("Project Section is not on screen");
        }
    }, [isVisible]);

    return (
        <section ref={ref} id="projects-section" className="flex flex-col border border-white">
            <div className="flex flex-row justify-end items-center mb-24 mt-16">
                <hr className="mt-6 border-t-1 border-purple-600 h-2 w-72" />
                <div className="font-mono ml-4 font-bold text-5xl text-purple-600">Project</div>
            </div>
            {isVisible ? (
                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                >
                    <div className=" mb-24">
                        {data.project.projects.map((project, i) => (
                            <article className="flex flex-col items-center mt-10 md:flex-row">
                                <a class="group max-w-xs h-60 relative flex flex-col w-full min-h-60 bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')] transition">
                                    <div class="flex-auto p-4 md:p-6">
                                        <h3 class="text-xl text-white/90 group-hover:text-white"><span class="font-bold">Preline</span> Press publishes books about economic and technological advancement.</h3>
                                    </div>
                                    <div class="pt-0 p-4 md:p-6">
                                        <div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70">
                                            <a class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-vertically-centered-modal" data-hs-overlay="#hs-large-modal">
                                                Visit the site
                                                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="m9 18 6-6-6-6"></path>
                                                </svg>
                                            </a>

                                            <div id="hs-large-modal" class="z-50 hs-overlay hidden size-full fixed top-0 start-0 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-large-modal-label">
                                                <div class="h-60 hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
                                                    <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                                        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                                                            <h3 id="hs-large-modal-label" class="font-bold text-gray-800 dark:text-white">
                                                                Modal title
                                                            </h3>

                                                            <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-large-modal">
                                                                <span class="sr-only">Close</span>
                                                                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                    <path d="M18 6 6 18"></path>
                                                                    <path d="m6 6 12 12"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div data-hs-carousel='{
                                                    "loadingClasses": "opacity-0",
                                                    "isAutoPlay": true
                                                }' class="relative">
                                                            <div class="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
                                                                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                                                                    <div class="hs-carousel-slide">
                                                                        <div class="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                                                                            <span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">First slide</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="hs-carousel-slide">
                                                                        <div class="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
                                                                            <span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">Second slide</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="hs-carousel-slide">
                                                                        <div class="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
                                                                            <span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">Third slide</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                                                <span class="text-2xl" aria-hidden="true">
                                                                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                        <path d="m15 18-6-6 6-6"></path>
                                                                    </svg>
                                                                </span>
                                                                <span class="sr-only">Previous</span>
                                                            </button>
                                                            <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                                                <span class="sr-only">Next</span>
                                                                <span class="text-2xl" aria-hidden="true">
                                                                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                        <path d="m9 18 6-6-6-6"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>

                                                            <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                                                                <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
                                                                <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
                                                                <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
                                                            </div>
                                                        </div>

                                                        <div class="p-4 overflow-y-auto">
                                                            <p class="mt-1 text-gray-800 dark:text-neutral-400">
                                                                This is a wider card with supporting text below as a natural lead-in to additional content.
                                                            </p>
                                                        </div>
                                                        <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                                                            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-large-modal">
                                                                Close
                                                            </button>
                                                            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                                                Save changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <div className="ml-2 mt-5 md:mt-0 md:ml-20">
                                    <h3 className="text-3xl font-semibold text-neon">{project.name}</h3>
                                    <p className="text-textDark mt-3 md:max-w-[700px]">{project.about}</p>
                                    {project.tech.map((tech, i) => (
                                        <span
                                            className="border inline-block bg-text text-darker Blue rounded-full px-3 py-1 mt-2 mr-2"
                                            key={i}
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                    <p className="text-textDark mt-2">
                                        <span className="text-neon">Role:</span> {project.role}
                                    </p>

                                    <div className="flex mt-4 space-x-4">
                                        {project.links.GitHub && (
                                            <a
                                                className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current hover:bg-neon hover:border-neon hover:backdrop-blur-lg border-neon group-hover:text-white hover:text-white text-neon"
                                                href={project.links.GitHub}
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                {/* <GitHubIcon /> */}

                                                <span className="ml-2">GitHub</span>
                                            </a>
                                        )}
                                        <a
                                            className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current text-darkerBlue bg-neon border-neon hover:bg-transparent hover:text-neon"
                                            href={project.links.Live}
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            {/* <VisitIcon /> */}
                                            <span className="ml-2">Visit</span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.article>
            ) : <>
                <div className="mb-24">
                    {data.project.projects.map((project, i) => (
                        <article className="flex flex-col items-center mt-10 md:flex-row">
                            <a class="group max-w-xs h-60 relative flex flex-col w-full min-h-60 bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')] transition">
                                <div class="flex-auto p-4 md:p-6">
                                    <h3 class="text-xl text-white/90 group-hover:text-white"><span class="font-bold">Preline</span> Press publishes books about economic and technological advancement.</h3>
                                </div>
                                <div class="pt-0 p-4 md:p-6">
                                    <div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70">
                                        <a class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-vertically-centered-modal" data-hs-overlay="#hs-large-modal">
                                            Visit the site
                                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                        </a>

                                        <div id="hs-large-modal" class="z-50 hs-overlay hidden size-full fixed top-0 start-0 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-large-modal-label">
                                            <div class="h-60 hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
                                                <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                                    <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                                                        <h3 id="hs-large-modal-label" class="font-bold text-gray-800 dark:text-white">
                                                            Modal title
                                                        </h3>

                                                        <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-large-modal">
                                                            <span class="sr-only">Close</span>
                                                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M18 6 6 18"></path>
                                                                <path d="m6 6 12 12"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div data-hs-carousel='{
                                                    "loadingClasses": "opacity-0",
                                                    "isAutoPlay": true
                                                }' class="relative">
                                                        <div class="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
                                                            <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                                                                <div class="hs-carousel-slide">
                                                                    <div class="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                                                                        <span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">First slide</span>
                                                                    </div>
                                                                </div>
                                                                <div class="hs-carousel-slide">
                                                                    <div class="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
                                                                        <span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">Second slide</span>
                                                                    </div>
                                                                </div>
                                                                <div class="hs-carousel-slide">
                                                                    <div class="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
                                                                        <span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">Third slide</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                                            <span class="text-2xl" aria-hidden="true">
                                                                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                    <path d="m15 18-6-6 6-6"></path>
                                                                </svg>
                                                            </span>
                                                            <span class="sr-only">Previous</span>
                                                        </button>
                                                        <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                                                            <span class="sr-only">Next</span>
                                                            <span class="text-2xl" aria-hidden="true">
                                                                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                    <path d="m9 18 6-6-6-6"></path>
                                                                </svg>
                                                            </span>
                                                        </button>

                                                        <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                                                            <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
                                                            <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
                                                            <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
                                                        </div>
                                                    </div>

                                                    <div class="p-4 overflow-y-auto">
                                                        <p class="mt-1 text-gray-800 dark:text-neutral-400">
                                                            This is a wider card with supporting text below as a natural lead-in to additional content.
                                                        </p>
                                                    </div>
                                                    <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                                                        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-large-modal">
                                                            Close
                                                        </button>
                                                        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div className="ml-2 mt-5 md:mt-0 md:ml-20">
                                <h3 className="text-3xl font-semibold text-neon">{project.name}</h3>
                                <p className="text-textDark mt-3 md:max-w-[700px]">{project.about}</p>
                                {project.tech.map((tech, i) => (
                                    <span
                                        className="border inline-block bg-text text-darker Blue rounded-full px-3 py-1 mt-2 mr-2"
                                        key={i}
                                    >
                                        {tech}
                                    </span>
                                ))}

                                <p className="text-textDark mt-2">
                                    <span className="text-neon">Role:</span> {project.role}
                                </p>

                                <div className="flex mt-4 space-x-4">
                                    {project.links.GitHub && (
                                        <a
                                            className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current hover:bg-neon hover:border-neon hover:backdrop-blur-lg border-neon group-hover:text-white hover:text-white text-neon"
                                            href={project.links.GitHub}
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            {/* <GitHubIcon /> */}

                                            <span className="ml-2">GitHub</span>
                                        </a>
                                    )}
                                    <a
                                        className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current text-darkerBlue bg-neon border-neon hover:bg-transparent hover:text-neon"
                                        href={project.links.Live}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        {/* <VisitIcon /> */}
                                        <span className="ml-2">Visit</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </>}
        </section>


    );
};

export default Project;