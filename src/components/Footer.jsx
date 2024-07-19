import React from 'react';
import githubIcon from '../assets/images/github-icon.png';
import linkedinIcon from '../assets/images/linkedin-icon.png';

const Footer = () => (
  <footer className="footer">
    <hr/>
    <a href="https://github.com/rapostoljr" target="_blank" rel="noopener noreferrer" className="icon">
      <img src={githubIcon} alt="GitHub" className="icon-image" />
    </a>
    <a href="https://www.linkedin.com/in/romulo-apostol-7886041b3/" target="_blank" rel="noopener noreferrer" className="icon">
      <img src={linkedinIcon} alt="LinkedIn" className="icon-image" />
    </a>
    <hr/>© 2024 Romulo Apostol Jr., LLC All Rights Reserved.
  </footer>
);

export default Footer;