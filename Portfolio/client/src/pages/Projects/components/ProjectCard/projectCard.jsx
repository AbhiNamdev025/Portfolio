import React from "react";
import styles from "./projectCard.module.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <img src={project.image} alt={project.title} className={styles.image} />
        <h3 className={styles.frontTitle}>{project.title}</h3>
      </div>

      <div className={styles.back}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.stack}>
          {project.stack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>

        <div className={styles.buttons}>
          <a href={project.liveLink} target="_blank">
            <FaExternalLinkAlt /> Live
          </a>
          <a href={project.github} target="_blank">
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
