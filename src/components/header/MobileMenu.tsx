"use client";
import Link from "next/link";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { GlobalLanguage } from "./GolablLanguage";
import { useTranslations } from "next-intl";

const MobileMenu: React.FC = () => {
  const { pathname } = UseSearchParamsHook();
  const t = useTranslations("header");
  const NavItems =[
    {
      id: 1,
      name: t("home"),
      href: "/",
      activeLink: "",
    },
    {
      id: 2,
      name: t("finalwork"),
      href: `#about`,
      activeLink: "about",
    },
    {
      id: 3,
      name: t("whatbuy"),
      href: "#hoverEffect",
      activeLink: "hoverEffect"
    },

    {
      id: 4,
      name: t("commonQuestion"),
      href: "#services",
      activeLink: "services",
    },
    {
      id: 5,
      name: t("contact"),
      href: "#contact",
      activeLink: "contact",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="top-0 right w-full relative 	">
      <Button
        onClick={() => setOpen(!open)}
        className={`md:hidden fixed top-4  ${
          pathname === "/ar" ? "left-4" : "right-4 "
        }  items-end justify-end p-2  bg-black  border `}
      >
        <AlignJustify size={20} />
      </Button>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed  top-20 left-4 right-4 z-40 py-8 bg-black text-white drop-shadow-md">
          <div className="flex flex-col items-center space-y-6  font-bold">
          <GlobalLanguage className="lg:hidden flex" />
            {NavItems.map((item) => (
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
