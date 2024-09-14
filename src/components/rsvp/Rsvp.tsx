import React from "react";
import bgImg from "@/../public/images/pink-forest-pohon.webp";
import imgBottom from "@/../public/images/pink-forest3.webp";
import Image from "next/image";
import {
  marcellus,
  montserrat_regular,
  raleway_light,
  roboto_light,
  roboto_regular,
} from "@/utils/fonts";

const Rsvp = () => {
  const totalGuest = [
    {
      id: "1",
      total: 1,
    },
    {
      id: "2",
      total: 2,
    },
    {
      id: "3",
      total: 3,
    },
    {
      id: "4",
      total: 4,
    },
    {
      id: "5",
      total: 5,
    },
  ];

  return (
    <>
      <div className="relative min-h-screen w-full pt-[75px] overflow-hidden bg-[#E6DED8]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center opacity-30 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        ></div>
        <div className="relative px-5 mb-[75px]">
          <div className="flex flex-col gap-5 items-center text-center">
            <p
              className={`${marcellus.className} text-[#000] font-semibold text-[35px] leading-6`}
            >
              RSVP FORM
            </p>
            <p
              className={`${montserrat_regular.className} text-sm text-black leading-6`}
            >
              Please help us prepare everything better by confirming your
              attendance at our wedding event with the following RSVP form:
            </p>
          </div>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label
                className={`${roboto_regular.className} text-sm text-[#493830]`}
              >
                Name
              </label>
              <input
                type="text"
                className={`${raleway_light.className} w-full bg-[#FFFFFFF0] border-white outline-none p-2 text-sm`}
              />
            </div>
            <div className="flex flex-col">
              <label
                className={`${roboto_regular.className} text-sm text-[#493830]`}
              >
                Amount of guest
              </label>
              <select
                className={`${raleway_light.className} w-full bg-[#FFFFFFF0] border-white outline-none p-2 text-sm`}
              >
                {totalGuest.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.total}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label
                className={`${roboto_regular.className} text-sm text-[#493830]`}
              >
                Address
              </label>
              <input
                type="text"
                className={`${raleway_light.className} w-full bg-[#FFFFFFF0] border-white outline-none p-2 text-sm`}
              />
            </div>
            <div className="flex flex-col">
              <label
                className={`${roboto_regular.className} text-sm text-[#493830]`}
              >
                Will you attend
              </label>
              <select
                className={`${raleway_light.className} w-full bg-[#FFFFFFF0] border-white outline-none p-2 text-sm`}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button
              className={`${roboto_light.className} text-sm bg-black py-2 text-white`}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="overflow-hidden w-full h-full">
          <Image src={imgBottom} alt="" width={0} height={0} sizes="100vw" />
        </div>
      </div>
    </>
  );
};

export default Rsvp;
