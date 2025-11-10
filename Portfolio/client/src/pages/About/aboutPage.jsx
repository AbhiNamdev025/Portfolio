import React from "react";
import AboutIntro from "./components/AboutIntro/aboutIntro";
import SkillsSection from "./components/SkillsSection/skillsSection";
import EducationSection from "./components/EducationSection/educationSection";
import InterestsSection from "./components/InterestsSection/interestsSection";

const AboutPage = () => {
  return (
    <div>
      <AboutIntro />
      <SkillsSection />
      <EducationSection />
      <InterestsSection />
    </div>
  );
};

export default AboutPage;
