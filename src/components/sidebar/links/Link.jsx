import React from "react";
import { motion } from "motion/react";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Link = ({ setOpen }) => {
  const items = ["Home", "Skills", "Projects", "About", "Contact"];
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => {
        return (
          <motion.a
            href={`#${item}`}
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
          >
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Link;
