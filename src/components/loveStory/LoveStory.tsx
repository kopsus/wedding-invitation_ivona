import Image from "next/image";
import React from "react";
import {
  aston_script,
  montserrat_regular,
  montserrat_semi,
} from "@/utils/fonts";
import data from "@/utils/data";

const LoveStory = () => {
  const { loveStory } = data();

  return (
    <>
      <div className="bg-primary pt-[70px] px-[30px] pb-[75px] flex flex-col gap-5">
        <p
          className={`${aston_script.className} text-[32px] font-medium leading-6 text-whiteSmooke mb-5 text-center`}
        >
          Love Story
        </p>
        <div className="border-[6px] border-primary rounded-[20px] shadow-sm w-full h-full overflow-hidden">
          <Image
            src={loveStory.image}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        {loveStory.stroy.map((item, index) => (
          <div key={index} className="text-center flex flex-col gap-3">
            <p className={`${montserrat_semi.className} text-xl text-white`}>
              {item.title}
            </p>
            <p
              className={`${montserrat_regular.className} text-sm leading-7 text-white`}
            >
              {item.story}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full h-full overflow-hidden">
        <Image
          src={loveStory.image2}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </>
  );
};

export default LoveStory;
