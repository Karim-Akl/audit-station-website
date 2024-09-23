"use client";
import React from "react";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa6";

const ServiceApply: React.FC = () => {
  const t = useTranslations("adversting");
  const handleCallClick = () => {
    console.log("Call clicked");
    window.open("tel:+9660575645308");
  };

  return (
    <div id="hoverEffect" className=" ">
      <div className="flex  flex-col md:flex-row items-center justify-around bg-[#F8F8F7] px-10 py-20 rounded-lg  ">
        <div className="">
          <h2 className="text-5xl max-w-md text-wrap font-black ">
            {t("ServiceApply")}
          </h2>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleCallClick}
            className="flex items-center text-xl p-4 gap-4 font-bold bg-[#2D2D2D] text-white rounded hover:bg-blue-600"
          >
            {t("contactNumber")}
            <span className="ml-2">
              <PhoneCall className="animate-ping" size={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceApply;
