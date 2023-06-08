import React from "react";
import { useGlobalContext } from "../../context";
import { FaTimes } from "react-icons/fa";
import "./modal.scss";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <section className="modal-container">
        <button className="close-modal" onClick={closeModal}>
          <FaTimes className="icon" />
        </button>
        <h3>Modal Content</h3>
      </section>
    </div>
  );
};

export default Modal;
