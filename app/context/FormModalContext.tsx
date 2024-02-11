"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const FormModalContext = createContext<ContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

const FormModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </FormModalContext.Provider>
  );
};

export default FormModalContextProvider;

export const useFormModalContext = () => useContext(FormModalContext);
