import React, { useState } from "react";
import bgImg from "../../assets/cover.webp";
import { FaInstagram, FaQrcode } from "react-icons/fa";
import ModalQr from "./ModalQr";
import CardVictoria from "../_global/CardVictoria";
import Image from "next/image";
import couple from "@/../public/images/groom&bride2.jpg";

interface IQrCheckin {
  guestName: string;
}

const QrCheckin = ({ guestName }: IQrCheckin) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div>
        <Image src={couple} alt="" width={0} height={0} sizes="100vw" />
      </div>
      <div className="relative min-h-screen w-full py-[75px] px-5 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        ></div>
        <div className="relative z-10 flex flex-col gap-10">
          <CardVictoria
            title="WEDDING FILTER"
            desc="Let’s help us capture this special moment by using the Instagram filters we have provided for posts on Instagram Stories by clicking the button below."
            textButton="wedding filter"
            iconButton={<FaInstagram />}
            onClick={() =>
              window.open(
                "https://www.instagram.com/ar/1299570917386891/",
                "_blank"
              )
            }
          />
          <CardVictoria
            title="QR CHECK-IN"
            desc="Show the QR code for checking in to the location for the officer to scan it because the data is integrated with the digital guestbook system. Click the following button to download the QR code."
            textButton="Download Qr"
            iconButton={<FaQrcode />}
            onClick={() => setOpenModal(true)}
          />
        </div>
        {openModal && (
          <ModalQr
            closeModal={() => setOpenModal(false)}
            guestName={guestName}
          />
        )}
      </div>
    </>
  );
};

export default QrCheckin;
