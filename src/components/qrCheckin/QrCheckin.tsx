"use client";

import React, { useState } from "react";
import bgImg from "@/../public/images/pink-forest2.jpg";
import Link from "next/link";
import Button from "../_global/Button";
import { FaInstagram, FaQrcode } from "react-icons/fa";
import { marcellus, montserrat_regular } from "@/utils/fonts";
import ModalQr from "./ModalQr";

const QrCheckin = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative min-h-screen w-full py-[75px] px-5 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover md:bg-contain bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      ></div>
      <div className="relative z-10 flex flex-col gap-10">
        <div className="bg-whiteSmooke rounded-[20px] border-8 border-primary py-[50px] px-5 flex flex-col items-center gap-5 text-center">
          <p
            className={`${marcellus.className} text-[33px] leading-6 text-black`}
          >
            Instagram Filter
          </p>
          <p
            className={`${montserrat_regular.className} text-sm text-black leading-7`}
          >
            Your presence is a present in itself. But if you do wish to give us
            something else, please tap the button down below for further
            information:
          </p>
          <Link href={"https://www.instagram.com/"} target="_blank">
            <Button
              className="bg-primary text-white hover:scale-110 transition-all"
              iconLeft={<FaInstagram color="#fff" size={16} />}
            >
              Wedding Filter
            </Button>
          </Link>
        </div>
        <div className="bg-whiteSmooke rounded-[20px] border-8 border-primary py-[50px] px-5 flex flex-col items-center gap-5 text-center">
          <p
            className={`${marcellus.className} text-[33px] leading-6 text-black`}
          >
            Qr Chechk in
          </p>
          <p
            className={`${montserrat_regular.className} text-sm text-black leading-7`}
          >
            Your presence is a present in itself. But if you do wish to give us
            something else, please tap the button down below for further
            information:
          </p>
          <Button
            className="bg-primary text-white hover:scale-110 transition-all"
            iconLeft={<FaQrcode color="#fff" size={16} />}
            onClick={() => setOpenModal(true)}
          >
            Download QR
          </Button>
        </div>
      </div>
      {openModal && <ModalQr closeModal={() => setOpenModal(false)} />}
    </div>
  );
};

export default QrCheckin;
