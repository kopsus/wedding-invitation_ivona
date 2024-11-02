"use client";

import React, { useEffect, useRef, useState } from "react";
import background from "../assets/cover.webp";
import {
  crimsonProNormal,
  gfsDidot,
  monthGlade,
  trajanPro,
} from "../libs/fonts";
import { dataCover, dataMempelai } from "../libs/data";
import Button from "@/components/Button";
import { useSearchParams } from "next/navigation";
import Lottie from "lottie-react";
import arrowUp from "@/assets/lottie/arrow_up.json";
import { formatDate } from "@/utils/formatDate";
import Audio from "@/components/Audio";
import EndlessLove from "./EndlessLove";
import Bride from "./bride/Bride";
import NameFrame from "./_global/NameFrame";
import Event from "./event/Event";
import TextGolden from "./_global/TextGolden";
import { ShowZoomIn } from "./_global/Animation";
import TimeBack from "./TimeBack";
import Gallery from "./Gallery";
import Gift from "./gift/Gift";
import Rsvp from "./rsvp/Rsvp";

const Cover = () => {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Guest Name";

  const [showText, setShowText] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isOpen) {
        setShowText(true);
      }
    }, 15000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const [showContent, setShowContent] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Playback audio gagal: ", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleClick = () => {
    setShowContent(true);
    setIsOpen(true);
    toggleAudio();
  };

  return (
    <>
      {!isOpen ? (
        <div
          className="container h-screen w-full overflow-hidden bg-cover bg-no-repeat bg-center py-10 px-[30px]"
          style={{
            backgroundImage: `url(${background.src})`,
          }}
        >
          <div className="bg-[#F9F6EF] shadow-cardVictoria rounded-[200px] w-full h-full flex flex-col justify-center items-center gap-y-5">
            <NameFrame />
            <p
              className={`${crimsonProNormal.className} uppercase text-lg text-black tracking-[1px] leading-none`}
            >
              the wedding of
            </p>
            <TextGolden>
              {dataMempelai.nama_panggilan_pria} &
              {dataMempelai.nama_panggilan_wanita}
            </TextGolden>
            <div className="bg-black h-[1px] w-3/5" />
            <p className={`${crimsonProNormal.className} text-black text-lg`}>
              Dear,
            </p>
            <p className={`${crimsonProNormal.className} text-black text-lg`}>
              {guestName}
            </p>
            <Button
              onClick={handleClick}
              className={`${trajanPro.className} text-xs font-medium uppercase tracking-[1px] bg-black text-white`}
            >
              Open Invitation
            </Button>
          </div>
        </div>
      ) : (
        <div className="container h-screen w-full relative overflow-hidden">
          <video
            autoPlay
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={dataCover.video}
          ></video>
          {showText && (
            <ShowZoomIn className="relative z-10 flex flex-col items-center justify-center h-full gap-y-5">
              <p
                className={`${crimsonProNormal.className} uppercase text-lg text-black tracking-[1px] leading-none`}
              >
                the wedding of
              </p>
              <p
                className={`${gfsDidot.className} text-black text-[35px] font-medium tracking-[1.5px] leading-none uppercase`}
              >
                {dataMempelai.nama_panggilan_pria}
              </p>
              <p
                className={`${monthGlade.className} text-[40px] text-black font-medium tracking-[1.5px] leading-none`}
              >
                and
              </p>
              <p
                className={`${gfsDidot.className} text-black text-[35px] font-medium tracking-[1.5px] leading-none uppercase`}
              >
                {dataMempelai.nama_panggilan_wanita}
              </p>
              <p
                className={`${crimsonProNormal.className} uppercase text-xl font-medium tracking-[1px] leading-none text-black`}
              >
                {formatDate(dataMempelai.timeline)}
              </p>
              <Lottie
                animationData={arrowUp}
                loop={true}
                autoPlay={true}
                color="#000"
                className="w-20"
              />
            </ShowZoomIn>
          )}
        </div>
      )}
      {showContent && (
        <div className="container">
          <EndlessLove />
          <Bride />
          <Event />
          <TimeBack />
          <Gallery />
          <Gift />
          <Rsvp />
          <Audio
            audioRef={audioRef}
            isPlaying={isPlaying}
            toggleAudio={toggleAudio}
            setIsPlaying={setIsPlaying}
          />
        </div>
      )}
    </>
  );
};

export default Cover;
