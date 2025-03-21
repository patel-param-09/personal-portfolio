import React from "react";
import "./app.scss";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Parallax from "./components/Parallax/Parallax";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";

const App = () => {
  return (
    <div>
      {/* Home Page */}
      <section id="Home">
        <NavBar />
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
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      {/* Projects Page */}
      <Project />
      {/* Parallax Page */}
      <section id="About">
        <Parallax type="about" />
      </section>
      {/* About Page */}
      <section>About</section>
      {/* Parallax Page */}
      <section id="Contact">Parallax</section>
      {/* Contact Page */}
      <section>Contact</section>
    </div>
  );
};

export default App;
