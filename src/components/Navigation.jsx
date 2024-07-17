import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return (
        <nav>
        <ul>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Me</NavLink></li>
          <li><NavLink to="/works" className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink></li>
          <li><NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink></li>
        </ul>
      </nav>
    )
}
