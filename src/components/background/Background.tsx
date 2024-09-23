"use client";
import React from "react";
import { ArrowBigDown, ArrowDown, ArrowUpRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import Logo1 from "@../../../public/assets/about/Rectangle.svg";
import Breadcrumb from "../ui/breadcrumb";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export const Background: React.FC = () => {
  const t = useTranslations("header");

  return (
    <div className="w-full bg-[url('../../../public/assets/background.png')] bg-gradient-* relative h-screen bg-fit text-white">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
      <span className="relative h-[40rem] flex items-center justify-center w-full group">
        <motion.h1
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl  px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <div className="z-50  text-lg text-white">
            <p>{t("backgroundTitle")}</p>
            <h1 className="leading-loose  md:text-5xl text-3xl my-4  text-red-300  font-bold ">
              <Highlight className="text-black dark:text-white px-3 py-2 ">
                <span className="text-white font-black">{t("elmohands")} </span>
                {t("backgroundDescription")}
              </Highlight>
            </h1>
          </div>
        </motion.h1>
        <Link
          href="tel:+9660575645308"
          className="absolute  flex items-center justify-center rounded-md z-50 md:my-6 gap-2 top-2/3 p-3 text-xl mx-auto  opacity-100 	drop-shadow-2xl font-black  text-blue"
        >
          {t("conectWithUs")}
          <PhoneCall className="animate-ping" size={16} />
        </Link>
      </span>
    </div>
  );
};
