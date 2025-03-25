import React, { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    id: 1,
    name: "FlixBridge",
    description:
      "A movie streaming app where users can browse movies, add to favorites, and view details from IMDb.",
    techStack: ["React.js", "Node-Js", "Express-Js", "MySQL", "Prisma"],
    img: "/projects/mov.png",
    github: "https://github.com/patel-param-09/FlixBridge-Movies-App",
  },
  {
    id: 2,
    name: "E-commerce App",
    description:
      "An online shopping platform with user authentication, product browsing, cart functionality, and secure checkout.",
    techStack: ["React.js", "Tailwind CSS", "Redux"],
    img: "/projects/ecom.png",
    github: "https://github.com/patel-param-09/E-Commerce-App",
  },
  {
    id: 3,
    name: "Restaurant Page",
    description:
      "A responsive restaurant landing page showcasing menu items, contact details, and online ordering options.",
    techStack: ["React-Js", "Tailwind CSS"],
    img: "/projects/res.png",
    github: "https://github.com/patel-param-09/Restaurant-Website",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgConatiner" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.techStack.join(" | ")}</p>
            <button>
              <a href={item.github} target="_blank">
                Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
