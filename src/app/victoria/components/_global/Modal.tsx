import React, { ReactNode } from "react";
import { MdOutlineCancel } from "react-icons/md";

interface IModal {
  closeModal: () => void;
  children: ReactNode;
}

const Modal = ({ closeModal, children }: IModal) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-5 rounded-lg h-screen overflow-y-auto max-w-md mx-2 mt-5">
        <div
          onClick={closeModal}
          className="sticky top-0 flex justify-end cursor-pointer z-50"
        >
          <MdOutlineCancel size={35} color="#000" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
