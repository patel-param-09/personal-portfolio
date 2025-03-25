import React, { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px" }); // Triggers animation when in view

  return (
    <section className="about" ref={ref}>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Me</h1>
        <p>
          I’m <span>Param Patel</span>, a passionate Full Stack Developer and
          Web Designer with experience in building responsive, user-friendly web
          applications. I specialize in&nbsp;
          <strong>React.js, Node.js, and Tailwind CSS</strong>, creating
          seamless digital experiences.
        </p>
        <p>
          My projects, including an <strong> E-commerce App</strong>,
          a&nbsp;&nbsp;
          <strong>Movie Exploring Platform (FlixBridge)</strong>, and
          a&nbsp;&nbsp;
          <strong>Restaurant Website</strong>, showcase my ability to blend
          design with functionality.
        </p>

        <p>
          I’m always eager to learn and explore new technologies to improve user
          experience and performance.
        </p>
        <p>
          "I believe every great website is a blend of creativity and logic."
        </p>
      </motion.div>
      <motion.div
        className="about-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.8 }}
      >
        <img src="/Avtar.png" alt="Param Patel" />
      </motion.div>
    </section>
  );
};

export default About;
