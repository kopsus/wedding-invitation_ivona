import React from "react";
import TextGolden from "../_global/TextGolden";
import assetCard from "../../assets/ASSET-GOLD-WHITE-11.webp";
import { crimsonProNormal } from "../../libs/fonts";
import HotelIcon from "../_global/HotelIcon";
import ButtonGold from "../_global/ButtonGold";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FadeInUp } from "../_global/Animation";

interface IContentEvent {
  title: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  placeName: string;
  addressPlace: string;
  textButton: string;
  onClick?: () => void;
}

const ContentEvent = ({
  addressPlace,
  date,
  placeName,
  timeStart,
  timeEnd,
  title,
  textButton,
  onClick,
}: IContentEvent) => {
  return (
    <div
      className="px-[10px] bg-contain bg-repeat text-center flex flex-col gap-y-5 justify-center items-center"
      style={{ backgroundImage: `url(${assetCard.src})` }}
    >
      <FadeInUp>
        <TextGolden>{title}</TextGolden>
      </FadeInUp>
      <FadeInUp
        className={`${crimsonProNormal.className} flex flex-col gap-y-5 text-black text-lg font-medium leading-6 tracking-[1px]`}
      >
        <p>{date}</p>
        <p>
          {timeStart} – {timeEnd} WIB
        </p>
      </FadeInUp>
      <HotelIcon />
      <FadeInUp
        className={`${crimsonProNormal.className} text-black leading-[1.8em] tracking-[0.3px] px-[30px]`}
      >
        <strong>{placeName}</strong>
        <p>{addressPlace}</p>
      </FadeInUp>
      <ButtonGold onClick={onClick} iconLeft={<FaMapMarkerAlt size={16} />}>
        {textButton}
      </ButtonGold>
      <div className="h-5 w-full" />
    </div>
  );
};

export default ContentEvent;
