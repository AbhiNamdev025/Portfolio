import React from "react";
import styles from "./servicesSection.module.css";
import { FaCode, FaServer, FaVideo } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Building clean, responsive, and modern UIs with React.js and Tailwind CSS.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Creating secure, scalable RESTful APIs using Node.js and Express with MongoDB.",
  },
  {
    icon: <FaVideo />,
    title: "Video Editing & Web Enthusiasm",
    desc: "Designing short-form content, editing visuals, and building engaging social media experiences.",
  },
];

const ServicesSection = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2>
          What <span className={styles.highlight}>I Do</span>
        </h2>

        <div className={styles.cards}>
          {services.map((item, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.icon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
