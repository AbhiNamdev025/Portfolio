import React from "react";
import styles from "./contactCta.module.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const ContactCta = () => {
  return (
    <section className={styles.contactCta}>
      <div className={styles.container}>
        <h2>
          Let’s <span className={styles.highlight}>Work Together</span>
        </h2>
        <p>
          Have a project in mind or want to collaborate? Let’s connect and bring
          your ideas to life.
        </p>

        <div className={styles.buttons}>
          <Link to="/contact" className={styles.btnPrimary}>
            Contact Me
          </Link>

          <a
            href="https://www.linkedin.com/in/abhinamdev025"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnLinkedin}
          >
            <FaLinkedin />
            View My LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
