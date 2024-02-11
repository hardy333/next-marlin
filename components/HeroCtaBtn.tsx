"use client";

import { ReactNode } from "react";

const HeroCtaBtn = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <button
        style={{ padding: "12px 60px", fontSize: "18px" }}
        className="btn"
      >
        <div className="bg"></div>
        {children}
      </button>
    </>
  );
};

export default HeroCtaBtn;
