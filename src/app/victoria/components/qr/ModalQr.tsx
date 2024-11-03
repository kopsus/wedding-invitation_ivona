import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import Button from "../../../../components/Button";
import { FaDownload } from "react-icons/fa";
import EInvitation from "./EInvitation";
import { abhaya_libre, lato } from "@/utils/fonts";
import Modal from "../_global/Modal";

interface IModalQr {
  closeModal: () => void;
  guestName: string;
}

const ModalQr = ({ closeModal, guestName }: IModalQr) => {
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${guestName} E-Invitation`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [guestName]);

  return (
    <Modal closeModal={closeModal}>
      <div className="text-center">
        <p className={`${abhaya_libre.className} text-[25px]`}>
          QR E-Invitation
        </p>
        <p className={`${lato.className} text-sm leading-5`}>
          Please screenshot or download the QR code below as an entry pass at
          the event location.
        </p>
      </div>
      <div ref={ref}>
        <EInvitation guestName={guestName} />
      </div>
      <div className="flex justify-center">
        <Button
          onClick={onButtonClick}
          iconLeft={<FaDownload size={20} color="#fff" />}
          className="bg-black rounded-none text-white"
        >
          Download E-Invitation
        </Button>
      </div>
    </Modal>
  );
};

export default ModalQr;
