"use client";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { useTranslations } from "next-intl";

const CustomerService = () => {
  const { pathname } = UseSearchParamsHook();
  const [showScrollUp, setShowScrollUp] = useState(false);
  const t = useTranslations("header");
  const handleWhatsappClick = () => {
    if (navigator.userAgent.includes("WhatsApp")) {
      // WhatsApp is installed
      window.open(`whatsapp://send?phone=966575645308`);
    } else {
      // WhatsApp is not installed, open WhatsApp Web
      window.open(
        "https://api.whatsapp.com/send/?phone=966575645308&text&type=phone_number&app_absent=0",
        "_blank",
        "noopener noreferrer"
      );
    }
  };

  const handleCallClick = () => {
    console.log("Call clicked");
    window.open("tel:+9660575645308");
  };

  const handleScrollUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`bg-[#128C7E] hover:bg-[#25D366] w-min p-2 rounded-full fixed 
          bottom-10 ${
            pathname === "/ar" ? "right-4" : "left-4"
          } cursor-pointer md:right-8 transition duration-400 ease-out hover:ease-in   ease-in-out  focus:shadow-lg z-50`}
        onClick={handleWhatsappClick}
      >
        <FaWhatsapp color="white" className=" w-7 h-7 md:w-10 md:h-10" />
      </div>
      <div
        className={`bg-[#128C7E] hover:bg-[#25D366] w-min p-2 rounded-full fixed 
          bottom-10 ${
            pathname === "/ar" ? "right-4" : "left-4"
          } cursor-pointer md:right-8 transition duration-400 ease-out hover:ease-in   ease-in-out  focus:shadow-lg z-50`}
        onClick={handleWhatsappClick}
      >
        <FaWhatsapp color="white" className=" w-7 h-7 md:w-10 md:h-10" />
      </div>

      {showScrollUp && (
        <>
          <div
            className={`${
              pathname === "/ar" ? "left-4 " : "right-4"
            } bg-black w-min p-1 rounded-full fixed bottom-20  cursor-pointer z-50`}
            onClick={handleScrollUpClick}
          >
            <IoIosArrowUp color="white" className="w-5 h-5 md:w-8 md:h-8" />
          </div>
          <div
            className={`flex gap-4 text-white font-bold bg-[#075E54] p-3 rounded-full cursor-pointer fixed bottom-7 ${
              pathname === "/ar" ? "left-4" : "right-4"
            } z-50`}
            onClick={handleCallClick}
          >
            <FaPhone color="white" className="w-5 h-5 md:w-5 md:h-5" />
            {t("conectWithUs")}
          </div>
        </>
      )}
    </>
  );
};

export default CustomerService;
