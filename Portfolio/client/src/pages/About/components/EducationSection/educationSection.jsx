import React from "react";
import styles from "./educationSection.module.css";
import { FaUserGraduate, FaLaptopCode, FaTrophy } from "react-icons/fa";

const EducationSection = () => {
  return (
    <section className={styles.educationSection}>
      <div className={styles.container}>
        <h2>
          Education & <span className={styles.highlight}>Experience</span>
        </h2>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <FaUserGraduate className={styles.icon} />
            <div>
              <h4>Bachelor of Computer Applications (BCA)</h4>
              <p>Govt. College Naraingarh • 2022 - 2025</p>
              <p>
                Successfully completed the degree with an aggregate of{" "}
                <strong>70%</strong>.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <FaLaptopCode className={styles.icon} />
            <div>
              <h4>MERN Stack Developer — CodroidHub Pvt. Ltd.</h4>
              <p>Completed Training • 2025 | Ambala Cantt</p>
              <p>
                Completed intensive hands-on training in full-stack development,
                gaining expertise in{" "}
                <strong>React.js, Node.js, Express,</strong> and{" "}
                <strong>MongoDB</strong>. Worked on real-world projects that
                focus on responsive design, user experience, and API
                integration.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <FaTrophy className={styles.icon} />
            <div>
              <h4>Achievements & Projects</h4>
              <p>
                Designed and developed multiple modern web platforms, including{" "}
                <strong>Rydixo Taxi Booking Platform</strong>,{" "}
                <strong>Pet Shop Platform</strong>, and{" "}
                <strong>Pizza Shop Ordering Platform</strong>. These projects
                demonstrate proficiency in full-stack development, front-end
                optimization, and RESTful API implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
