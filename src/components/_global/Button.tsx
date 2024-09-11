import React, { ReactNode } from "react";

interface IButton {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ className, children, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`${className} py-[14px] px-[33px] text-sm rounded-3xl`}
    >
      {children}
    </button>
  );
};

export default Button;
