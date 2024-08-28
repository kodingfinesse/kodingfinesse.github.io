import React from 'react';
import '../style/About.css'; // Import any custom CSS styles

const About = () => {
  return (
    <div className="about-me-container">
      <section className="intro">
        <h1>About Me</h1>
        <p>
          Hi, I'm Darren Tran, a tech enthusiast with a strong foundation in business and technology. With a diverse professional background ranging from full-stack development to IT support and accounting, I bring a unique combination of technical aptitude and business acumen to the table. My mission is to leverage my experience and education to thrive in the tech industry and drive innovation.
        </p>
      </section>

      <section className="skills">
        <h2>Technical Skills & Expertise</h2>
        <ul>
          <li><strong>Server Administration:</strong> Linux & Windows Server</li>
          <li><strong>Web Development:</strong> MERN Stack (MySQL, Express, React, Node)</li>
          <li><strong>Cloud Computing:</strong> AWS Cloud & Docker Containers</li>
          <li><strong>Data Management:</strong> SQL & NoSQL Databases, Python Scripting</li>
          <li><strong>Networking:</strong> Computer Systems & Network Configuration</li>
          <li><strong>Tools:</strong> SharePoint, Salesforce, Microsoft Excel & Office 365</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Professional Experience</h2>
        <div className="job">
          <h3>Apprentice IT Support Tech</h3>
          <p><em>Dispatch Tech</em> (07/23 – 10/23)</p>
          <ul>
            <li>Performed Windows server administration, including user account management and server maintenance.</li>
            <li>Conducted on-site IT support, network cable installation, and router/switch configuration.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Full Stack Developer</h3>
          <p><em>Kenai's House</em> (11/22 – 02/23)</p>
          <ul>
            <li>Collaborated on building a production-ready website with reusable React components.</li>
            <li>Designed responsive web layouts for optimized user experiences.</li>
          </ul>
        </div>
        {/* Add more experience sections as needed */}
      </section>

      <section className="education">
        <h2>Education & Certifications</h2>
        <ul>
          <li><strong>Coding Temple:</strong> Web Development & Data Science</li>
          <li><strong>Duke University, Fuqua School of Business:</strong> Master of Management Studies</li>
          <li><strong>University of California, San Diego:</strong> Bachelor of Arts in Economics</li>
          <li><strong>Certifications:</strong> AWS Solutions Architect Associate (In Progress), CompTIA Network+ (In Progress), AWS Certified Cloud Practitioner, CompTIA A+</li>
        </ul>
      </section>

      <section className="personal-projects">
        <h2>Personal Projects & Achievements</h2>
        <p>
          I'm passionate about solving complex problems and building solutions that make a difference. I recently restored an old computer and turned it into a local web server with a custom domain. I've also built and deployed a MERN stack app on a third-party server, constantly pushing my boundaries to learn and grow.
        </p>
      </section>

      <section className="contact">
        <h2>Let's Connect!</h2>
        <p>
          I'm excited to join an organization that values innovation and growth. Feel free to reach out via <a href="mailto:darrenptran@gmail.com">email</a>, check out my <a href="https://kiddkoding.github.io/" target="_blank" rel="noopener noreferrer">portfolio</a>, or connect with me on <a href="https://www.linkedin.com/in/darrenptran" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </section>
    </div>
  );
};

export default About;
