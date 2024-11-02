import React from "react";
import bgGallery from "../assets/asset-4.png";
import { manstein } from "../libs/fonts";
import data from "@/utils/data";
import Image from "next/image";
import { useLightbox } from "@/components/lightbox/useLightbox";
import { FadeInUp, ShowZoomIn } from "./_global/Animation";
import { NextLightbox } from "@/components/lightbox/Lightbox";

const Gallery = () => {
  const { gallery, youtubeLink } = data();
  const lightbox = useLightbox();

  return (
    <>
      <iframe
        className="w-full h-56 border-[6px] border-[#AC8711]"
        src={youtubeLink.link}
        title="Pemutar video YouTube"
        allowFullScreen
      ></iframe>
      <div className="relative pt-[50px] pb-5 px-5 bg-[#F9F6EF]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-top bg-contain opacity-10"
          style={{ backgroundImage: `url(${bgGallery.src})` }}
        ></div>
        <div className="relative w-full">
          <ShowZoomIn
            className={`${manstein.className} text-center text-[45px] font-medium leading-4 text-[#AC8711] my-10`}
          >
            Our Gallery
          </ShowZoomIn>
          <div className="grid grid-cols-2 gap-2 mt-3">
            {gallery.map((item, index) => (
              <FadeInUp
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
              </FadeInUp>
            ))}
            <NextLightbox
              index={lightbox.index}
              visible={lightbox.visible}
              slides={lightbox.slides}
              onClose={lightbox.close}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
