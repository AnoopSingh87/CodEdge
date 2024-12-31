import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for active links
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Make sure to create this CSS file for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Detect scroll position and change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`custom-navbar position-fixed w-80 px-4 py-2 d-flex align-items-center justify-content-between ${scrolled ? "scrolled" : ""}`}
    >
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/src/assets/Logo.png" alt="CodEdge Logo" className="logo-img" />
      </div>

      {/* Navbar Links for Desktop */}
      <ul className="navbar-links d-none d-md-flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/internship"
            className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
          >
            Internship
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/verification"
            className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
          >
            Verification
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger-menu d-md-none" id="menu-btn-container" onClick={toggleMenu}>
        <div id="menu-btn">
          <label htmlFor="menu-checkbox" id="menu-label">
            <div id="menu-bar"></div>
          </label>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div className={`sidebar d-md-none ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/internship"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
            >
              Internship
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/verification"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
            >
              Verification
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
