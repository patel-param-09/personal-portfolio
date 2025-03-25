import React from "react";
import "./home.scss";
import { motion } from "motion/react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 25,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Home = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>PARAM PATEL</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer & Web Designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Projects">
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollBtn"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        animate="animate"
        initial="initial"
        variants={sliderVariants}
      >
        Driven by code, inspired by creativity.
      </motion.div>
      <div className="imageContainer">
        <img src="/Avtar.png" alt="" className="avtar-img" />
      </div>
    </div>
  );
};

export default Home;
