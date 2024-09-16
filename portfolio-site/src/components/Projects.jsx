// import { GitHubIcon, VisitIcon } from '../../Icons';
// import Image from 'next/image';

import React, { useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import useOnScreen from '../hooks/useScreenView'; // Adjust import path as necessary

import { AppContext } from '../providers/AppStateProvider';

import ProjectSampleImage from '../assets/project_images/Test.JPG';
import Carousel from '../components/Carousel';

const Projects = (data) => {
    const { inProjectsSection, setInProjectsSection } = useContext(AppContext);

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            console.log("Project Section is on screen");
            setInProjectsSection(true)
        } else {
            console.log("Project Section is not on screen");
            setInProjectsSection(false)
        }
    }, [isVisible]);

    return (
        <section ref={ref} id="projects-section" className="border border-white md:w-full">
            <div className="flex flex-row justify-end items-center mb-24 mt-16">
                <hr className="mt-6 border-t-1 border-purple-600 h-2 w-72" />
                <div className="font-mono ml-4 font-bold text-5xl text-purple-600">Projects</div>
            </div>

            {isVisible ? (
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                    className="flex flex-col items-center justify-center"
                >

                    <div className="flex flex-wrap">
                        {
                            data.project.projects.map((project, i) => {

                                return (
                                    <div className='sm:w-1/2 rounded-lg w-full' key={i}>
                                        {i % 2 === 0 ? (
                                            <div className="flex flex-wrap pl-12 mb-4">
                                                <Carousel project={project} ProjectSampleImage={ProjectSampleImage} />
                                                <div className="flex flex-col">
                                                    <span className="font-medium font-serif text-3xl mt-2">
                                                        {project.name}
                                                    </span>
                                                    <div className='flex flex-row flex-wrap py-2'>
                                                        {project.tech.map((tech, i) => (
                                                            <span className='border border-gray-400 rounded-full mr-4 py-1 px-2' key={i}>{tech}</span>
                                                        ))}
                                                    </div>
                                                    <span className="mt-2">
                                                        {project.about}
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-wrap pl-12 mb-4">
                                                <Carousel project={project} ProjectSampleImage={ProjectSampleImage} />

                                                <div className="flex flex-col">
                                                    <span className="font-medium font-serif text-3xl mt-2">
                                                        {project.name}
                                                    </span>
                                                    <div className='flex flex-row flex-wrap py-2'>
                                                        {project.tech.map((tech, i) => (
                                                            <span className='border border-gray-400 rounded-full mr-4 py-1 px-2' key={i}>{tech}</span>
                                                        ))}
                                                    </div>
                                                    <span className="mt-2">
                                                        {project.about}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        }
                    </div>
                </motion.section>
            ) :
                <>
                    <div className="flex flex-wrap opacity-0">
                        {
                            data.project.projects.map((project, i) => {
                                // Generate a unique ID for the carousel
                                // const carouselId = `carousel-${uuidv4()}`;

                                return (
                                    <div className='sm:w-1/2 rounded-lg w-full' key={i}>
                                        {i % 2 === 0 ? (
                                            <div className="flex flex-wrap pl-12 mb-4">
                                                <Carousel project={project} ProjectSampleImage={ProjectSampleImage} />
                                                <div className="flex flex-col">
                                                    <span className="font-medium font-serif text-3xl mt-2">
                                                        {project.name}
                                                    </span>
                                                    <div className='flex flex-row flex-wrap py-2'>
                                                        {project.tech.map((tech, i) => (
                                                            <span className='border border-gray-400 rounded-full mr-4 py-1 px-2' key={i}>{tech}</span>
                                                        ))}
                                                    </div>
                                                    <span className="mt-2">
                                                        {project.about}
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-wrap pl-12 mb-4">
                                                <Carousel project={project} ProjectSampleImage={ProjectSampleImage} />

                                                <div className="flex flex-col">
                                                    <span className="font-medium font-serif text-3xl mt-2">
                                                        {project.name}
                                                    </span>
                                                    <div className='flex flex-row flex-wrap py-2'>
                                                        {project.tech.map((tech, i) => (
                                                            <span className='border border-gray-400 rounded-full mr-4 py-1 px-2' key={i}>{tech}</span>
                                                        ))}
                                                    </div>
                                                    <span className="mt-2">
                                                        {project.about}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })

                        }
                    </div>

                </>
            }
        </section >


    );
};

export default Projects;