import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { showZoomIn } from "@/utils/animatins";
import { crimsonProNormal } from "../../libs/fonts";

interface IButtonGold {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  iconLeft?: ReactNode;
}

const ButtonGold = ({
  className,
  children,
  iconLeft,
  onClick,
}: IButtonGold) => {
  return (
    <motion.div
      variants={showZoomIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      onClick={onClick}
      className={`${className} ${crimsonProNormal.className} bg-buttonGold text-white uppercase py-[14px] px-[35px] text-sm rounded-full flex items-center gap-2 tracking-[1px]`}
    >
      {iconLeft}
      <button className="uppercase">{children}</button>
    </motion.div>
  );
};

export default ButtonGold;
