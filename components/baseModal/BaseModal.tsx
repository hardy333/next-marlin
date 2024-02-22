"use client";

import { useFormModalContext } from "@/app/context/FormModalContext";
import "./modal.css";
import { ReactNode, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";

type Props = {
  children: ReactNode;
};

const BaseModal = ({ children }: Props) => {
  const { isOpen, setIsOpen } = useFormModalContext();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    // <Modal
    //   isOpen={isOpen}
    //   shouldCloseOnOverlayClick={true}
    //   onRequestClose={() => setIsOpen(false)}
    //   className="base-modal"
    //   overlayClassName="base-modal-overlay"
    //   closeTimeoutMS={300}
    //   ariaHideApp={false}
    //   preventScroll={true}
    // >
    <div className={`modal-overlay ${isOpen ? "" : "overlay-closed"}`}>
      <div className={`modal-content ${isOpen ? "" : "modal-closed"}`}>
        <>
          <button onClick={() => setIsOpen(false)} className="close-modal-btn">
            <IoMdClose fill="#1c1238aa" />
          </button>
          {children}
        </>
      </div>
    </div>

    // </Modal>
  );
};

export default BaseModal;
