import React from "react";
import styles from "./journeySection.module.css";

const JourneySection = () => {
  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Journey</h2>

        <div className={styles.content}>
          <p>
            I'm <strong>Abhishek Namdev</strong>, a MERN developer who has completed 
            his <strong>BCA</strong>. I've built several projects including mock
            websites for <strong>Chemist</strong>, <strong>Pet Adoption</strong>,
            <strong> Rydixo Taxi Platform</strong>, and <strong>Pizza Shop Platform</strong> 
            along with custom web pages throughout my learning journey.
          </p>

          <p>
            My passion for web development started with <strong>HTML/CSS</strong> and grew
            as I discovered <strong>JavaScript</strong> and its frameworks such as{" "}
            <strong>React, Node.js,</strong> and <strong>Express</strong>. 
            I love building visually appealing, responsive, and interactive digital experiences.
          </p>

          <div className={styles.tags}>
            <span>Self-Learner</span>
            <span>Problem Solver</span>
            <span>Creative Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
