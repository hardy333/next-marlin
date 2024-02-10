"use client";
import { motion } from "framer-motion";

const HeroH1 = ({
  title,
  coloredWords,
}: {
  title: string;
  coloredWords: string;
}) => {
  console.log(title);

  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <span style={{ fontWeight: "300" }}>{title} </span>
      <span style={{ color: "var(--color-primary)" }}>{coloredWords}</span>
    </motion.h1>
  );
};

export default HeroH1;
