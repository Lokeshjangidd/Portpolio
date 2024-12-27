import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import TODO from './components/TODO.jsx'; // Assuming TODO is your component

export function Navbar () {
  return  <>
    <nav> 
      <h1>Lokesh</h1> 
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink> 
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </li>
      </ul>
    </nav>
    </>
};
