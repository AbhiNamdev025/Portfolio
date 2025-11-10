import React from "react";
import styles from "./resumeSection.module.css";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import resumePreview from "../../../../../public/assets/CV.jpg";

const ResumeSection = () => {
  return (
    <section className={styles.resumeSection}>
      <div className={styles.container}>
        {/* left */}
        <div className={styles.imageWrap}>
          <a
            href="/resume/Abhi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={resumePreview}
              alt="Resume Preview"
              className={styles.resumeImg}
            />
          </a>
        </div>
        {/* Right */}
        <div className={styles.textWrap}>
          <h2>
            My <span className={styles.highlight}>Resume</span>
          </h2>
          <p>
            Here’s a detailed overview of my education, training, and
            professional journey as a <strong>MERN Stack Developer</strong>. You
            can view or download my complete resume below.
          </p>

          <div className={styles.actions}>
            <a
              href="/resume/Abhi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewBtn}
            >
              View Resume
            </a>
            <a
              href="/resume/Abhi_CV.pdf"
              download="AbhishekNamdev-Resume.pdf"
              className={styles.downloadBtn}
            >
              <FaDownload /> Download
            </a>
          </div>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <FaFilePdf /> <span>Format:</span> PDF
            </div>
            <div className={styles.detailItem}>
              <FaDownload /> <span>Last Updated:</span> Nov 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
