import React from 'react';

const Portfolio = () => (
  <div className="padding-64 content container" id="portfolio">
    <h2 className="text-light-grey">Portfolio</h2>
    <hr style={{ width: '200px' }} className="opacity" />
    <div className="row-padding" style={{ margin: '0 -16px' }}>
      <div className="half">
        <img src="" style={{ width: '100%' }} alt="Projects" />
        </div>
        </div>
        <section className="gallery">
      <ul>
        <li className="item">
          <div className="info">
            <a href="#" title="Project Title">
              <img src="https://source.unsplash.com/RPzWI0rolS8" alt="Project Title"/>
            </a>
            <h3>Project Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </li>
        <li className="item">
          <div className="info">
            <a href="#" title="Project Title">
              <img src="https://source.unsplash.com/i1S4n4yQUKM" alt="Project Title"/>
            </a>
            <h3>Project Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </li>
      </ul>
    </section>
  </div>


);

export default Portfolio;
