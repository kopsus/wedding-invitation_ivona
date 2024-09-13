"use client";

import React, { useState } from "react";
import bgImg from "@/../public/images/pink-forest2.jpg";
import Button from "../_global/Button";
import { FaGift, FaVideo } from "react-icons/fa";
import { marcellus, montserrat_regular } from "@/utils/fonts";
import ModalGift from "./ModalGift";
import Link from "next/link";

const Gift = () => {
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
            Wedding Gift
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
            iconLeft={<FaGift color="#fff" size={24} />}
            onClick={() => setOpenModal(true)}
          >
            Wedding Gift
          </Button>
        </div>
        <div className="bg-whiteSmooke rounded-[20px] border-8 border-primary py-[50px] px-5 flex flex-col items-center gap-5 text-center">
          <p
            className={`${marcellus.className} text-[33px] leading-6 text-black`}
          >
            Live Streaming
          </p>
          <p
            className={`${montserrat_regular.className} text-sm text-black leading-7`}
          >
            Your presence is a present in itself. But if you do wish to give us
            something else, please tap the button down below for further
            information:
          </p>
          <Link href={"/https://www.instagram.com/"} target="_blank">
            <Button
              className="bg-primary text-white hover:scale-110 transition-all"
              iconLeft={<FaVideo color="#fff" size={24} />}
            >
              Live Streaming
            </Button>
          </Link>
        </div>
      </div>
      {openModal && <ModalGift closeModal={() => setOpenModal(false)} />}
    </div>
  );
};

export default Gift;
