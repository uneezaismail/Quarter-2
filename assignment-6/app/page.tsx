import About from "./components/about/page";
import Contact from "./components/contact/page";
import Hero from "./components/hero/page";
import Project from "./components/projects/page";
import Skill from "./components/skill/page";

export default function Home() {
  return (
   <div id="homeSection">
   
    <Hero/>
    <About/>
    <Project/>
    <Skill/>
    <Contact/>
   
   </div>
  );
}
