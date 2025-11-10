import React from "react";
import styles from "./projectFilter.module.css";

const ProjectFilter = ({ categories, active, setActive }) => {
  return (
    <div className={styles.filter}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`${styles.btn} ${active === cat ? styles.active : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
