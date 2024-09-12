import React from "react";
import bgPohon from "@/../public/images/pink-forest-pohon.webp";
import {
  aston_script,
  marcellus,
  montserrat_regular,
  montserrat_semi,
} from "@/utils/fonts";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import data from "@/utils/data";
import Link from "next/link";

const Bride = () => {
  const { dataMempelai } = data();

  return (
    <div className="min-h-screen relative w-full bg-whiteSmooke pt-[50px] pb-[75px] px-[30px]">
      <div
        className="bg-contain bg-center bg-repeat opacity-20 absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgPohon.src})`,
        }}
      ></div>
      <div className="relative w-full h-full flex flex-col gap-10 justify-center items-center">
        <p className={`${marcellus.className} text-[35px] text-primary`}>
          Groom & Bride
        </p>
        {dataMempelai.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-10">
            <div className="overflow-hidden w-[90%] border-8 border-whiteSmooke shadow-sm rounded-full">
              <Image
                src={item.foto_pria}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="flex flex-col gap-5 items-center">
              <p
                className={`${aston_script.className} text-primary text-[32px]`}
              >
                {item.nama_panggilan_pria}
              </p>
              <p
                className={`${montserrat_semi.className} text-black leading-6`}
              >
                {item.nama_lengkap_pria}
              </p>
              <div
                className={`${montserrat_regular.className} text-sm text-center text-black leading-7`}
              >
                <p>{item.nama_ayah_pria}</p>
                <p>& {item.nama_ibu_pria}</p>
              </div>
              <Link href={item.instagram_pria}>
                <FaInstagram
                  color="white"
                  size={40}
                  className="bg-primary p-2 rounded-full cursor-pointer"
                />
              </Link>
            </div>
            <h2
              className={`${marcellus.className} text-primary text-[65px] text-center`}
            >
              &
            </h2>
            <div className="overflow-hidden w-[90%] border-8 border-whiteSmooke shadow-sm rounded-full">
              <Image
                src={item.foto_wanita}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="flex flex-col gap-5 items-center">
              <p
                className={`${aston_script.className} text-primary text-[32px]`}
              >
                {item.nama_panggilan_wanita}
              </p>
              <p
                className={`${montserrat_semi.className} text-black leading-6`}
              >
                {item.nama_lengkap_Wanita}
              </p>
              <div
                className={`${montserrat_regular.className} text-sm text-center text-black leading-7`}
              >
                <p>{item.nama_ayah_wanita}</p>
                <p>& {item.nama_ibu_wanita}</p>
              </div>
              <Link href={item.instagram_wanita}>
                <FaInstagram
                  color="white"
                  size={40}
                  className="bg-primary p-2 rounded-full cursor-pointer"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bride;
