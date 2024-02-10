"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ContextType = {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
};

export const LanguageContext = createContext<ContextType>({
  lang: "en",
  setLang: () => {},
});

const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;

export const useLanguageContext = () => useContext(LanguageContext);
