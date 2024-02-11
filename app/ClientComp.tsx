"use client";

import React from "react";
import { useLanguageContext } from "./context/languageContext";

const ClientComp = () => {
  const theme = useLanguageContext();

  return <div></div>;
};

export default ClientComp;
