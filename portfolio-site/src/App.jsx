import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
import { IStaticMethods } from "preline/preline";


import Navigationbar from './components/Navigationbar.jsx'

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (

    <>
      <Navigationbar></Navigationbar>

      <div data-hs-carousel='{
    "loadingClasses": "opacity-0"
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

      <div class="bg-white flex justify-center items-center w-screen h-screen p-5">
        <div class='flex flex-col items-center justify-between bg-white dark:bg-gray-800 shadow-md shadow-gray-300 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full md:w-8/12 mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>
          <div class='w-full flex items-center justify-between'>
            <div class='flex items-center justify-center px-2 md:px-6'>
              <img class='w-16 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block' src='https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?size=626&ext=jpg' alt="" />
              <div class='text-left '>
                <h4 class='text-lg md:text-2xl lg:text-3xl ease-in-out duration-1000 uppercase'><span class='text-red-500'>Code</span>101</h4>
                <h4 class='text-sm md:text-base font-medium dark:text-gray-200'>Software Engineer</h4>
              </div>
            </div>
            <div class='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
              <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>July 2022 - Present </p>
              <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>Techtopia, Digital Realm</p>
            </div>
          </div>
          <div class='text-left p-2'>
            <p class='text-sm lg:text-base text-gray-600 dark:text-gray-400 pb-4'>I am a Software Engineer currently employed at Code101, where I work as a full-stack developer as part of the Web Application Development team. Together, we utilize ReactJS and NodeJS to create software solutions that provide users with a seamless and enjoyable experience.</p>
            <h4 class='text-base text-green-400 font-semibold'>Key Responsibilities</h4>
            <ul class='text-sm list-disc ml-6'>
              <li>Develop and maintain the NodeJS server and backend of the Web Application team's software solutions.</li>
              <li>Collaborate with the full-stack developer to contribute to the application's frontend development.</li>
              <li>Write reusable, flexible, and high-quality code to ensure the reliability and longevity of our products.</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>




  );
}

export default App;
