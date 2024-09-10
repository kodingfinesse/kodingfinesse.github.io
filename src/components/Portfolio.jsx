import React from 'react';
import portfolioPhoto from '../images/pcserver.webp';
import webScraperImage from '../images/webscraper.webp';
import todoAppImage from '../images/todo.webp';

const ProjectThumbnail = ({ title, description, imageUrl, projectUrl }) => (
  <div className="project-thumbnail">
    <a href={projectUrl} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={title} style={{ width: '300px', height: 'auto' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  </div>
);

const Portfolio = () => (
  <div className="padding-64 content container" id="portfolio">
    <h2 className="text-light-grey">Portfolio</h2>
    <hr style={{ width: '200px' }} className="opacity" />
    <section className="gallery">
      <ol>
        <li className="item">
          <ProjectThumbnail
            title="Local Web Server"
            description="Successfully deployed a local web server using an old computer."
            imageUrl={portfolioPhoto}
            projectUrl="#"
          />
        </li>
        <li className="item">
          <ProjectThumbnail
            title="Web Scraper"
            description="A Python-based web scraping tool for data extraction."
            imageUrl={webScraperImage}
            projectUrl="https://github.com/kodeklipper/webscraper"
          />
        </li>
        <li className="item">
          <ProjectThumbnail
            title="Java ToDo App"
            description="A simple and efficient todo application built with Java."
            imageUrl={todoAppImage}
            projectUrl="https://github.com/kodeklipper/todo-java-app"
          />
        </li>
      </ol>
    </section>
  </div>
);

export default Portfolio;

