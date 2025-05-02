import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  img: StaticImageData;
  title: string;
  description: string[];
  tags: string[];
}

const ProjectDetails: React.FC<ProjectProps> = ({
  img,
  title,
  description,
  tags,
}) => {
  return (
    <div className="bg-background opacity-90 border border-foreground  shadow-2xl rounded-3xl  transition p-4 flex flex-col items-center">
      <div className="w-[200px] h-[200px] relative mb-2">
        <Image src={img} alt={title} fill className="object-cover rounded-md" />
      </div>
      <h2 className="text-xl font-semibold text-lightcolor  mb-2">{title}</h2>
      <ul className="text-sm mb-4 list-disc list-inside space-y-1">
        {description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-background border-2 shadow-2xl text-lightcolor text-sm px-3 py-1 rounded-full "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
