import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
import { IStaticMethods } from "preline/preline";

import Navigationbar from './components/Navigationbar.jsx'
import ParticlesBg from './components/Particles.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import data from './data/projectData.js'

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();

  }, [location.pathname]);

  return (

    <>
      <ParticlesBg></ParticlesBg>
      <Navigationbar></Navigationbar>
      {/* <div className="bg-white dark:bg-gray-900 dark:border-gray-700"> */}
      <div className="max-w-screen-xl px-8 mx-auto border-x bg-white">

        <About></About>
        <Skills></Skills>
        <Project project={data} />

      </div>
      {/* </div > */}

    </>

  );
}

export default App;
