import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './pages/About'
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Gallery />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
