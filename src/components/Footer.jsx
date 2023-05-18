import React from 'react';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';
import twitterLogo from '../assets/twitter.png';
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer bg-dark text-white p-4 text-center">
      <a href="https://github.com/Drums180" className="text-white m-2" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub logo" className="rounded-circle" style={{width: '24px', height: '24px'}}/>
      </a>
      <a href="https://www.linkedin.com/in/david-dominguez-morales-74690623b/" className="text-white m-2" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn logo" className="rounded-circle" style={{width: '24px', height: '24px'}}/>
      </a>
      <a href="https://twitter.com/DavidDrums10" className="text-white m-2" target="_blank" rel="noopener noreferrer">
        <img src={twitterLogo} alt="Twitter logo" className="rounded-circle" style={{width: '24px', height: '24px'}}/>
      </a>
    </footer>
  );
}

export default Footer;

