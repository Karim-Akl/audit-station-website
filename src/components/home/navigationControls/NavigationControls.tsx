"use client";
import { useLocale } from "next-intl";
import React, { useState, useEffect } from "react";
import {
  AiOutlineArrowUp,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaAngleUp } from "react-icons/fa";

const NavigationControls: React.FC = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false); 
  const locale = useLocale();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Toggle social icons visibility
  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full p-4">
      <div className="flex fixed bottom-10 left-10 z-50 items-center justify-center p-2  hover:opacity-80 transition-opacity delay-75   shadow-black m-auto"      >
        <button
          onClick={toggleIcons}
          className="flex items-center justify-center 
          p-2   
          bg-[#22B9DD] text-white rounded-lg 
          shadow-md shadow-black
          transition-shadow delay-75 ease-in-out hover:opacity-80"
        >
          <IoChatbubbleEllipsesOutline className="text-2xl" />
        </button>

        {/* The wrapper for icons */}
        <div
          className={`absolute bottom-12 mb-2 ml-2 ${
            locale == "ar" ? "right-0" : "left-0"
          } flex flex-col items-center space-y-2`}
        >
          <button
          
            className={`flex items-center justify-center p-2 bg-blue-500 
            hover:bg-blue-600 text-white rounded-full
            transition-transform  transform duration-300 ease-out ${
              showIcons
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-5 opacity-0 scale-90"
            }`}
          >
            <AiOutlinePhone className="text-2xl" />
          </button>
          <button
            className={`flex items-center justify-center p-2 bg-green-500 
            hover:bg-green-600 text-white rounded-full
            transition-transform  transform duration-300 ease-out ${
              showIcons
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-5 opacity-0 scale-90"
            }`}
          >
            <AiOutlineWhatsApp className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollToTop && ( 
        <button
          onClick={scrollToTop}
          className="flex  fixed bottom-10 right-10 z-50 items-center justify-center p-2 bg-[#22B9DD] hover:opacity-80 transition-opacity delay-75 text-white rounded-lg shadow-md shadow-black"
        >
          <FaAngleUp className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default NavigationControls;