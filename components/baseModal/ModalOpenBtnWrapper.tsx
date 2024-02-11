"use client";
import { useFormModalContext } from "@/app/context/formModalContext";

type Props = {
  children: React.ReactNode;
};

const ModalOpenBtnWrapper = ({ children }: Props) => {
  const { isOpen, setIsOpen } = useFormModalContext();

  return (
    <span
      onClick={() => {
        console.log({ isOpen });
        setIsOpen(true);
      }}
    >
      {children}
    </span>
  );
};

export default ModalOpenBtnWrapper;
