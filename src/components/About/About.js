import React from 'react';
import './About.css';

function About() {
  return (
    <section
      className="about"
      id="about"
      style={{
        backgroundImage: "url('/portfolio/Data-Science.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            A motivated Computer Engineering graduate from AISSMS IOIT with a strong interest in Data Science, Machine Learning, and Artificial Intelligence.
          </p>
          <p className="about-description">
            Proficient in Python, SQL, and core data analysis techniques. Skilled in data visualization and model building using Pandas, Seaborn, and Matplotlib.
          </p>
          <p className="about-description">
            Eager to contribute analytical thinking and technical skills to solve real-world problems in a data-driven organization.
          </p>
        </div>

        <div className="about-right">
          <img src="/portfolio/myimage.png" alt="Omkar Naiknavare" className="about-image" />
          <h3 className="about-name">Omkar Naiknavare</h3>
        </div>
      </div>
    </section>
  );
}

export default About;
