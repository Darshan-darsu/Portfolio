import ChatbotImg from "@/app/assets/photos/chat-bot.jpg";
import FileQcImg from "@/app/assets/photos/file-qc.jpg";
import AppointmentImg from "@/app/assets/photos/appointment.jpg";

const Projects = [
  {
    img: ChatbotImg,
    title: "GenAI Chatbot with Azure OpenAI",
    description: [
      "Built a chatbot leveraging Azure OpenAI for advanced interactions.",
      "Contributed to indexing, chunking processes, and developing prompting mechanisms for efficient information retrieval.",
      "Developed APIs using Python and Azure Functions to enhance bot capabilities.  ",
      "Integrated the bot with Microsoft teams. ",
    ],
    tags: ["Azure", "OpenAI", "FastAPI", "Python", "MS Teams"],
  },
  {
    img: FileQcImg,
    title: "Multi-Tenant QC System",
    description: [
      " Worked independently as the UI developer for over a year, creating the frontend architecture from scratch using React.js and implementing Okta for secure authentication and user access control.",
      "Implemented Webpack Module Federation to build a micro frontend architecture for modular UI integration.",
      " Developed and maintained unit test cases with Jest, achieving high test coverage, and designed a custom feature for an existing NPM package.",
      " Streamlined deployments by setting up CI/CD pipelines in Azure DevOps, ensuring smooth and automated releases.",
    ],
    tags: [
      "React",
      "Webpack",
      "Azure DevOps",
      "Micro Frontend",
      "Okta",
      "CI/CD",
    ],
  },
  {
    img: AppointmentImg,
    title: "Medical Application",
    description: [
      "Developed a full-fledged appointment booking system with real-time slot management using ReactJS, Node.js, and PostgreSQL.",

      "Integrated Stripe for secure online payments, including subscription handling, invoice generation, and payment confirmation notifications.",

      "Enabled one-to-one chat functionality with Firebase Realtime Database, supporting bot-like automated responses for FAQs and real-time push notifications.",

      "Built a responsive, accessible UI using Material-UI and managed global state with Redux, ensuring a seamless user experience across devices.",
    ],
    tags: ["Stripe", "Postgresql", "React", "Node.js", "Firebase"],
  },
];

export { Projects };
