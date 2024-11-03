import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import bgImg from "../assets/ASSET-GOLD-WHITE-5.webp";
import { dataMempelai } from "../libs/data";
import { crimsonProNormal } from "../libs/fonts";
import NameFrame from "./_global/NameFrame";
import TextGolden from "./_global/TextGolden";
import Link from "next/link";
import { poppins, roboto_regular } from "@/utils/fonts";
import { IoMdBasketball } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="relative bg-[#EDE6D5] pt-[175px] pb-[150px] px-5">
        <div
          className="absolute top-0 left-0 w-full h-full bg-top bg-no-repeat bg-cover opacity-100"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        />
        <div className="relative w-full flex flex-col gap-y-5 text-center">
          <NameFrame />
          <p
            className={`${crimsonProNormal.className} text-black leading-[1.8em] tracking-[0.3px] px-[50px]`}
          >
            It is a pleasure and honor for us, if you are willing to attend and
            give us your blessing.
          </p>
          <TextGolden>
            {dataMempelai.nama_panggilan_pria} &{" "}
            {dataMempelai.nama_panggilan_wanita}
          </TextGolden>
        </div>
      </div>
      <div className="bg-[#403A30] py-[50px] px-5 flex flex-col gap-5 items-center">
        <p className={`${roboto_regular.className} text-sm text-white`}>
          Designed By tibradigital.id
        </p>
        <div className="flex items-center gap-5">
          <Link href={"https://www.instagram.com/"} target="_blank">
            <FaInstagram
              size={40}
              color="#fff"
              className="p-2 rounded-full bg-black"
            />
          </Link>
          <Link href={"https://www.tibradigital.id/"} target="_blank">
            <IoMdBasketball
              size={40}
              color="#fff"
              className="p-2 rounded-full bg-black"
            />
          </Link>
          <Link href={"https://web.whatsapp.com/"} target="_blank">
            <FaWhatsapp
              size={40}
              color="#fff"
              className="p-2 rounded-full bg-black"
            />
          </Link>
        </div>
        <p className={`${poppins.className} text-sm text-white`}>
          © 2024 Tibra Digital. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
