"use client";

import React from "react";
import { useLanguageContext } from "./context/languageContext";

const ClientComp = () => {
  const theme = useLanguageContext();
  console.log({ theme });

  return <div></div>;
};

export default ClientComp;
