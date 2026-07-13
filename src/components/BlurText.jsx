import React from 'react';
import { motion } from 'framer-motion';

const BlurText = ({ words, className = '', delay = 0 }) => {
  const wordList = words.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { filter: 'blur(12px)', opacity: 0, y: 15 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {wordList.map((word, index) => (
        <span key={index} className="inline-block mr-[0.25em] whitespace-nowrap">
          <motion.span
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default BlurText;
