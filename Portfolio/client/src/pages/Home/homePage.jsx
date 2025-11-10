import React from "react";
import HeroSection from "./components/HeroSection/heroSection";
import ServicesSection from "./components/ServicesSection/servicesSection";
import ProjectsSection from "./components/ProjectsSection/projectsSection";
import ContactCta from "./components/ContactCta/contactCta";
import JourneySection from "./components/JourneySection/journeySection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <JourneySection/>
      <ServicesSection />
      <ProjectsSection />
      <ContactCta />
    </div>
  );
};

export default HomePage;
