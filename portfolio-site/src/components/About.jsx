import useThemeSwitcher from '../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import DeveloperPhoto from '../images/Dev_Photo.jpeg';

const About = () => {
    const [activeTheme] = useThemeSwitcher();

    return (
        <section id="about-section" className='z-50 mb-60 pt-24'>
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
                            <img src={DeveloperPhoto} alt="Random Image" className="w-64 h-72 rounded-full" />
                        </motion.div>

                    </div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.9,
                            delay: 0.1,
                        }}
                        className="font-general-semibold text-2xl text-center text-ternary-dark"
                    >
                        Hi, I'm Rd
                    </motion.h1>
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
                    <div className='mx-48 text-center'>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper porta pharetra. Nunc porta dui eu mattis laoreet.
                            Quisque lobortis orci sagittis, luctus ligula nec, sagittis leo. Ut convallis eu mi dignissim facilisis. Donec egestas vitae sapien quis bibendum.
                            Sed rhoncus aliquet felis, ac cursus dui varius sit amet. Etiam eu nisi ligula. Sed sagittis massa a metus pulvinar, eu vestibulum nulla molestie.
                            Nullam luctus sit amet felis quis ullamcorper.
                        </span>
                    </div>

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
                                className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
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
                                className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
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
        </section>
    );
};

export default About;