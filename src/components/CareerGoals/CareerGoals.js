import React from 'react';
import './CareerGoals.css';

function CareerGoals() {
  return (
    <section className="careergoals" id="careergoals">
      <div className="careergoals-container">
        <h2 className="careergoals-title">Career Goals</h2>
        <div className="goal-section">
          <h3 className="goal-heading">Short-Term Goal:</h3>
          <p className="goal-text">
            To secure a position in a data-driven organization where I can apply and enhance my skills in data science,
            machine learning, and problem-solving. I aim to gain hands-on experience, work on real-world projects, and
            grow professionally in a collaborative environment.
          </p>
        </div>
        <div className="goal-section">
          <h3 className="goal-heading">Long-Term Goal:</h3>
          <p className="goal-text">
            To become a skilled AI Engineer, contributing to innovative solutions in the fields of artificial intelligence and
            computer vision. I aspire to lead impactful projects, stay at the forefront of AI advancements, and make meaningful
            contributions to society through technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CareerGoals;
