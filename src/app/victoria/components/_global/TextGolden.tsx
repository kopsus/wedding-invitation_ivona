import React, { ReactNode } from "react";
import { trajanPro } from "../../libs/fonts";

interface ITextGolden {
  children: ReactNode;
  className?: string;
}

const TextGolden = ({ children, className }: ITextGolden) => {
  return (
    <p
      className={`${trajanPro.className} ${className} text-black text-[25px] font-medium uppercase leading-4 pt-[9px] pb-[5px] bg-gradientGolden bg-clip-text text-transparent`}
    >
      {children}
    </p>
  );
};

export default TextGolden;
