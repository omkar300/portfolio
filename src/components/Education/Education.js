import React from 'react';
import './Education.css';

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>

        <table className="education-table">
          <thead>
            <tr>
              <th>Degree / Course</th>
              <th>Institution</th>
              <th>Year</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.E. in Computer Engineering</td>
              <td>AISSMS IOIT, Pune</td>
              <td>2022–2025</td>
              <td>CGPA: 8.2</td>
            </tr>
            <tr>
              <td>Diploma in Information Technology</td>
              <td>AISSMS Polytechnic, Pune</td>
              <td>2020–2022</td>
              <td>Percentage: 80%</td>
            </tr>
            <tr>
              <td>12th Science</td>
              <td>B.H. Chate Jr. College, Pune</td>
              <td>2018–2020</td>
              <td>Percentage: 72%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Education;
