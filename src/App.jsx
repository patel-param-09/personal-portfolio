import React from "react";
import "./app.scss";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <section id="Home">
        <NavBar />
      </section>
      <section id="Skills">Parallax</section>
      <section>Skills</section>
      <section id="Projects">Parallax</section>
      <section>Projects</section>
      <section id="About">Parallax</section>
      <section>About</section>
      <section id="Contact">Parallax</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
