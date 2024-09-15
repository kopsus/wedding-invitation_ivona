"use client";

import data from "@/utils/data";
import { useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

const Audio = () => {
  const { audio } = data();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div
        className="z-50 fixed bottom-10 right-[50px] md:right-1/3 w-8 h-8 p-1 rounded-full bg-white flex justify-center items-center text-white cursor-pointer"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {!isPlaying ? <FaPause color="#000" /> : <FaMusic color="#000" />}
      </div>
      <audio src={audio.audio} loop />
    </>
  );
};

export default Audio;
