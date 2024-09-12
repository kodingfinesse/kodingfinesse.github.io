// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="sidebar">
    <ul className="sidebar-menu">
      <li className="sidebar-item">
        <a href="/" className="button">Home</a>
      </li>
      <li className="sidebar-item">
        <a href="/#portfolio" className="button">Portfolio</a>
      </li>
      <li className="sidebar-item">
        <a href="/#contact" className="button">Contact</a>
      </li>
      <li className="sidebar-item">
        <Link to="/blog" className="button">Blog</Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
