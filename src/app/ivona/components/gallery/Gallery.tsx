"use client";

import { NextLightbox } from "@/components/lightbox/Lightbox";
import { useLightbox } from "@/components/lightbox/useLightbox";
import data from "@/utils/data";
import { aston_script } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  const { youtubeLink, gallery } = data();
  const lightbox = useLightbox();

  return (
    <>
      <div className="bg-primary pt-[75px] px-5 pb-5 min-h-screen">
        <p
          className={`${aston_script.className} text-3xl text-[#F1E9DF] text-center leading-6 mb-10`}
        >
          Our Gallery
        </p>
        <iframe
          className="h-52 w-full rounded-md"
          src={youtubeLink.link}
          title="Pemutar video YouTube"
          allowFullScreen
        ></iframe>
        <div className="grid grid-cols-2 gap-2 mt-3">
          {gallery.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                lightbox.open(
                  index,
                  gallery.map((d) => d.image)
                )
              }
              className="w-full h-full overflow-hidden rounded-md cursor-pointer"
            >
              <Image
                src={item.image}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="hover:scale-110 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
      <NextLightbox
        index={lightbox.index}
        visible={lightbox.visible}
        slides={lightbox.slides}
        onClose={lightbox.close}
      />
    </>
  );
};

export default Gallery;
