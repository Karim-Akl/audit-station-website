import HeroBackground from "@/components/helper/HeroBackground";
import Image from "next/image";
import React from "react";
import banner from "@/../public/assets/about/logoBanner.svg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import TitleSubtitle from "@/components/aboutUs/TitleSubtitle";
import yellowCircle from "@/../public/assets/leftYellowCircle.svg";
import { revalidateTime } from "@/lib/constants/constants";
import { GetDataInServerSide } from "@/lib/actions/ServerActions";
export const metadata = {
  title: "About",
  description: "About Page",
};
export default async function About() {
  const { data, message } = await GetDataInServerSide({
    End_Point: `/about_us`,
    ISAddAuthHeaders: false,
    ExtraMethod: {
      next: { revalidate: revalidateTime }, // Revalidate every 5 minutes
    },
  });
  if (!data) {
    return (
      <p className="flex h-screen w-full items-center justify-center bg-secondary-500 font-coachella text-4xl text-primary-400 md:text-[72px] ">
        {message}
      </p>
    );
  }
  return (
    <div className="mb-20">
      <HeroBackground title="about us" />
      <div className="mx-[2%] mt-10">
        <Image src={banner} alt="banner" className="w-full" loading="lazy" />
        <div className="mt-10">
          <TitleSubtitle
            title="Who is Audit Station     . . . ?!"
            subTitle="Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet"
          />
          <TitleSubtitle
            title="Our Mission"
            subTitle="Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua."
          />
          <TitleSubtitle
            title="What We Offer"
            subTitle="Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua."
          />
          <div className="relative w-full h-[350px]">
            <Image
              src={yellowCircle}
              alt="yellow circle"
              className="absolute right-[-2%] bottom-0 h-[500px]"
            />
            <div className="relative rounded-xl bg-[#E6F7F9] w-full h-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
