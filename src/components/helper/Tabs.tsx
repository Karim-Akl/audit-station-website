"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoIosArrowForward } from "react-icons/io";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import {
  BsChatDots,
  BsCollectionPlay,
  BsPersonVcard,
  BsPersonVideo3,
} from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineLogout, MdOutlineNotificationsActive } from "react-icons/md";
import { Button } from "../ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";

export function BlogsTabs() {
  const { pathname, router, searchParams } = UseSearchParamsHook();
  const pushTaptoParams = (e: string) => {
    const params = new URLSearchParams();
    params.set("category", e);
    router.push(`${pathname}?${params.toString()}`);
    // router.push(selectedTab);
  };

  return (
    <Tabs
      className="inline-block   "
      defaultValue={Blogtabs[0].value}
      onValueChange={(e) => {
        pushTaptoParams(e);
      }}
    >
      <TabsList className="flex flex-col gap-5 items-start justify-end ">
        <h2 className="font-bold text-xl text-[#0F1A29] ">Category</h2>

        {Blogtabs.map((tab) => (
          <TabsTrigger
            className="data-[state=active]:border-none data-[state=active]:font-bold items-start justify-start bordre-b-0 p-0 text-[16px] font-normal text-[#5C5C5C]"
            key={tab.value}
            value={tab.value}
          >
            <IoIosArrowForward color="#22B9DD" className="inline-block mr-2" />
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

const Blogtabs = [
  { id: 1, title: "All", value: "all" },
  { id: 2, title: "Education", value: "education" },
  { id: 3, title: "Evaluation", value: "evaluation" },
  { id: 4, title: "Health", value: "health" },
  { id: 5, title: "Involvement", value: "involvement" },
  { id: 6, title: "Psychology", value: "psychology" },
  { id: 6, title: "Strategies", value: "strategies" },
  { id: 6, title: "Technology", value: "technology" },
];
export function ProfileTabs({ Name }: { Name: string }) {
  const { pathname, router } = UseSearchParamsHook();
  const lastRoute = pathname.split("/").pop();

  const locale = useLocale();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <Tabs className="inline-block " defaultValue={lastRoute}>
      <TabsList className="flex flex-col gap-5 items-start justify-end  ">
        <p className="text-[16px] text-[#0F1A29] ">
          Hello , <span>{Name}</span>
        </p>

        {profiletabs.map((tab) => (
          <Link key={tab.value} href={`/${locale}/profile/${tab.value}`}>
            <TabsTrigger
              className="data-[state=active]:border-none data-[state=active]:font-bold data-[state=active]:bg-[#22B9DD] data-[state=active]:text-white w-full  items-center justify-start bordre-b-0 px-4 gap-2 text-lg font-medium  text-[#151515]"
              value={tab.value}
            >
              {tab.icon}
              {tab.title}
            </TabsTrigger>
          </Link>
        ))}
        <Button
          className="bg-white hover:bg-white items-center justify-start bordre-b-0 px-4 gap-2 text-lg font-medium  text-[#F55157]"
          value="logout"
          onClick={() => {
            handleLogOut();
          }}
        >
          <MdOutlineLogout />
          Log out
        </Button>
      </TabsList>
    </Tabs>
  );
}
const profiletabs = [
  {
    id: 1,
    title: "Dashboard",
    value: "dashboard",
    icon: <BsPersonVideo3 />,
  },
  { id: 2, title: "Payments", value: "payments", icon: <GiTwoCoins /> },
  {
    id: 3,
    title: "Enrolled Courses",
    value: "enrolled-courses",
    icon: <BsCollectionPlay />,
  },
  {
    id: 4,
    title: "Certificates",
    value: "certificates",
    icon: <PiCertificate />,
  },
  { id: 5, title: "Reviews", value: "reviews", icon: <TfiAnnouncement /> },
  {
    id: 6,
    title: "Notifications",
    value: "notifications",
    icon: <MdOutlineNotificationsActive />,
  },
  { id: 6, title: "Chat", value: "chat", icon: <BsChatDots /> },
  { id: 6, title: "Profile", value: "profile", icon: <BsPersonVcard /> },
];