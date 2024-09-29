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
    <div className="relative flex items-start p-4 md:w-96 mx-auto my-10 hover:scale-105 transition-all ">
      {/* Circle with step and icon */}
      <div
        className={`relative  bg-cyan-500 rounded-full p-7 flex items-center justify-center border-2 border-cyan-500 ${className}`}
      >
        {icon}
        {/* Circular outline */}
        <div className="absolute inset-0 rounded-full border-2 border-white"></div>
        {step && (
          <div className="absolute inset-0 rounded-full border-2 border-white ">
            {step}
          </div>
        )}
      </div>
      {/* Connecting bar between circle and card */}
      <div
        className={`absolute ms-16  ps-10 pt-2 top-6 h-50 w-72 text-white bg-cyan-500 rounded-tr-2xl text-xl md:text-3xl  ${className} `}
      >
        {title}
      </div>

      {/* Card content */}
      <div
        className={`p-1 bg-white border border-cyan-500 rounded-lg text-center  shadow-lg w-full mt-14 hover:shadow-xl hover:shadow-cyan-200 ${style}`}
      >
        <p className=" text-[16px] mt-1">{description}</p>
      </div>
    </div>
  );
};
