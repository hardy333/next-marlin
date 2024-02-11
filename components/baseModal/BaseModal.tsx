"use client";

import { useFormModalContext } from "@/app/context/formModalContext";
import "./modal.css";
import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";

type Props = {
  children: ReactNode;
};

const BaseModal = ({ children }: Props) => {
  const { isOpen, setIsOpen } = useFormModalContext();

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setIsOpen(false)}
      className="base-modal"
      overlayClassName="base-modal-overlay"
      closeTimeoutMS={300}
      ariaHideApp={false}
    >
      <>
        <button onClick={() => setIsOpen(false)} className="close-modal-btn">
          <IoMdClose fill="#1c1238aa" />
        </button>
        {children}
      </>
    </Modal>
  );
};

export default BaseModal;
