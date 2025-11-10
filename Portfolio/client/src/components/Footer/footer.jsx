import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <a
            href="https://github.com/AbhiNamdev025"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhinamdev025"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/_nmdvabhi_"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <FaXTwitter />
          </a>
        </div>

        <p className={styles.copy}>
          © {year} <span className={styles.name}>Abhishek Namdev</span> — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
