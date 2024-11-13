"use client";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import React from "react";

const Copyright: React.FC = () => {
  const t = useTranslations("contact");
  const {theme} = useTheme();
  // Add your component logic here

  return (
    <div
      className={`${
        theme == "dark" ? "bg-[#1A1A1A]" : "bg-[#eee]"
      } w-full h-12 flex justify-center items-center mx-auto text-xs`}
    >
      <p>CopyRight @ Audit Station</p>
    </div>
  );
};

export default Copyright;
