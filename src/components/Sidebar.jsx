import React from 'react';

const Sidebar = () => (
  <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
    <img src="professional.jpg" style={{ width: '100%' }} alt="Avatar" />
    <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-user w3-xxlarge"></i>
      <p>ABOUT</p>
    </a>
    <a href="#portfolio" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-eye w3-xxlarge"></i>
      <p>PORTFOLIO</p>
    </a>
    <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-envelope w3-xxlarge"></i>
      <p>CONTACT</p>
    </a>
    <a href="https://blog.dukesd.com" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-book w3-xxlarge"></i>
      <p>BLOG</p>
    </a>
  </nav>
);

export default Sidebar;
