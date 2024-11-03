import Image from "next/image";
import React from "react";
import gallery1 from "@/../public/images/groom&bride.jpg";
import bg1 from "../../assets/asset-gold-white-8-rev.webp";
import bg2 from "../../assets/ASSET-GOLD-WHITE-9-Rev.webp";
import assetCard1 from "../../assets/ASSET-GOLD-WHITE-10.webp";
import assetCard3 from "../../assets/ASSET-GOLD-WHITE-12.webp";
import ContentEvent from "./ContentEvent";
import { formatDateAndDay } from "@/utils/formatDate";
import { weddingEvent } from "../../libs/data";

const Event = () => {
  return (
    <>
      <div>
        <Image src={gallery1} alt="" width={0} height={0} sizes="100vw" />
      </div>
      <div
        className="flex items-center justify-center relative w-full min-h-screen pt-[70px] pb-[50px] px-5 bg-no-repeat bg-contain bg-top bg-[#EDE6D5]"
        style={{
          backgroundImage: `url(${bg1.src})`,
        }}
      >
        <div
          className="absolute top-0 left-0 h-full w-full bg-contain bg-bottom bg-no-repeat opacity-100"
          style={{
            backgroundImage: `url(${bg2.src})`,
          }}
        ></div>
        <div className="relative w-full">
          <Image src={assetCard1} alt="" width={0} height={0} sizes="100vw" />
          {weddingEvent.map((item, index) => {
            const { formattedDate } = formatDateAndDay(item.date);
            return (
              <ContentEvent
                key={index}
                title={item.title}
                date={formattedDate}
                timeStart={item.timeStart}
                timeEnd={item.timeEnd}
                placeName={item.place}
                addressPlace={item.maps}
                textButton="Google Maps"
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/place/${item.maps}`,
                    "_blank"
                  )
                }
              />
            );
          })}
          <Image src={assetCard3} alt="" width={0} height={0} sizes="100vw" />
        </div>
      </div>
    </>
  );
};

export default Event;
