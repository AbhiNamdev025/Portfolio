import React from "react";
import styles from "./interestsSection.module.css";
import { FaCode, FaGlobe, FaBook, FaVideo } from "react-icons/fa";

const InterestsSection = () => {
  const interests = [
    { icon: <FaCode />, title: "Coding" },
    { icon: <FaBook />, title: "Learning New Tech" },
    { icon: <FaGlobe />, title: "Exploring Web Tools" },
    { icon: <FaVideo />, title: "Video Editing & Web Enthusiasm" },
  ];

  return (
    <section className={styles.interestSection}>
      <div className={styles.container}>
        <h2>
          My <span className={styles.highlight}>Interests</span>
        </h2>
        <p>
          Beyond development, I enjoy exploring creative tech fields and
          improving my skills in areas that blend design and technology.
        </p>

        <div className={styles.interestsGrid}>
          {interests.map((item, i) => (
            <div key={i} className={styles.interestCard}>
              <div className={styles.icon}>{item.icon}</div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
