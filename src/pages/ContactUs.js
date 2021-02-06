import React from "react";
// animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      inital="hidden"
      animate="show"
      style={{ backgroud: "#fff" }}
    >
      <h1>Our Contact</h1>
    </motion.div>
  );
};

export default ContactUs;
