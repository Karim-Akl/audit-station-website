import React from "react";
import { FaUser } from "react-icons/fa"; // You can use any icon library like react-icons

interface CardProps {
  step?: string;
  className?: string;
  style?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const CustomCard: React.FC<CardProps> = ({
  className,
  step,
  icon,
  title,
  description,
  style,
}) => {
  return (
    <div className="relative flex items-start p-4 md:w-auto justify-center my-10 md:my-0 hover:scale-105 transition-all ">
      {/* Circle with step and icon */}
      <div
        className={`relative   rounded-full p-7 flex items-center justify-center border-2  ${className}`}
      >
        {icon}
        {/* Circular outline */}
        <div className="absolute inset-0 rounded-full  border-2 border-white"></div>
        {step && (
          <div className="absolute inset-0  rounded-full   ">
            <span
              className={`bg-white border-4  ring-offset-slate-900 rounded-full p-1  text-xs ${className}`}
            >
              {step}
            </span>
          </div>
        )}
      </div>
      {/* Connecting bar between circle and card */}
      <div
        className={`${className} absolute ms-12   ps-10 pt-2 top-6 h-[51px] min-w-96 rounded-tr-full rounded-bl-full text-xl md:text-3xl text-white `}
      >
        {title}
      </div>

      {/* Card content */}
      <div
        className={`${style} p-1 bg-white border  rounded-lg text-center w-[341px]  shadow-lg  mt-16 hover:shadow-xl  `}
      >
        <p className=" text-[16px] mt-1 font-normal">{description}</p>
      </div>
    </div>
  );
};
