import React, { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "motion/react";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background: `${
          type === "skills"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)"
        }`,
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "skills" ? "What Can I Do?" : ""}
        {type === "projects" ? "What Have I Built?" : ""}
        {type === "about" ? "What’s My Story?" : ""}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "skills" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
