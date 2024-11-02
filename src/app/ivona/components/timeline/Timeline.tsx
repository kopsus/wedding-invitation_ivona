"use client";

import React, { useEffect, useState } from "react";
import bgImg from "@/../public/images/pink-forest2.jpg";
import Image from "next/image";
import {
  aston_script,
  montserrat_medium,
  montserrat_regular,
  montserrat_semi,
} from "@/utils/fonts";
import Button from "../../../../components/Button";
import { FaCalendar } from "react-icons/fa";
import butterfly from "@/../public/images/Butterfly.gif";
import data from "@/utils/data";
import Link from "next/link";
import { formatTimeline } from "@/utils/formatTimeline";
import useCountdown from "@/hooks/useCountdown";

const Timeline = () => {
  const { dataMempelai, timeline } = data();
  const countdown = useCountdown(dataMempelai.timeline);

  return (
    <div
      className="relative min-h-screen w-full h-full py-[60px] px-[30px] bg-[#E6DED8] bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient"></div>
      <div className="overflow-hidden absolute left-0 top-[130px] w-full z-10">
        <Image
          src={butterfly}
          alt="butterfly"
          width={0}
          height={0}
          sizes="100vw"
          className="max-w-[40%] mx-auto"
        />
      </div>
      <div className="relative flex flex-col gap-5 justify-center items-center">
        <div className="border-8 border-primary rounded-t-[200px] w-full h-full overflow-hidden">
          <Image src={bgImg} alt="" width={0} height={0} sizes="100vw" />
        </div>
        <div className="grid grid-cols-4 gap-2 w-full">
          <div className="py-[10px] rounded-md text-center bg-primary">
            <p
              className={`${montserrat_semi.className} text-white text-xl leading-6`}
            >
              {countdown.days}
            </p>
            <p
              className={`${montserrat_medium.className} text-white text-[10px] leading-6`}
            >
              Days
            </p>
          </div>
          <div className="py-[10px] rounded-md text-center bg-primary">
            <p
              className={`${montserrat_semi.className} text-white text-xl leading-6`}
            >
              {countdown.hours}
            </p>
            <p
              className={`${montserrat_medium.className} text-white text-[10px] leading-6`}
            >
              Hours
            </p>
          </div>
          <div className="py-[10px] rounded-md text-center bg-primary">
            <p
              className={`${montserrat_semi.className} text-white text-xl leading-6`}
            >
              {countdown.minutes}
            </p>
            <p
              className={`${montserrat_medium.className} text-white text-[10px] leading-6`}
            >
              Minutes
            </p>
          </div>
          <div className="py-[10px] rounded-md text-center bg-primary">
            <p
              className={`${montserrat_semi.className} text-white text-xl leading-6`}
            >
              {countdown.seconds}
            </p>
            <p
              className={`${montserrat_medium.className} text-white text-[10px] leading-6`}
            >
              Seconds
            </p>
          </div>
        </div>
        <Link
          href={`https://calendar.google.com/calendar/u/0/r/eventedit?text=The+Wedding+of+${
            dataMempelai.nama_panggilan_pria
          } and+${dataMempelai.nama_panggilan_wanita}&details=${
            timeline.detailInvite
          }.&dates=${formatTimeline(
            timeline.startDate,
            timeline.endDate
          )}&location`}
          target="_blank"
        >
          <Button
            iconLeft={<FaCalendar size={16} color="#fff" />}
            className={`${montserrat_regular.className} text-white text-sm bg-primary rounded-md hover:scale-105 transition-all`}
          >
            Save The Date
          </Button>
        </Link>
        <div className="my-5 text-center flex flex-col gap-5">
          <p
            className={`${montserrat_regular.className} text-sm leading-7 text-black`}
          >
            It is a pleasure and honor for us, if you are willing to attend and
            give us your blessing.
          </p>
          <p
            className={`${aston_script.className} text-primary text-[25px] font-medium`}
          >
            {dataMempelai.nama_panggilan_pria} &{" "}
            {dataMempelai.nama_panggilan_wanita}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
