import React from "react";
// page component
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
// animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      inital="hidden"
      animate="show"
    >
      <AboutSection />;
      <ServicesSection />;
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
