import GitLogo from "../../assets/svg/github.svg";
import LinkedinLogo from "../../assets/svg/linkedin.svg";
import InstaLogo from "../../assets/svg/insta.svg";
import Image from "next/image";
import { constantData } from "@/app/constants";

const Footer = () => {
  return (
    <footer className="md:hidden bg-background p-4 flex justify-center space-x-6">
      <a href={constantData.github} target="_blank" rel="noopener noreferrer">
        <Image src={GitLogo} alt="GitHub" className="w-6 h-6" />
      </a>
      <a href={constantData.linkedin} target="_blank" rel="noopener noreferrer">
        <Image src={LinkedinLogo} alt="LinkedIn" className="w-6 h-6" />
      </a>
      <a href={constantData.insta} target="_blank" rel="noopener noreferrer">
        <Image src={InstaLogo} alt="Instagram" className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default Footer;
