import React from "react";
import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
const App = () => {
  return (
    <div>
      <Cursor />
      {/* Home Page */}
      <section id="Home">
        <Navbar />
        <Home />
      </section>
      {/* Parallax Page */}
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      {/* Skills Page */}
      <section>
        <Skills />
      </section>
      {/* Parallax Page */}
      {/* <section id="Projects">
        <Parallax type="projects" />
      </section> */}
      {/* Projects Page */}
      {/* <Project /> */}
      {/* Parallax Page */}
      {/* <section id="About">
        <Parallax type="about" />
      </section> */}
      {/* About Page */}
      {/* <section>
        <About />
      </section> */}
      {/* Contact Page */}
      {/* <section id="Contact">
        <Contact />
      </section> */}
    </div>
  );
};

export default App;
