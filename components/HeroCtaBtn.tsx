"use client";

import { MouseEvent, ReactNode, useState } from "react";
import BaseModal from "./baseModal/BaseModal";
import FormSection from "./formSection/FormSection";

const HeroCtaBtn = ({ children }: { children: ReactNode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("helo");
    setModalIsOpen(true)
  };

  return (
    <>
      <BaseModal
      
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      >
        <FormSection />
      </BaseModal>
      <button
        onClick={handleClick}
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
