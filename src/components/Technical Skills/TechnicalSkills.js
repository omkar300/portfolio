import React from 'react';
import './TechnicalSkills.css';

function TechnicalSkills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <ul className="skills-list">
          <li><span className="skill-bold">Programming Languages:</span> Python, SQL, C, C++, Java</li>
          <li><span className="skill-bold">Data Analysis & Visualization:</span> Pandas, NumPy, Matplotlib, Seaborn, Plotly</li>
          <li><span className="skill-bold">Machine Learning:</span> Knowledge of data preparation and model building</li>
          <li><span className="skill-bold">Databases:</span> MySQL, MongoDB, SQLite, data modeling, querying, and management</li>
          <li><span className="skill-bold">Tools & Platforms:</span> Jupyter Notebook, Google Colab, VS Code, Git, GitHub</li>
          <li><span className="skill-bold">Web Technologies:</span> HTML, CSS, JavaScript, Node.js (used in blockchain project)</li>
          <li><span className="skill-bold">Operating Systems:</span> Windows, Linux (Ubuntu), command-line tools</li>
          <li><span className="skill-bold">Concepts:</span> Supervised/Unsupervised Learning, Data Preprocessing, Feature Engineering, Model Deployment</li>
        </ul>
      </div>
    </section>
  );
}

export default TechnicalSkills;
