import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>

        <div className="experience-entry">
          <div className="experience-header">
            <span className="position">Web Development Intern:</span>
            <span className="company-date">NoQs Digital | Jan 2024 – Feb 2024</span>
          </div>
          <ul className="experience-details">
            <li>Learned the basics of building, designing, and deploying web pages.</li>
            <li>Gained hands-on experience with HTML, CSS, and JavaScript.</li>
            <li>Designed simple user interfaces and practiced creating responsive layouts.</li>
            <li>Understood the process of deploying websites and maintaining basic frontend code.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
