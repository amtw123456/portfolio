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

    </>

  );
}

export default App;
