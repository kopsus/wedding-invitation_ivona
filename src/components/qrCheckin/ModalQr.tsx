import {
  abhaya_libre,
  lato,
  marcellus,
  montserrat_regular,
  playfair_display,
  roboto_light,
  roboto_regular,
} from "@/utils/fonts";
import Link from "next/link";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../_global/Button";
import { FaDownload } from "react-icons/fa";
import { useQRCode } from "next-qrcode";
import data from "@/utils/data";
import { formatDateTimeline } from "@/utils/formatDate";

interface IModalQr {
  closeModal: () => void;
  guestName: string;
}

const ModalQr = ({ closeModal, guestName }: IModalQr) => {
  const { Canvas } = useQRCode();
  const { dataMempelai } = data();

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
        <div className="my-5">
          <div className="bg-primary py-[30px] px-[5px] text-center flex flex-col gap-3">
            <p
              className={`${montserrat_regular.className} text-base text-white`}
            >
              The Wedding Of
            </p>
            <p
              className={`${marcellus.className} font-medium text-[28px] text-white`}
            >
              {dataMempelai.nama_panggilan_pria} &{" "}
              {dataMempelai.nama_panggilan_wanita}
            </p>
            <p className={`${montserrat_regular.className} text-sm text-white`}>
              {formatDateTimeline(dataMempelai.timeline)}
            </p>
          </div>
          <div className="bg-[#E6DED8]">
            <div className="pt-4 px-3">
              <div className="flex items-center">
                <div className="text-center flex-1">
                  <p className={`${roboto_light.className} text-black text-sm`}>
                    Dear:{" "}
                  </p>
                  <p
                    className={`${playfair_display.className} text-lg text-black`}
                  >
                    {guestName}
                  </p>
                </div>
                <div
                  className={`${
                    guestName === "Guest Name"
                      ? "h-44 w-44 flex-1 border border-primary"
                      : ""
                  }`}
                >
                  {guestName !== "Guest Name" && (
                    <Canvas
                      text={guestName}
                      options={{
                        errorCorrectionLevel: "M",
                        margin: 2,
                        scale: 4,
                        width: 170,
                      }}
                    />
                  )}
                </div>
              </div>
              <p
                className={`${roboto_light.className} text-black leading-6 px-3 my-5 text-center`}
              >
                Please show this QR Code to the officer at the event location.
                Scan QR Code is used to record attendance and exchange
                souvenirs.
              </p>
            </div>
            <hr className="border border-dashed border-black" />
            <div className="flex justify-center py-3">
              <Link
                href={"https://www.tibradigital.id"}
                className={`${roboto_regular.className} text-sm text-black text-center`}
              >
                www.tibradigital.id
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
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
