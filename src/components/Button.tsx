import React, { ReactNode } from "react";

interface IButton {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  iconLeft?: ReactNode;
}

const Button = ({ className, children, onClick, iconLeft }: IButton) => {
  return (
    <div
      onClick={onClick}
      className={`${className} py-[14px] px-[33px] text-sm rounded-full flex items-center gap-2`}
    >
      {iconLeft}
      <button>{children}</button>
    </div>
  );
};

export default Button;
