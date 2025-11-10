import React from "react";
import AboutIntro from "./components/AboutIntro/aboutIntro";
import SkillsSection from "./components/SkillsSection/skillsSection";
import EducationSection from "./components/EducationSection/educationSection";
import InterestsSection from "./components/InterestsSection/interestsSection";
import ResumeSection from "./components/ResumeSection/resumeSection";

const AboutPage = () => {
  return (
    <div>
      <AboutIntro />
      <SkillsSection />
      <EducationSection />
      <InterestsSection />
      <ResumeSection/>
    </div>
  );
};

export default AboutPage;
