"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCookies } from "react-cookie";

type ContextType = {
  lang: string | null;
  setLang: Dispatch<SetStateAction<string>>;
};

export const LanguageContext = createContext<ContextType>({
  lang: null,
  setLang: () => {},
});

const LanguageContextProvider = ({
  children,
  langValue,
}: {
  children: React.ReactNode;
  langValue: string;
}) => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const [lang, setLang] = useState(() => {
    if (langValue === "en") {
      return "en";
    } else if (langValue === "geo") {
      return "geo";
    } else {
      setCookie("lang", "en", {
        path: "/",
      });
      return "en";
    }
  });

  useEffect(() => {
    if (!lang) return;
    setCookie("lang", lang, {
      path: "/",
    });
  }, [lang, setCookie]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;

export const useLanguageContext = () => useContext(LanguageContext);
