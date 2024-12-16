import React from "react";
import { motion } from "framer-motion";

const AboutUi = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-white to-background mb-10 py-12 mt-10"
      id="about-us"
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-4xl mx-auto sm:px-10 md:px-auto bg-surface p-8 rounded-lg border border-gradient-r-lg from-purple-400 to-red-400 shadow-lg"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-primary text-3xl font-bold mb-4">About Us</h2>
        <p className="text-secondary leading-relaxed">
          Welcome to CryptoNest, your trusted platform for crypto investments.
          Our mission is to provide secure, profitable, and seamless investment
          options for both beginners and seasoned traders. With us, investing in
          cryptocurrencies has never been easier or safer.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutUi;
