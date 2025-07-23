import React from 'react';
import './Publications.css';

function Publications() {
  return (
    <section className="publications" id="publications">
      <div className="publications-container">
        <h2 className="publications-title">Publications</h2>

        <div className="publication-entry">
          <div className="publication-header">
            <span className="publication-name">Blockchain-Based Charity App Project</span>
            <span className="publication-date">Jan 2022</span>
          </div>
          <p className="publication-journal">
            Published in IJRASET (International Journal for Research in Applied Science and Engineering Technology)
          </p>
          <p className="publication-description">
            Published a research paper highlighting the use of Ethereum smart contracts and Node.js backend to build a
            secure, transparent blockchain-based charity platform.
          </p>
        </div>

        <div className="publication-entry">
          <div className="publication-header">
            <span className="publication-name">Intelligent Traffic Light Control System Using YOLO</span>
            <span className="publication-date">Apr 2025</span>
          </div>
          <p className="publication-journal">
            Published in the 16th IEEE International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025), IIT Indore
          </p>
          <p className="publication-description">
            Published a research paper on an AI-based traffic signal system using YOLO object detection to manage traffic flow
            based on vehicle density, addressing challenges such as occlusion and real-world validation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Publications;
