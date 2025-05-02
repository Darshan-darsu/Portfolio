import AboutMe from "../aboutme/AboutMe";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
import ProjectDetails from "../project/Project";
import Contact from "../contact/Contact";
import Banner from "../banner";

const PortFolio: React.FC = () => {
  return (
    <section className="w-full md:w-[80%] bg-background p-4  md:mx-[10%] ">
      <Banner />
      <AboutMe />
      <Experience />
      <Skills />
      <ProjectDetails />
      <Contact />
    </section>
  );
};
export default PortFolio;
