import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../../assets/profile.png';

function About() {
  return (
    <div className="container mt-5">
      <h1 className="mb-3">About Me</h1>
      <div className="row">
        <div className="col-lg-2">
          <div className="bg-image rounded-circle" style={{backgroundImage: `url(${profilePic})`, height: "200px", width: "200px", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        </div>
        <div className="col-lg-10">
          <p>
            I'm a fourth semester student in Business Intelligence, with advanced skills in Excel and in the process of completing my studies in Full Stack Web Development. 
          </p>
          <p>
            I'm also the founder of my own company, GRUPO KAYIM SA de CV, and its main brand Bariatric Plus, which seeks to improve human health.
          </p>
          <p>
            I'm committed to further developing my skills and knowledge in technology and business to create innovative solutions and help companies reach their goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
