"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import logo from "@../../../public/assets/uniqelogo.png";
import step1 from "@../../../public/assets/step1.png";
import step2 from "@../../../public/assets/step2.png";
import step3 from "@../../../public/assets/step3.png";
import { useTranslations } from "next-intl";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
export function AppleCardsCarouselDemo() {
  const t = useTranslations("howtobuy");
  const { pathname } = UseSearchParamsHook();

  const data = [
    {
      id:1 ,
      category: t("checkproduct"),
      title: t("checkproductContent"),
      Image: step1,
      content: <DummyContent />,
    },
    {
      id:2 ,
      category: t("rateproduct"),
      title: t("rateproductContent"),
      Image: step2,
      content: <DummyContent />,
    },

    {
      id:3 ,
      category: t("buyproduct"),
      title: t("buyproductContent"),
      Image: step3,
      content: <DummyContent />,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.id} card={card} index={index} />
  ));

  return (
    <div id="services" className="w-full h-full py-20">
      <h2
        className={`max-w-7xl ${
          pathname === "/ar" ? "pl-4" : "pr-4"
        } mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans`}
      >
        {t("howtobuyTitle")}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  const t = useTranslations("howtobuy");
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
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800  rounded-3xl mb-2"
          >
            {/* <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p> */}
            <Image
              src={logo}
              alt="Macbook mockup from Aceternity UI"
              height="600"
              width="500"
              className="md:w-full md:h-full h-full w-full mx-auto object-contain"
            />
            <div className="flex items-center justify-center gap-4">
              <Link
                href="tel:+9660575645308"
                className="flex button items-center mt-4 px-2 py-2 gap-2 font-bold bg-[#2D2D2D] text-white rounded hover:bg-blue-600"
              >
                {t("howtobuyNumber")}
                <PhoneCall className="animate-ping" size={16} />
              </Link>
              <button
                onClick={handleWhatsappClick}
                className="flex button items-center mt-4 px-2 py-2 gap-2 font-bold bg-[#2D2D2D] text-white rounded hover:bg-blue-600"
              >
                <FaWhatsapp size={18} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
