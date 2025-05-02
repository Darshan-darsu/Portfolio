"use client";
import AnimatedParagraph from "@/app/ui-component/AnimatedParagraph";
import { motion } from "framer-motion";
const AboutMe: React.FC = () => {
  return (
    <motion.section
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 0.8,
        delay: 0.5,
      }}
      className="bg-background p-4"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="text-fontcolor  text-2xl font-extrabold"
      >
        About Me
      </motion.h1>
      <AnimatedParagraph
        paragraph="Hi, I'm Darshan K M, a passionate Full-Stack Developer with a strong
        focus on the MERN stack (MongoDB, Express.js, React, Node.js), Python,
        and cloud technologies like Azure. I specialize in building dynamic,
        scalable, and efficient web applications that deliver seamless user
        experiences."
      />
      <AnimatedParagraph
        paragraph=" With extensive experience in modern web development, I bring expertise
        in backend APIs, front-end interfaces, and database management, ensuring
        each project is both high-performing and user-centric. I am also skilled
        in implementing Continuous Integration (CI) and Continuous Deployment
        (CD) pipelines, ensuring rapid and efficient software delivery."
      />
      <AnimatedParagraph
        paragraph=" I am driven by a passion for innovation and always eager to learn and
        adapt to new technologies. My commitment is to consistently improve my
        skills and deliver exceptional results while embracing challenges and
        fostering collaboration."
      />

      <AnimatedParagraph
        paragraph="Excited about leveraging my skills in a dynamic team environment, I aim
        to contribute to projects that not only challenge me but also provide
        meaningful solutions for users."
      />
    </motion.section>
  );
};

export default AboutMe;
