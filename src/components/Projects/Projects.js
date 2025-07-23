import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        <div className="project-card">
          <h3 className="project-name">Blockchain-Based Charity App</h3>
          <p className="project-duration">Diploma Final Year Project | 2021–2022</p>
          <p className="project-description">
            Developed a decentralized charity platform using Ethereum smart contracts (Solidity) and Node.js backend to
            ensure secure and transparent donation management.
          </p>
          <span className="tech-used">Tech: Solidity, Node.js, Ethereum</span>
        </div>

        <div className="project-card">
          <h3 className="project-name">AI/ML-Based Traffic Control System</h3>
          <p className="project-duration">B.E. Final Year Project | 2024–2025</p>
          <p className="project-description">
            Built an intelligent traffic signal control system using YOLO object detection to optimize signal timings based on
            vehicle density.
          </p>
          <span className="tech-used">Tech: Python, OpenCV, YOLOv5</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
