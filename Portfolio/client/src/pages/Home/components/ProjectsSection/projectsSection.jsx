import React from "react";
import styles from "./projectsSection.module.css";
import { FaTaxi, FaPaw, FaPizzaSlice, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    icon: <FaTaxi />,
    title: "Rydixo Taxi Booking Platform",
    desc: "A feature-rich cab booking platform with live location tracking, driver-passenger modules, and a modern UI.",
    link: "/",
  },
  {
    icon: <FaPaw />,
    title: "Pet Shop Platform",
    desc: "An online pet store with product filtering, cart management, and order tracking for pet lovers.",
    link: "/",
  },
  {
    icon: <FaPizzaSlice />,
    title: "Pizza Ordering Platform",
    desc: "A responsive pizza ordering app with add-to-cart, live order updates, and simulated checkout flow.",
    link: "/",
  },
];

const ProjectsSection = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2>
          Featured <span className={styles.highlight}>Projects</span>
        </h2>

        <div className={styles.cards}>
          {projects.map((p, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.cardFront}>
                <div className={styles.icon}>{p.icon}</div>
                <h3>{p.title}</h3>
              </div>

              <div className={styles.cardBack}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveBtn}
                >
                  See Live <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
