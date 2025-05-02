import GitLogo from "../../assets/svg/github.svg";
import LinkedinLogo from "../../assets/svg/linkedin.svg";
import InstaLogo from "../../assets/svg/insta.svg";
import Image from "next/image";
import { constantData } from "@/app/constants";

const NavigationPanel = () => {
  return (
    <aside className="w-[10%] bg-background p-4 h-screen fixed left-0  flex flex-col items-center justify-between">
      <div className="relative flex flex-col items-center h-full top-40">
        <div className="absolute w-[2px] bg-bordercolor bottom-0 top-1/2"></div>
        <div className="flex flex-col items-center space-y-8">
          <a
            href={constantData.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GitLogo} alt="GitHub" className="py-2" />
          </a>
          <a
            href={constantData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedinLogo} alt="LinkedIn" className="py-2" />
          </a>
          <a
            href={constantData.insta}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={InstaLogo} alt="Instagram" className="py-2" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default NavigationPanel;
