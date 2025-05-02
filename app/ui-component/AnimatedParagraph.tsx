"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedPProps {
  paragraph: string;
}

const AnimatedParagraph = ({ paragraph }: AnimatedPProps) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [isInView, controls]);

  return (
    <motion.p
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={controls}
      transition={{ duration: 2, ease: "easeOut" }}
      className="text-fontcolor py-2"
    >
      {paragraph}
    </motion.p>
  );
};

export default AnimatedParagraph;
