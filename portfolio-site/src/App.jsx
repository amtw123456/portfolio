import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
import { IStaticMethods } from "preline/preline";

import Navigationbar from './components/Navigationbar.jsx';
import ParticlesBg from './assets/Particles.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import data from './data/projectData.js';

import { AppStateProvider } from './providers/AppStateProvider.jsx';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();

  }, [location.pathname]);

  return (

    <AppStateProvider>
      <ParticlesBg></ParticlesBg>
      <Navigationbar></Navigationbar>
      {/* <div className="bg-white dark:bg-gray-900 dark:border-gray-700"> */}
      <div className="max-w-screen-xl px-12 mx-auto bg-white pb-24">
        <About></About>
        <Skills></Skills>


        <Projects project={data} />
        <Contact></Contact>

      </div>
      {/* </div > */}
    </AppStateProvider>

  );
}

export default App;
