// src/App.jsx
import React from 'react';
import Home from './components/Home';
import StickyNavbar from "./components/Navbar";
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/global.css';

export default function App() {
  return (
    <main>
      <StickyNavbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
