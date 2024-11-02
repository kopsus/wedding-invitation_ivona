import React from "react";
import { gilda } from "../../libs/fonts";
import { dataMempelai } from "../../libs/data";
import assets from "../../assets/asset-gold-white.webp";

const NameFrame = () => {
  return (
    <div
      className="w-full p-[30px] text-center bg-bottom bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${assets.src})` }}
    >
      <h2
        className={`${gilda.className} text-center text-[55px] font-bold leading-[50px] pt-[9px] pb-[5px] inline-block bg-gradientGolden bg-clip-text text-transparent`}
      >
        {dataMempelai.nama_panggilan_pria.charAt(0)}
        <br />
        {dataMempelai.nama_panggilan_wanita.charAt(0)}
      </h2>
    </div>
  );
};

export default NameFrame;
