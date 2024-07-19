import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return (
        <nav>
        <ul>
          <li><NavLink to="/about" className="navLink">About Me</NavLink></li>
          <li><NavLink to="/works" className="navLink">Portfolio</NavLink></li>
          <li><NavLink to="/resume" className="navLink">Resume</NavLink></li>
        </ul>
      </nav>
    )
}
