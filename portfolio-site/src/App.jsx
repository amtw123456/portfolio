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

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
          Launch demo modal
        </button>


        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <Projects project={data} />
        <Contact></Contact>

      </div>
      {/* </div > */}
    </AppStateProvider>

  );
}

export default App;
