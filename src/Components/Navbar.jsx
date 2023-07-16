import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  const handleNavLinkClick = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className={`navbar-item ${activePage === "/" ? "" : ""}`}>
          <Link
            to="/"
            className={`navbar-link ${activePage === "/" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("/")}
          >
            About
          </Link>
        </li>

        <li
          className={`navbar-item ${activePage === "/resume" ? "" : ""}`}
        >
          <Link
            to="/resume"
            className={`navbar-link ${activePage === "/resume" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("/resume")}
          >
           Skills
          </Link>
        </li>

        <li
          className={`navbar-item ${
            activePage === "/portfolio" ? "" : ""
          }`}
        >
          <Link
            to="/portfolio"
            className={`navbar-link ${
              activePage === "/portfolio" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/portfolio")}
          >
            Portfolio
          </Link>
        </li>

        <li
          className="navbar-item"
        >
          <Link
            to="/contact"
            className={`navbar-link ${
              activePage === "/contact" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/contact")}
          >
            Contact
          </Link>
        </li>

        <li className={`navbar-item ${activePage === "/blog" ? "" : ""}`}>
          <a
            href="https://drive.google.com/file/d/1wmO1lwUudiUFYwB4FZasrXr6qKraE1Fz/view?usp=sharing" target="_blank"
            className={`navbar-link ${activePage === "/blog" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("/blog")}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
