import React from "react";
import pinkForest from "@/assets/images/pink-forest.jpg";
import imgbride from "@/assets/images/pink-forest-ayat-bunga.webp";
import Image from "next/image";
import {
  aston_script,
  montserrat_bold,
  montserrat_regular,
} from "@/utils/fonts";

const EndlessLove = () => {
  return (
    <div className="min-h-screen w-full bg-primary py-[75px] px-5">
      <div className="relative bg-whiteSmooke rounded-full border-8 border-primary shadow-sm pt-[45px] px-[30px] pb-[120px] overflow-hidden min-h-screen">
        <div
          className="bg-cover bg-center opacity-20 absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url(${pinkForest.src})`,
          }}
        ></div>
        <div className="relative w-full h-full flex flex-col gap-5 justify-center items-center">
          <div className="overflow-hidden w-full h-full">
            <Image src={imgbride} alt="" width={0} height={0} sizes="100vw" />
          </div>
          <p className={`${aston_script.className} text-primary text-[32px]`}>
            Endless Love
          </p>
          <p
            className={`${montserrat_regular.className} text-black text-sm text-center leading-7`}
          >
            “Above all, clothe yourselves with love, which binds everything
            together in perfect harmony. And let the peace of Christ rule in
            your hearts, to which indeed you were called in the one body. And be
            thankful.”
          </p>
          <p
            className={`${montserrat_bold.className} text-black text-sm leading-7`}
          >
            Colossians 3:14-15
          </p>
        </div>
      </div>
    </div>
  );
};

export default EndlessLove;
