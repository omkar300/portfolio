import React from 'react';
import './SoftSkills.css';

function SoftSkills() {
  return (
    <section className="softskills" id="softskills">
      <div className="softskills-container">
        <h2 className="softskills-title">Soft Skills</h2>
        <ul className="softskills-list">
          <li><span className="skill-bold">Problem Solving:</span> Ability to analyze and solve complex problems efficiently.</li>
          <li><span className="skill-bold">Communication:</span> Strong verbal and written communication skills, able to articulate ideas clearly.</li>
          <li><span className="skill-bold">Leadership:</span> Experience in leading teams, coordinating tasks, and motivating others.</li>
          <li><span className="skill-bold">Teamwork:</span> Ability to collaborate effectively within teams, fostering a productive work environment.</li>
          <li><span className="skill-bold">Time Management:</span> Skilled in prioritizing tasks and managing time effectively to meet deadlines.</li>
          <li><span className="skill-bold">Quick Learner:</span> Capable of rapidly acquiring new skills and knowledge, adapting to new technologies and environments.</li>
        </ul>
      </div>
    </section>
  );
}

export default SoftSkills;
