import { poppins, roboto_regular } from "@/utils/fonts";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMdBasketball } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-primary py-[50px] px-5 flex flex-col gap-5 items-center">
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
  );
};

export default Footer;
