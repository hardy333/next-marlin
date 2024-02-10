"use client";

import { useLanguageContext } from "@/app/[lang]/context/languageContext";
import React from "react";
import { useRouter } from "next/navigation";

const LangSwitcher = () => {
  const { lang, setLang } = useLanguageContext();
  const router = useRouter();

  return (
    <div
      onClick={() => {
        setLang((currLang) => {
          if (currLang === "en") {
            return "geo";
          } else {
            return "en";
          }
        });

        // router.refresh();
        window.location.reload();
      }}
    >
      {lang}
    </div>
  );
};

export default LangSwitcher;
