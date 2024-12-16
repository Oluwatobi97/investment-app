import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BenefitsOfUsingFredralInves = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-gradient-to-br from-white to-background mb-16 py-12 mt-10 perspective-1000"
    >
      <motion.div
        className="bg-gradient-to-br sm:px-10 md:px-auto from-background to-white mx-auto p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(5deg) rotateY(5deg)",
        }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-primary text-3xl font-bold mb-4"
        >
          Benefits of Using CryptoNest
        </motion.h2>
        <motion.ul
          variants={containerVariants}
          className="list-disc pl-6 text-secondary space-y-2"
        >
          {[
            "Access to multiple cryptocurrencies like BTC, ETH, and USDT.",
            "Tailored investment durations and ROI plans.",
            "Transparent processes with real-time tracking of investments.",
            "24/7 customer support for all your needs.",
            "Beginner-friendly interface with easy navigation.",
          ].map((benefit, index) => (
            <motion.li key={index} variants={itemVariants}>
              {benefit}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default BenefitsOfUsingFredralInves;
