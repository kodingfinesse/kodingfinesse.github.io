// src/components/MainContent.jsx
import React, { useEffect } from 'react';
import About from './About';
import PortfolioWithCards from './PortfolioWithCards';
import Contact from './Contact';

const MainContent = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="padding-large" id="main">
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <PortfolioWithCards />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default MainContent;
