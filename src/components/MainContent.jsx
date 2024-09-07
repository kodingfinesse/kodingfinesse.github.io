import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const MainContent = () => (
  <div className="w3-padding-large" id="main">
    <About />
    <Portfolio />
    <Contact />
  </div>
);

export default MainContent;
