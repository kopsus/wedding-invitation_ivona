import React from "react";
import Image from "next/image";
import { dataMempelai } from "../../libs/data";
import assetGoldWhite3 from "../../assets/ASSET-GOLD-WHITE-3.webp";
import assetGoldWhite2 from "../../assets/ASSET-GOLD-WHITE-2.webp";
import { gfsDidot, manstein } from "../../libs/fonts";
import AssetGoldWhite4 from "../../assets/ASSET-GOLD-WHITE-4.webp";
import CardTheGroom from "./CardTheGroom";
import { FadeInUp } from "../_global/Animation";

const Bride = () => {
  return (
    <>
      <div className="bg-[#F9F6EF]">
        <Image
          src={assetGoldWhite3}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="min-h-screen relative w-full bg-[#F9F6EF] px-5">
        <div
          className="bg-contain opacity-100 absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url(${assetGoldWhite2.src})`,
          }}
        ></div>
        <div className="relative w-full h-full flex flex-col gap-y-5 justify-center items-center">
          <FadeInUp>
            <p
              className={`${gfsDidot.className} text-[28px] font-light tracking-[0.5px] leading-none text-black`}
            >
              THE GROOM
            </p>
          </FadeInUp>
          <div className="flex flex-col items-center gap-10">
            <CardTheGroom
              foto={dataMempelai.foto_pria}
              nickname={dataMempelai.nama_panggilan_pria}
              fullname={dataMempelai.nama_lengkap_pria}
              fatherName={dataMempelai.nama_ayah_pria}
              motherName={dataMempelai.nama_ibu_pria}
              sosmed={dataMempelai.instagram_pria}
            />
            <h2
              className={`${manstein.className} text-[#B69569] text-[100px] text-center`}
            >
              &
            </h2>
            <CardTheGroom
              foto={dataMempelai.foto_wanita}
              nickname={dataMempelai.nama_panggilan_wanita}
              fullname={dataMempelai.nama_lengkap_wanita}
              fatherName={dataMempelai.nama_ayah_wanita}
              motherName={dataMempelai.nama_ibu_wanita}
              sosmed={dataMempelai.instagram_wanita}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F9F6EF]">
        <Image
          src={AssetGoldWhite4}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </>
  );
};

export default Bride;
