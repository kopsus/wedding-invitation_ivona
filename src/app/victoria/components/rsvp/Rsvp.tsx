import React from "react";
import bgImg from "../../assets/ASSET-GOLD-WHITE-6-scaled.webp";
import imgBottom from "../../assets/ASSET-GOLD-WHITE-15.webp";
import Image from "next/image";
import {
  marcellus,
  montserrat_regular,
  poppinsLight,
  raleway_light,
} from "@/utils/fonts";
import FormAddRsvp from "./FormAddRsvp";
import CommentItem from "./CommentItem";
import data from "@/utils/data";
import TextGolden from "../_global/TextGolden";

const Rsvp = () => {
  const { rsvp: dataKehadiran } = data();
  const countKehadiran = (status: string) =>
    dataKehadiran.filter((item) => item.konfirmasi_kehadiran === status).length;

  return (
    <>
      <div className="relative min-h-screen w-full pt-[75px] overflow-hidden bg-[#F9F6EF]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center opacity-30 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        ></div>
        <div className="relative px-5">
          <div className="flex flex-col gap-2 text-center pb-5">
            <TextGolden
              className={`${marcellus.className} text-[32px] font-medium leading-8`}
            >
              Rsvp
            </TextGolden>
            <p
              className={`${montserrat_regular.className} text-[32px] font-semibold text-black leading-8`}
            >
              Ucapan
            </p>
            <p
              className={`${raleway_light.className} font-medium leading-6 text-black`}
            >
              Konfirmasi Kehadiran & Ucapan Selamat
            </p>
          </div>
          <div className="bg-[#eeeeeb] mx-auto rounded-lg">
            <div className="pt-3  border-b border-slate-200">
              <p className="text-center text-[#B69569] font-medium">Comment</p>
              <div className="grid grid-cols-3 mx-auto gap-5 w-[80%] text-[#B69569]">
                <div className="text-center border border-[#B69569] p-2 rounded-md my-5">
                  <p className="text-lg font-bold leading-7">
                    {countKehadiran("Hadir")}
                  </p>
                  <p className={`${poppinsLight.className} text-xs`}>Hadir</p>
                </div>
                <div className="text-center border border-[#B69569] p-2 rounded-md my-5">
                  <p className="text-lg font-bold leading-7">
                    {countKehadiran("Tidak Hadir")}
                  </p>
                  <p className={`${poppinsLight.className} text-xs`}>
                    Tidak Hadir
                  </p>
                </div>
                <div className="text-center border border-[#B69569] p-2 rounded-md my-5">
                  <p className="text-lg font-bold leading-7">
                    {countKehadiran("Masih Ragu")}
                  </p>
                  <p className={`${poppinsLight.className} text-xs`}>
                    Masih Ragu
                  </p>
                </div>
              </div>
            </div>
            <FormAddRsvp />
            <div
              className="max-h-52 overflow-y-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {dataKehadiran.map((value, index) => (
                <CommentItem value={value} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-hidden w-full h-full">
          <Image src={imgBottom} alt="" width={0} height={0} sizes="100vw" />
        </div>
      </div>
    </>
  );
};

export default Rsvp;
