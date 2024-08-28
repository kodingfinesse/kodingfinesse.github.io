import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from '../pages/About'; // Import your About component
import Gallery from "../components/Gallery"
import Projects from '../pages/Projects'
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/about" title="About">About</Link></li>
        </ul>
        <Routes>
          <Route path="/about" element={<About />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
