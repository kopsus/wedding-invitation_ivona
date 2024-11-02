import React from "react";
import bgEndless1 from "../assets/asset-gold-white-8-rev.webp";
import bgEndless2 from "../assets/asset-gold-white-1.webp";
import Image from "next/image";
import { crimsonProNormal, manstein } from "../libs/fonts";
import { FadeInUp, ShowZoomIn } from "./_global/Animation";
import { dataEndless } from "../libs/data";

const EndlessLove = () => {
  return (
    <div
      className="relative w-full bg-[#F9F6EF] py-[60px] px-5 bg-center bg-no-repeat bg-contain min-h-screen"
      style={{ backgroundImage: `url(${bgEndless1.src})` }}
    >
      <div
        className="bg-[#95515600] bg-bottom bg-repeat bg-cover opacity-20 absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${bgEndless2.src})` }}
      ></div>
      <div className="relative bg-[#F9F6EF] shadow-cardVictoria rounded-[50px] overflow-hidden py-[50px] px-[30px] w-full h-full">
        <div
          className="bg-[#95515600] bg-bottom bg-no-repeat bg-cover opacity-100 absolute top-0 left-0 w-full h-full"
          style={{ backgroundImage: `url(${bgEndless2.src})` }}
        ></div>
        <div className="relative flex flex-col gap-y-5 items-center justify-center">
          <ShowZoomIn className="w-full h-auto overflow-hidden">
            <Image
              src={dataEndless.image}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </ShowZoomIn>
          <ShowZoomIn>
            <p
              className={`${manstein.className} text-[40px] font-medium pt-[9px] pb-[5px] bg-gradientGolden bg-clip-text text-transparent`}
            >
              Endless Love
            </p>
          </ShowZoomIn>
          <FadeInUp>
            <p
              className={`${crimsonProNormal.className} text-black leading-[1.8em] text-center`}
            >
              “{dataEndless.desc}”
            </p>
          </FadeInUp>
          <div className="h-[160px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default EndlessLove;
