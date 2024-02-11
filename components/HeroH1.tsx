"use client";
import { motion } from "framer-motion";

const HeroH1 = ({
  title,
  coloredWords,
}: {
  title: string;
  coloredWords: string;
}) => {
  return (
    <h1>
      <span style={{ fontWeight: "300" }}>{title} </span>
      <span style={{ color: "var(--color-primary)" }}>{coloredWords}</span>
    </h1>
  );
};

export default HeroH1;
