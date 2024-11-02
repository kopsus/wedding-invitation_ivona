"use client";

import data from "@/utils/data";
import React, { RefObject, SetStateAction } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

interface IAudio {
  toggleAudio: () => void;
  isPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement>;
  setIsPlaying: React.Dispatch<SetStateAction<boolean>>;
}

const Audio = ({ toggleAudio, isPlaying, audioRef, setIsPlaying }: IAudio) => {
  const { audio } = data();

  return (
    <>
      <div
        className="z-50 fixed bottom-10 right-[50px] md:right-1/3 w-8 h-8 p-1 rounded-full bg-white flex justify-center items-center text-white cursor-pointer"
        onClick={toggleAudio}
      >
        {!isPlaying ? <FaMusic color="#000" /> : <FaPause color="#000" />}
      </div>
      <audio
        ref={audioRef}
        src={audio.audio}
        loop
        onCanPlay={() => {
          if (!isPlaying) {
            console.log("Audio is ready to play");
            if (audioRef.current) {
              audioRef.current.play().catch((error) => {
                console.error("Audio playback failed: ", error);
              });
              setIsPlaying(true);
            }
          }
        }}
      />
    </>
  );
};

export default Audio;
