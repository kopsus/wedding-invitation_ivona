import React, { ReactNode } from "react";
import { crimsonProNormal, gfsDidot } from "../../libs/fonts";
import ButtonGold from "./ButtonGold";

interface ICardVictoria {
  title: string;
  desc: string;
  textButton: string;
  iconButton: ReactNode;
  onClick?: () => void;
}

const CardVictoria = ({
  desc,
  textButton,
  title,
  iconButton,
  onClick,
}: ICardVictoria) => {
  return (
    <div className="shadow-sm py-[50px] px-5 bg-[#F9F6EF] rounded-[20px] flex flex-col justify-center items-center gap-y-5 text-center">
      <p
        className={`${gfsDidot.className} text-2xl text-black tracking-[0.5px] leading-none`}
      >
        {title}
      </p>
      <p
        className={`${crimsonProNormal.className} leading-[1.8em] tracking-[0.3px] text-black`}
      >
        {desc}
      </p>
      <ButtonGold onClick={onClick} iconLeft={iconButton}>
        {textButton}
      </ButtonGold>
    </div>
  );
};

export default CardVictoria;
