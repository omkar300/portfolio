import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        {/* Project 1 */}
        <div className="project-card">
          <h3 className="project-name">Blockchain-Based Charity App</h3>
          <p className="project-duration">Diploma Final Year Project | 2021–2022</p>
          <p className="project-description">
            Developed a decentralized charity platform using Ethereum smart contracts (Solidity), a Node.js backend, and a React.js-based frontend to ensure secure and transparent donation management.
          </p>
          <span className="tech-used">Tech: Solidity, Node.js, React.js, Ethereum</span>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3 className="project-name">AI/ML-Based Traffic Control System</h3>
          <p className="project-duration">B.E. Final Year Project | 2024–2025</p>
          <p className="project-description">
            Built an intelligent traffic signal control system using YOLO object detection to optimize signal timings based on vehicle density.
          </p>
          <span className="tech-used">Tech: Python, OpenCV, YOLOv5</span>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3 className="project-name">Personal Portfolio Website</h3>
          <p className="project-duration">Frontend Project | 2025</p>
          <p className="project-description">
            Designed and developed a responsive portfolio website using React.js to showcase projects, skills, and contact details.
            View Live: <a href="https://omkar300.github.io/portfolio/" target="_blank" rel="noopener noreferrer">omkar300.github.io/portfolio</a>
          </p>
          <span className="tech-used">Tech: React.js, HTML, CSS, JavaScript</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
