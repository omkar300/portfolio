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
          <p className="experience-summary">
            Learned to design, develop, and deploy responsive web pages using HTML, CSS, and JavaScript. 
            Gained practical experience in frontend development and basic website deployment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
