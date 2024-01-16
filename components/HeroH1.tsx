"use client";

import WordLineDecorationSvg from "@/svgs/WordLineDecorationSvg";
import { motion } from "framer-motion";

const HeroH1 = ({title}:{title: string}) => {
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <span className="hero-decorated-word" style={{ paddingLeft: "0px" }}>
        <WordLineDecorationSvg className="hero-decorated-word-svg" />
        {/* Simplifying and cheapening */}
        {title.split(" ").slice(0,4).join(" ")}
      </span>
      <br /> 
      {title.split(" ").slice(4,6).join(" ")}
      {/* communications between */}
      <br />
      <span style={{ color: "var(--color-primary)" }}>
        retailers and their vendors
      </span>
    </motion.h1>
  );
};

export default HeroH1;
