import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/homePage";
import ContactPage from "../pages/Contact/contactPage";
import AboutPage from "../pages/About/aboutPage";
import Projects from "../pages/Projects/projects";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
