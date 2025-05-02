import {
  BackEndSkills,
  FrontEndSkills,
  DatabaseSkills,
  OPSSkills,
} from "@/app/data/Skills";
import SkillSection from "@/app/ui-component/SkillSection";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-background  p-4">
      <h1 className="text-fontcolor  text-2xl font-extrabold">Skills</h1>
      <h1 className="text-fontcolor  text-1xl font-semibold">Front End</h1>
      <div className="grid grid-cols-4 gap-x-2  gap-y-4 p-4">
        {FrontEndSkills.map((item) => (
          <SkillSection key={item.name} logo={item.logo} name={item.name} />
        ))}
      </div>
      <h1 className="text-fontcolor  text-1xl font-semibold">Back End</h1>
      <div className="grid grid-cols-4 gap-x-2  gap-y-4 p-4">
        {BackEndSkills.map((item) => (
          <SkillSection key={item.name} logo={item.logo} name={item.name} />
        ))}
      </div>
      <h1 className="text-fontcolor  text-1xl font-semibold">Database</h1>
      <div className="grid grid-cols-4 gap-x-2  gap-y-4 p-4">
        {DatabaseSkills.map((item) => (
          <SkillSection key={item.name} logo={item.logo} name={item.name} />
        ))}
      </div>
      <h1 className="text-fontcolor  text-1xl font-semibold">Ops</h1>
      <div className="grid grid-cols-4 gap-x-2  gap-y-4 p-4">
        {OPSSkills.map((item) => (
          <SkillSection key={item.name} logo={item.logo} name={item.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
