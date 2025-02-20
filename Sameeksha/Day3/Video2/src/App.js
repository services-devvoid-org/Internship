import React from 'react';
// components
import Banner from '../../v2/src/components/Banner';
import Header from '../../v2/src/components/Header';
import Nav from '../../v2/src/components/Nav';
import About from '../../v2/src/components/About';
import Services from '../../v2/src/components/Services';
import Work from '../../v2/src/components/Work';
import Contact from '../../v2/src/components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/*<div className='h-[4000px]'></div>*/}
    </div>
  );
};

export default App;
