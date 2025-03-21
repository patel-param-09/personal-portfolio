import React from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion"; // Import `useInView`
import { useRef } from "react"; // Import `useRef`

const skills = [
  { name: "HTML5", img: "/skills/html.png", level: "Expert" },
  { name: "CSS3", img: "/skills/css.png", level: "Expert" },
  { name: "Tailwind CSS", img: "/skills/tcss.png", level: "Expert" },
  { name: "Bootstrap", img: "/skills/bootstrap.png", level: "Expert" },
  { name: "JavaScript", img: "/skills/js.png", level: "Advanced" },
  { name: "React.js", img: "/skills/react.png", level: "Advanced" },
  { name: "Next.js", img: "/skills/nextjs.png", level: "Learning" },
  { name: "Node.js", img: "/skills/node.png", level: "Intermediate" },
  { name: "Express.js", img: "/skills/express.png", level: "Intermediate" },
  { name: "MySQL", img: "/skills/mysql.png", level: "Intermediate" },
  { name: "Prisma", img: "/skills/Prisma.png", level: "Intermediate" },
  { name: "Figma", img: "/skills/figma.png", level: "Intermediate" },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-1px" }); // Animation triggers when section comes into view

  return (
    <section className="skills" ref={ref}>
      <h1 className="heading">My Skills</h1>
      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation on scroll
      >
        {skills.map((skill, index) => (
          <motion.div key={index} className="skill-card" variants={item}>
            <img src={skill.img} alt={skill.name} className="skill-image" />
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
