import React from "react";
import { motion } from "framer-motion";

const WhyInvestwithUs = () => {
  return (
    <motion.section
      className="bg-primary mt-16 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="capitalize text-white text-3xl font-bold mb-10 text-center">
        why invest with us
      </h1>
      <div className="max-w-6xl mx-auto sm:px-10 md:px-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Secure Investments",
            description:
              "Your funds are safeguarded with top-tier encryption and multi-layered security.",
          },
          {
            title: "Guaranteed Returns",
            description:
              "Receive consistent and predictable ROI tailored to your investment plan.",
          },
          {
            title: "Diverse Plans",
            description:
              "Choose from various plans like Gold, Silver, and Bronze to suit your goals.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-surface p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, rotateY: -10, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <h3 className="text-accent text-2xl font-bold mb-2">
              {item.title}
            </h3>
            <p className="text-secondary">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyInvestwithUs;
