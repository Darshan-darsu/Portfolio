import Image from "next/image";

interface SkillSectionProps {
  logo: string;
  name: string;
}

const SkillSection: React.FC<SkillSectionProps> = ({ logo, name }) => {
  return (
    <div className="p-2  items-center place-items-center">
      <Image src={logo} alt={name} className="w-10 h-10" />
      <span>{name}</span>
    </div>
  );
};

export default SkillSection;
