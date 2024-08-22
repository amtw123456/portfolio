
import React, { useRef, useEffect, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import useOnScreen from '../hooks/useScreenView'; // Adjust import path as 
import { AppContext } from '../providers/AppStateProvider';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);


const GmailCopy = () => {
    const gmailAddress = 'radolor@.edu.ph'

    const copyToClipboard = () => {
        navigator.clipboard.writeText(gmailAddress)
            .then(() => {
                alert('Gmail address copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy:', err);
            });
    };

    return (
        <div onClick={copyToClipboard}>
            {gmailAddress}
        </div>
    );
};

function Contact() {
    const form = useRef();
    const { inContactsSection, setInContactsSection } = useContext(AppContext);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9mf55uv', 'template_2pweal5', form.current, 'zlCWaO64DPLn7rWrx')
            .then((result) => {
                console.log(form.current)
                console.log(result.text);
                console.log("Message Sent");

                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            console.log("Element is on screen");
            setInContactsSection(true)
        } else {
            console.log("Element is not on screen");
            setInContactsSection(false)
        }
    }, [isVisible]);

    return (
        <section ref={ref} id='contacts-section' className='flex-col sm:px-[1.25rem] mt-10 flex tm:py-0 sm:py-0 sm:mt-14 tm:flex-col gap-[80px] sm:gap-[20px] tm:gap-[20px] sm:flex-col'>
            <div className="flex flex-row items-center mb-24 mt-16">
                <div className="font-mono font-bold text-left text-5xl text-purple-600">Connect</div>
                <hr className="ml-4 mt-6 border-t-1 border-purple-600 h-2 w-72" />
            </div>
            {isVisible ? (
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                >
                    <div className='flex flex-col w-[36rem] tm:pt-4 lg:pt-4 sm:pt-0 tm:w-full sm:w-full tm:mb-[20px] sm:mb-[20px]'>
                        <div className='flex flex-row'>
                            <p className='cursor-pointer'>You can contact me at&nbsp;</p>
                            <GmailCopy />
                        </div>
                    </div>
                    <div className='flex justify-center'>

                        <form className='flex flex-col gap-4 tm:w-full sm:w-full lg:w-full' ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input className='p-4 rounded-[4px] bg-[#e4e1e1fa] dark:bg-[#3d3e4b] h-[58px]'
                                placeholder='Name'
                                type="text"
                                name="from_name"
                                required />

                            <label>Email</label>
                            <input className='p-4 rounded-[4px]  bg-[#e4e1e1fa] dark:bg-[#3d3e4b] h-[58px]'
                                placeholder='Email'
                                type="email"
                                name="from_email"
                                required />

                            <label>Your Message</label>
                            <textarea
                                className='p-4 resize-none rounded-[4px] input bg-[#e4e1e1fa] dark:bg-[#343541] h-[198px] '
                                placeholder='Your message'
                                type='text'
                                name="message"
                                required />

                            <div className='flex justify-start mt-5 mb-8'>
                                <button type='submit'
                                    className='px-[1.6em] py-[.8em] text-white bg-purple-600 coursor-pointer rounded-[4px] flex justify-start items-center gap-1 lg:text-[.8rem] sm:text-[.8rem]'>Send</button>
                            </div>
                        </form>
                    </div>
                </motion.section>
            ) : <>
                <div className='flex flex-col w-[36rem] tm:pt-4 lg:pt-4 sm:pt-0 tm:w-full sm:w-full tm:mb-[20px] sm:mb-[20px] opacity-0'>
                    <div className='flex flex-row'>
                        <p className='cursor-pointer'>You can contact me at&nbsp;</p>
                        <GmailCopy />
                    </div>
                </div>
                <div className='flex justify-center'>

                    <form className='flex flex-col gap-4 tm:w-full sm:w-full lg:w-full' ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input className='p-4 rounded-[4px] bg-[#e4e1e1fa] dark:bg-[#3d3e4b] h-[58px]'
                            placeholder='Name'
                            type="text"
                            name="from_name"
                            required />

                        <label>Email</label>
                        <input className='p-4 rounded-[4px]  bg-[#e4e1e1fa] dark:bg-[#3d3e4b] h-[58px]'
                            placeholder='Email'
                            type="email"
                            name="from_email"
                            required />

                        <label>Your Message</label>
                        <textarea
                            className='p-4 resize-none rounded-[4px] input bg-[#e4e1e1fa] dark:bg-[#343541] h-[198px] '
                            placeholder='Your message'
                            type='text'
                            name="message"
                            required />

                        <div className='flex justify-start mt-5 mb-8'>
                            <button type='submit'
                                className='px-[1.6em] py-[.8em] text-white bg-purple-600 coursor-pointer rounded-[4px] flex justify-start items-center gap-1 lg:text-[.8rem] sm:text-[.8rem]'>Send</button>
                        </div>
                    </form>
                </div>
            </>}
        </section>
    );
}

export default Contact;