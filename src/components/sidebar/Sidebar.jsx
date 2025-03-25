import React, { useState } from "react";
import "./sideBar.scss";
import { motion } from "motion/react";
import Link from "./links/Link";
import ToggleButtons from "./togglebuttons/ToggleButtons";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Link />
      </motion.div>
      <ToggleButtons setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
