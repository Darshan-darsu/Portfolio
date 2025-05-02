import { Projects } from "./../../data/Project";
import ProjectDetails from "./ProjectDetails";
export default function Project() {
  return (
    <section id="projects" className="min-h-screen p-4">
      <h1 className="text-fontcolor  text-2xl mb-2 font-extrabold">
        Major Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Projects.map((proj) => (
          <ProjectDetails key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}
