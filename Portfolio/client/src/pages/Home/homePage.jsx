import React from "react";
import HeroSection from "./components/HeroSection/heroSection";
import ServicesSection from "./components/ServicesSection/servicesSection";
import ProjectsSection from "./components/ProjectsSection/projectsSection";
import ContactCta from "./components/ContactCta/contactCta";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactCta />
    </div>
  );
};

export default HomePage;
