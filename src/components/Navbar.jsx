import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Simbli AI
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/#features" className="nav-links" onClick={closeMenu}>Features</a>
          </li>
          <li className="nav-item">
            <a href="/#agents" className="nav-links" onClick={closeMenu}>Agents</a>
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" className="nav-links" onClick={closeMenu}>About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/faq" className="nav-links" onClick={closeMenu}>FAQ</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact-us" className="nav-links" onClick={closeMenu}>Contact</NavLink>
          </li>
          <li className="nav-btn">
             <a href="/#contact-us" className="btn btn-primary" onClick={closeMenu}>Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;