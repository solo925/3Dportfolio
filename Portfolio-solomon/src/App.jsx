import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components';

const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile when the component mounts
  useEffect(() => {
    const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  if (isMobile) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Mobile Devices Not Supported</h1>
        <p>Sorry, this feature is not available on mobile devices for now . Please access this site from a desktop browser.</p>
      </div>
    );
  }

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className='relative z-0 bg-primary'>
        <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
