"use client";
import { motion } from "framer-motion";
import Button from "@/app/ui-component/Button";

export default function Banner() {
  return (
    <motion.main
      initial={{ y: -150, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 80, // Controls the "tightness" of the bounce
        damping: 12, // Reduces overshooting
        mass: 0.8, // Adjusts the weight of the animation
      }}
      className=" bg-background p-4"
      id="home"
    >
      <motion.section className="py-2">
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="text-bordercolor p-4 opacity-85"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="text-fontcolor p-4 text-6xl font-extrabold"
        >
          Darshan K M
        </motion.h1>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="text-fontcolor p-4 text-6xl opacity-85"
        >
          Crafting Digital Journeys
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          className="text-fontcolor p-4 opacity-85"
        >
          As a full-stack engineer, I specialize in crafting digital journeys
          that are not only functional but also engaging. My goal is to create
          web experiences that resonate with users and drive meaningful
          interactions.
        </motion.p>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.5,
          }}
        >
          <Button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get In Touch
          </Button>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
