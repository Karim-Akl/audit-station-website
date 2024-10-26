"use client";
import Link from "next/link";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { GlobalLanguage } from "./GolablLanguage";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Logo from "@../../../public/assets/vector.svg";
import { NavLinkProps } from "@/lib/types";
import { GoPerson } from "react-icons/go";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { MdOutlineDarkMode } from "react-icons/md";
import { SearchInput } from "./searchInput";
import { VerifyCertificate } from "./VerifyCertificate";

const MobileMenu: React.FC<NavLinkProps> = ({ locale, links }) => {
  const { pathname } = UseSearchParamsHook();
  const t = useTranslations("header");

  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden  p-2  w-full   	">
      <div className="flex justify-between gap-2 mb-2 ">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setOpen(!open)}
            className={` bg-white   top-4  ${
              pathname === "/ar" ? "left-4" : "right-4 "
            }  items-end justify-end p-2    border `}
          >
            <AlignJustify color="#666666" size={20} />
          </Button>
          <Link href="/">
            <Image height={120} width={120} src={Logo} alt="enlogo" />
          </Link>
        </div>
        <div className="flex ms-0 ps-0 gap-2">
          <div className="rounded-full border border-[#767676] p-2 transition-all hover:rotate-45 hover:cursor-pointer hover:bg-gray-400 ">
            <MdOutlineDarkMode size={20} />
          </div>
          <div className="rounded-full border border-[#767676] p-2 hover:bg-gray-400 hover:cursor-pointer">
            <Link href={`/${locale}/shoppingCart`}>
              {" "}
              <LiaShoppingBasketSolid size={20} />
            </Link>
          </div>
          <div className="rounded-full border border-[#767676] p-2 hover:bg-gray-400 hover:cursor-pointer">
            <Link href={`/${locale}/login`}>
              {" "}
              <GoPerson size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between  items-center">
        <SearchInput />
        <VerifyCertificate locale={locale} />
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-30 w-full left-4 right-4 z-40 py-4    drop-shadow-md">
          <div className="flex flex-col items-center space-y-6 p-4 w-80  bg-[#666666] font-bold">
            <GlobalLanguage className="lg:hidden flex" />
            {links.map((item) => (
              <Link
                key={item.id}
                onClick={() => setOpen(!open)}
                className="font-medium text-base text-white"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* Mobile Menu */}
    </div>
  );
};

export default MobileMenu;
