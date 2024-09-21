import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for internal navigation if you are using react-router

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="#" className="logo">
          <ion-icon name="barbell-sharp" aria-hidden="true" />
          <span className="span">TrackFit</span>
        </Link>

        <nav className={`navbar ${isNavOpen ? "open" : ""}`} data-navbar>
          <button
            className="nav-close-btn"
            aria-label="close menu"
            onClick={handleNavToggle}
          >
            <ion-icon name="close-sharp" aria-hidden="true" />
          </button>
          <ul className="navbar-list">
            <li>
              <Link to="#home" className="navbar-link active">
                Home
              </Link>
            </li>
            <li>
              <Link to="#features" className="navbar-link">
                Features
              </Link>
            </li>
            <li>
              <Link to="#goals" className="navbar-link">
                Set Goals
              </Link>
            </li>
            <li>
              <Link to="#blog" className="navbar-link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#contact" className="navbar-link">
                Contact
              </Link>
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
