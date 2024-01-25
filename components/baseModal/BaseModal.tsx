import "./modal.css";
import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from 'react-modal';

type Props = {
  modalIsOpen: boolean,
  closeModal: () => void,
  children: ReactNode
}


const BaseModal = ({ modalIsOpen, closeModal, children }: Props) => {

  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      className="base-modal"
      overlayClassName="base-modal-overlay"
      closeTimeoutMS={300}
      ariaHideApp={false}
    >
      <>
      <button
        onClick={() => closeModal()}
        className="close-modal-btn"
      >
        <IoMdClose fill="#1c1238aa" />
      </button>
        {children}
      </>
    </Modal>
);
};

export default BaseModal;
