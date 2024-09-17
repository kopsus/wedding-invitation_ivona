import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../_global/Button";
import { FaDownload } from "react-icons/fa";
import EInvitation from "./EInvitation";
import { abhaya_libre, lato } from "@/utils/fonts";

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
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-5 rounded-lg h-screen overflow-y-auto max-w-[431px] mx-2 mt-5">
        <div
          onClick={closeModal}
          className="absolute top-0 right-0 cursor-pointer"
        >
          <MdOutlineCancel size={35} color="#000" />
        </div>
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
      </div>
    </div>
  );
};

export default ModalQr;
