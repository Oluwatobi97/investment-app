import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CallToAction = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-gradient-to-l from-surface to-blue-50 py-12 border perspective-1000"
    >
      <motion.div
        className="max-w-4xl mx-auto sm:px-10 md:px-auto bg-gradient-to-t from-surface to-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(5deg) rotateY(5deg)",
        }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-primary text-3xl font-bold mb-4"
        >
          Ready to Start Your Crypto Journey?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-secondary mb-6">
          Join thousands of investors and grow your wealth with CryptoNest
          today!
        </motion.p>
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-surface px-6 py-3 rounded-lg font-bold hover:bg-secondary transition"
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default CallToAction;
