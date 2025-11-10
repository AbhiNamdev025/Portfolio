import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.navWrap}>
      <nav className={styles.navContainer}>
        <Link className={styles.brand} to="/" onClick={closeMenu}>
          <span className={styles.accentBlue}>M</span>y
          <span className={styles.accentPurple}>P</span>ortfolio
        </Link>

        <button
          className={`${styles.hamburger} ${open ? styles.activeHam : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`${styles.navLinks} ${open ? styles.open : ""}`}
          onClick={closeMenu}
        >
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.active}`
                  : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.active}`
                  : styles.navLink
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.active}`
                  : styles.navLink
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.active}`
                  : styles.navLink
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <Link className={styles.hireBtn} to="/contact" onClick={closeMenu}>
          Hire Me
        </Link>
      </nav>
    </header>
  );
};

export default Header;
