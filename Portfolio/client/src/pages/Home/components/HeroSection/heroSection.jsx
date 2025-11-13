import React from "react";
import styles from "./heroSection.module.css";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import image from "../../../../../public/assets/main.jpg";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* ===== Left Content ===== */}
        <div className={styles.content}>
          <h1>
            Hi, I’m <span className={styles.highlight}>Abhishek Namdev</span>
          </h1>
          <h2>MERN Stack Developer</h2>
          <p>
            I design and develop modern, fast, and responsive web applications
            using <strong>React, Node.js, Express</strong> and{" "}
            <strong>MongoDB</strong>.
          </p>

          <div className={styles.buttons}>
            <Link to="/projects" className={styles.btnPrimary}>
              View Projects <FaArrowRight />
            </Link>
            <Link to="/contact" className={styles.btnOutline}>
              Hire Me
            </Link>
          </div>

          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/abhinamdev025"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AbhiNamdev025"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/_nmdvabhi_"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/*image */}
        <div className={styles.imageWrap}>
          <img src={image} alt="Abhishek Namdev" />
          <p className={styles.caption}>
            “Turning Ideas into Interactive Web Experiences.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
