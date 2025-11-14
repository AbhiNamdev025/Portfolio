import React, { useState } from "react";
import styles from "./projectsSection.module.css";
import { projects } from "../ProjectData/projectData";
import ProjectCard from "../ProjectCard/projectCard";
import ProjectFilter from "../ProjectFilter/projectFilter";

const ProjectsSection = () => {
  const categories = ["All", "Full Stack", "Frontend"];
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((proj) => proj.category === active);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h2>
          My <span className={styles.highlight}>Projects</span>
        </h2>
        <p className={styles.subtext}>
          Explore my Full Stack apps, Frontend designs, and JavaScript projects
          built with creativity and precision.
        </p>

        <ProjectFilter
          categories={categories}
          active={active}
          setActive={setActive}
        />

        <div className={styles.grid}>
          {filtered.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
