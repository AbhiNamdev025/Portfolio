import React, { useState } from "react";
import { Link } from "react-router-dom";
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

        <button className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`${styles.navLinks} ${open ? styles.open : ""}`}
          onClick={closeMenu}
        >
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={styles.navLink}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navLink}>
              Contact
            </Link>
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
