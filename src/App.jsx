import "./app.scss"
import { motion } from "framer-motion";
import Me from "./components/me/Me";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Cursor from "./components/cursor/Cursor";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Purpose from "./components/purpose/Purpose";


const App = () => {
  return <div>

    <Cursor />

    <section id="Information">
      <Navbar />
      <Me />
    </section>

    <motion.section ><Parallax type="EaS" /></motion.section>

    <section id="Skills/Education"><Skills /></section>

    <section id="Experience"><Experience /></section>

    <section id="Projects"><Parallax type="projects" /></section>

    <Projects />

    <section id="Purpose"><Purpose/></section>

    <section id="Contact"><Contact /></section>


  </div>;
};

export default App;
