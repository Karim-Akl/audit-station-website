import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@../../../public/assets/elmohands__1.png";
import Logo2 from "@../../../public/assets/elmohands__2.png";
import { Facebook, Instagram, PhoneCall, Twitter, Youtube } from "lucide-react";
import NavLogo from "../header/NavLogo";
import { getTranslations } from "next-intl/server";
import Copyright from "./Copyright";
import { FaWhatsapp } from "react-icons/fa6";
const Footer: React.FC = async () => {
  const t = await getTranslations("contact");
  return (
    <footer
      id="contact"
      className=" bg-[#F3F3F1] inset-0 bg-gradient-to-b from-black to-transparent text-white font-bold"
    >
      <div className="container px-4">
        {/* Main Content */}
        <div className=" flex w-full justify-center ">
          <div className="flex flex-col md:flex-row  md:justify-between py-12 border-b border-[#3E453E] w-[90%] md:w-[80%]">
            {/* Logo and Description */}
            <div className="mb-4 md:mb-0 flex flex-col gap-4">
              <Link href="/">
                <NavLogo />
              </Link>
              <p className="text-wrap break-words max-w-xl">
                {t("contactContent")}
              </p>
              <div className="flex text-sm space-x-4">
                <p className="">{t("FollowUS")}</p>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Facebook color="white" size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Twitter color="white" size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Instagram color="white" size={16} />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Youtube color="white" size={16} />
                </a>
              </div>
            </div>
            {/* Main Links */}
            <div className="flex flex-col md:space-x-16 text-sm">
              <div className="flex flex-col gap-6 mb-4 md:mb-0">
                <h4>{t("importsLink")}</h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link href="/">{t("Home")}</Link>
                  </li>
                  <li>
                    <Link href="#projects">{t("FinalWork")}</Link>
                  </li>
                  <li>
                    <Link href="#about">{t("CommonQuestions")}</Link>
                  </li>
                  <li>
                    <Link href="#contact">{t("WhatToBuy")}</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col md:space-x-16 text-sm">
              <div className="flex flex-col gap-6 mb-4 md:mb-0">
                <h4>{t("contactUs")}</h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link
                      href="tel:+966575645308"
                      className="  flex items-center justify-center gap-2  "
                    >
                      {t("contactNumber")}
                      <PhoneCall className="animate-ping" size={14} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://api.whatsapp.com/send/?phone=966575645308&text&type=phone_number&app_absent=0"
                      className="flex items-center justify-center gap-2"
                    >
                      {t("whatsapp")}
                      <FaWhatsapp className="animate-ping" size={14} />
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="my-2 text-center ">
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
