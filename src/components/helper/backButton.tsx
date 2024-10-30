"use client";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { MdKeyboardArrowLeft } from "react-icons/md";

export const BackButton = () => {
  let { router } = UseSearchParamsHook();
  return (
    <MdKeyboardArrowLeft
      onClick={(e) => {
        e.preventDefault();
        router.back();
      }}
      className="text-3xl cursor-pointer"
    />
  );
};
