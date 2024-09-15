import React from "react";
import pinkForest from "@/../public/images/pink-forest.jpg";
import bride from "@/../public/images/groom&bride.jpg";
import Image from "next/image";
import {
  aston_script,
  marcellus,
  montserrat_medium,
  montserrat_regular,
  montserrat_semi,
} from "@/utils/fonts";
import { FaHotel, FaMapMarkerAlt } from "react-icons/fa";
import Button from "../_global/Button";
import { SlCalender } from "react-icons/sl";
import data from "@/utils/data";
import { formatDateAndDay } from "@/utils/formatDate";

const Event = () => {
  const { weddingEvent } = data();

  return (
    <>
      <div className="overflow-hidden h-full w-full">
        <Image src={bride} alt="" width={0} height={0} sizes="100vw" />
      </div>
      <div className="w-full bg-primary py-[75px] px-5 min-h-screen flex flex-col gap-5">
        <div className="text-center flex flex-col gap-3">
          <p
            className={`${aston_script.className} text-[32px] text-whiteSmooke`}
          >
            Wedding Event
          </p>
          <p
            className={`${montserrat_regular.className} text-sm text-white leading-7`}
          >
            By the grace of God, we are pleased to announce our wedding to you,
            our family, and our friends. We request the honor of your presence
            on our special day that will be held on:
          </p>
        </div>

        {weddingEvent.map((item, index) => {
          const { formattedDate, day } = formatDateAndDay(item.date);

          return (
            <div
              key={index}
              className="relative bg-whiteSmooke rounded-full border-8 border-primary shadow-sm py-[120px] px-5 overflow-hidden my-5"
            >
              <div
                className="bg-cover bg-center opacity-20 absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `url(${pinkForest.src})`,
                }}
              ></div>
              <div className="relative w-full h-full flex flex-col gap-5 justify-center items-center">
                <p
                  className={`${marcellus.className} text-[32px] leading-5 text-primary mb-4`}
                >
                  {item.title}
                </p>
                <div className="flex items-center gap-2 w-1/2">
                  <span className="bg-black w-full h-[1px]"></span>
                  <span>
                    <SlCalender size={24} />
                  </span>
                  <span className="bg-black w-full h-[1px]"></span>
                </div>
                <div
                  className={`${montserrat_semi.className} text-lg uppercase flex flex-col items-center gap-2`}
                >
                  <p>{day}</p>
                  <p>{formattedDate}</p>
                  <p>
                    {item.timeStart} - {item.timeEnd} WIB
                  </p>
                </div>
                <div className="flex items-center gap-2 w-1/2">
                  <span className="bg-black w-full h-[1px]"></span>
                  <span>
                    <FaHotel size={24} />
                  </span>
                  <span className="bg-black w-full h-[1px]"></span>
                </div>
                <div className="text-center flex flex-col items-center">
                  <p
                    className={`${montserrat_semi.className} text-sm leading-7`}
                  >
                    {item.place}
                  </p>
                  <p
                    className={`${montserrat_regular.className} text-sm leading-7`}
                  >
                    {item.maps}
                  </p>
                  <Button
                    className={`${montserrat_medium.className} text-white bg-primary py-[14px] px-[35px] 
                    rounded-[25px] mt-5 hover:scale-110 transition-all`}
                    iconLeft={<FaMapMarkerAlt size={16} color="#fff" />}
                  >
                    Open Maps
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Event;
