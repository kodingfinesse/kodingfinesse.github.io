import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
