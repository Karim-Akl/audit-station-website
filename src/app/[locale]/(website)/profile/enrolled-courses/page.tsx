import Image from "next/image";
import React from "react";
import banner from "@/../public/assets/about/logoBanner.svg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import TitleSubtitle from "@/components/aboutUs/TitleSubtitle";
import yellowCircle from "@/../public/assets/leftYellowCircle.svg";
import SecondHeroBackground from "@/components/helper/SecondHeroBackground";
import { SearchInput } from "@/components/header/searchInput";
export const metadata = {
  title: "Enrolled Courses | Profile",
  description: "Enrolled Courses Page",
};
export default function About() {
  return (
    <div className="mb-20">
      <div className=" w-full border-b py-2 mb-2 font-sans">
        <h2 className="text-4xl text-[#333333] font-semibold">
          Enrolled Courses
        </h2>
      </div>
      <SearchInput />
    </div>
  );
}
