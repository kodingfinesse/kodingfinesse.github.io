import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
