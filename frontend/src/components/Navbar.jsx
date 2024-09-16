import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation if you are using react-router

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          <ion-icon name="barbell-sharp" aria-hidden="true" />
          <span className="span">TrackFit</span>
        </a>

        <nav className={`navbar ${isNavOpen ? 'open' : ''}`} data-navbar>
          <button
            className="nav-close-btn"
            aria-label="close menu"
            onClick={handleNavToggle}
          >
            <ion-icon name="close-sharp" aria-hidden="true" />
          </button>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link active">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="navbar-link">
                Features
              </a>
            </li>
            <li>
              <a href="#goals" className="navbar-link">
                Set Goals
              </a>
            </li>
            <li>
              <a href="#blog" className="navbar-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <Link to="/login" className="btn btn-secondary">
          Get Started
        </Link>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={handleNavToggle}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
