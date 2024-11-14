"use client";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { useTheme } from "next-themes";
export const Header: React.FC = () => {
  const { pathname, router } = UseSearchParamsHook();
  const {theme} = useTheme();
  const handlechangeLanguage = (value: string) => {
    router.push(`/${value}`);
  };
  const handlechangeCurrency = (value: string) => {
    console.log(value);
  };
  return (
    <div className={` w-full ${theme == "dark" ? "bg-[#1A1A1A]" : "bg-[#eee]"}`}>
    <div className="container w-full flex-col justify-center items-start gap-2.5">
      <div className="md:container self-stretch  md:justify-between items-center md:inline-flex">
        <div className="justify-start items-center gap-8 flex ">
          <div className="md:justify-start justify-center items-center gap-1 flex">
            <FaMapLocationDot size={20} />
            <div className=" md:text-[13px] text-[10px] md:font-medium ">
              ul. Skrajna 7, Szczecin 70-886
            </div>
          </div>
          <div className="md:justify-start justify-center items-center gap-1 flex">
            <MdOutlineMail size={20} />
            <div className=" md:text-[13px] text-[10px] md:font-medium ">
              alma.lawson@example.com
            </div>
          </div>
        </div>
        <div className="md:justify-start justify-around  items-center md:gap-12 md:flex hidden">
          <div className="md:justify-start justify-center items-center  md:gap-2 md:flex">
            <div className=" text-[13px] font-medium font-sans">Follow Us On :</div>
            <div className="justify-start  items-center gap-1 flex">
              <CiFacebook size={24} />
              <CiLinkedin size={24} />
              <CiInstagram size={24} />
              <FaXTwitter size={24} />
            </div>
          </div>
          <div className="md:justify-start justify-center  items-center gap-4 flex">
            <div className="justify-start items-center gap-2 flex border-e   ">
              <Select onValueChange={handlechangeLanguage} defaultValue="en">
                <SelectTrigger
                  className={cn(
                    "bg-blue border-none focus:ring-offset-0 focus:ring-0    "
                  )}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ar">Arabic</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <Select onValueChange={handlechangeCurrency} defaultValue="USD">
                <SelectTrigger
                  className={cn(
                    "bg-blue border-none focus:ring-offset-0 focus:ring-0    "
                  )}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="USD">$-USD</SelectItem>
                    <SelectItem value="EGY">$-Egy</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
