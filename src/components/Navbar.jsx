import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">ADI PROPERTIES</Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/cities">Cities</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">
            <button className="login-btn">Login/Signup</button>
          </Link>
          <Link to="/contact">
            <button className="contact-btn">Contact</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;