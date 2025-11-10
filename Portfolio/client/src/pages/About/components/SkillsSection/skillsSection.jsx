import React from "react";
import styles from "./skillsSection.module.css";
import {
  FaReact,
  FaNodeJs,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFigma,
} from "react-icons/si";

const skills = [
  { icon: <FaReact className={styles.react} />, name: "React.js" },
  { icon: <FaNodeJs className={styles.node} />, name: "Node.js" },
  { icon: <SiExpress className={styles.express} />, name: "Express.js" },
  { icon: <SiMongodb className={styles.mongo} />, name: "MongoDB" },
  { icon: <SiJavascript className={styles.js} />, name: "JavaScript (ES6+)" },
  { icon: <SiHtml5 className={styles.html} />, name: "HTML5" },
  { icon: <SiCss3 className={styles.css} />, name: "CSS3 / Tailwind" },
  { icon: <SiFigma className={styles.figma} />, name: "Figma (Basic UI/UX)" },
  { icon: <FaTools className={styles.git} />, name: "Git & GitHub" },
  { icon: <FaLaptopCode className={styles.api} />, name: "RESTful APIs" },
];

const SkillsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h2>
          Technical <span className={styles.highlight}>Skills</span>
        </h2>
        <p className={styles.sectionDesc}>
          Technologies and tools I use to design, develop, and deploy web
          applications.
        </p>

        <div className={styles.skillsGrid}>
          {skills.map((skill, i) => (
            <div className={styles.skillCard} key={i}>
              <div className={styles.icon}>{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
