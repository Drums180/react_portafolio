import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS
import '../../styles/Resume.css'
import resume from '../../assets/Curriculum_David_Dominguez.pdf'; // make sure to adjust the path as per your file location

function Resume() {
  return (
    <div className="container mt-5">
      <h1>Resume</h1>
      <p>
        <strong>Proficiencies:</strong>
      </p>
      <ul>
        <li>Front-End Proficiencies: HTML, CSS, JavaScript, React.js, Bootstrap</li>
        <li>Back-End Proficiencies: Node.js, Express.js, SQL, MongoDB</li>
      </ul>
      <a href={resume} target="_blank" rel="noreferrer" className="resume-link">
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
