// Import necessary modules
import React from 'react';
import portfolioPhoto from '../images/pcserver.webp';
import webScraperImage from '../images/webscraper.webp';
import todoAppImage from '../images/todo.webp';

// Card Component representing both team members and projects
const Card = ({ pictureUrl, title, subtitle, description, link }) => (
  <div className="profile-card">
    <img className="profile-picture" src={pictureUrl} alt={title} />
    <h3 className="profile-title">{title}</h3>
    <h4 className="profile-job-title">{subtitle}</h4>
    <p className="profile-description">{description}</p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="profile-link">
        View Project
      </a>
    )}
  </div>
);

// Main Component that Combines Cards for Team Members and Projects
const PortfolioWithCards = () => {

  // Data for portfolio projects
  const projects = [
    {
      pictureUrl: portfolioPhoto,
      title: "Local Web Server",
      subtitle: "Project",
      description: "Successfully deployed a local web server using an old computer.",
      link: "#",
    },
    {
      pictureUrl: webScraperImage,
      title: "Web Scraper",
      subtitle: "Project",
      description: "A Python-based web scraping tool for data extraction.",
      link: "https://github.com/kodeklipper/webscraper",
    },
    {
      pictureUrl: todoAppImage,
      title: "Java ToDo App",
      subtitle: "Project",
      description: "A simple and efficient todo application built with Java.",
      link: "https://github.com/kodeklipper/todo-java-app",
    },
  ];

  return (
    <div>

      {/* Portfolio Projects Section */}
      <section className="portfolio-section padding-64 content container" id="portfolio">
        <h2 className="text-light-grey">Portfolio</h2>
        <hr style={{ width: '200px' }} className="opacity" />
        <div className="gallery">
          {projects.map((project, index) => (
            <Card
              key={index}
              pictureUrl={project.pictureUrl}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioWithCards;