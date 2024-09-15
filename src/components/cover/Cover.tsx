"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  marcellus,
  montserrat_semi,
  open_sans,
  pinyon_script,
} from "@/utils/fonts";
import Button from "../_global/Button";
import Lottie from "lottie-react";
import arrowDown from "@/assets/lottie/arrow_down.json";
import data from "@/utils/data";
import { formatDate } from "@/utils/formatDate";
import { motion } from "framer-motion";
import { showZoomIn } from "@/utils/animatios";
import EndlessLove from "../endlessLove/Endless";
import Bride from "../bride/Bride";
import Event from "../event/Event";
import Gift from "../gift/Gift";
import Gallery from "../gallery/Gallery";
import Rsvp from "../rsvp/Rsvp";
import LoveStory from "../loveStory/LoveStory";
import QrCheckin from "../qrCheckin/QrCheckin";
import Timeline from "../timeline/Timeline";
import Footer from "../footer/Footer";
import Audio from "../audio/Audio";

const Cover = () => {
  const { dataMempelai, dataCover } = data();
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isOpen) {
        setShowText(true);
      }
    }, 15000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showContent && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showContent]);

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
          className="h-screen w-full overflow-hidden bg-cover bg-no-repeat bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${dataCover.image})`,
          }}
        >
          <div className="flex flex-col items-center gap-5">
            <p className={`${marcellus.className} text-lg text-black`}>
              THE WEDDING OF
            </p>
            <div
              className={`${marcellus.className} text-[40px] text-primary text-center`}
            >
              <p>{dataMempelai.nama_panggilan_pria}</p>
              <p>&</p>
              <p>{dataMempelai.nama_panggilan_wanita}</p>
            </div>
            <div
              className={`${montserrat_semi.className} text-[15px] text-black text-center`}
            >
              <p>Dear</p>
              <p>Guest Name</p>
            </div>
            <Button
              onClick={handleClick}
              className={`${open_sans.className} bg-black text-white hover:scale-110 transition-all`}
            >
              Open Invitation
            </Button>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full relative overflow-hidden">
          <video
            autoPlay
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={dataCover.video}
          ></video>
          {showText && (
            <motion.div
              variants={showZoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col items-center justify-center h-full gap-5"
            >
              <p className={`${marcellus.className} text-lg text-black`}>
                THE WEDDING OF
              </p>
              <div
                className={`${marcellus.className} text-[40px] text-primary text-center`}
              >
                <p>{dataMempelai.nama_panggilan_pria}</p>
                <p
                  className={`${pinyon_script.className} text-[35px] text-black`}
                >
                  and
                </p>
                <p>{dataMempelai.nama_panggilan_wanita}</p>
              </div>
              <p className={`${marcellus.className} text-base text-black`}>
                {formatDate(dataMempelai.timeline)}
              </p>
              <Lottie
                animationData={arrowDown}
                loop={true}
                autoPlay={true}
                color="#000"
              />
            </motion.div>
          )}
        </div>
      )}
      {showContent && (
        <div ref={contentRef}>
          <EndlessLove />
          <Bride />
          <Event />
          <Gift />
          <Gallery />
          <Rsvp />
          <LoveStory />
          <QrCheckin />
          <Timeline />
          <Footer />
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
