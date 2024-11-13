import React from "react";
import { SearchInput } from "@/components/header/searchInput";
export const metadata = {
  title: "Enrolled Courses | User",
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
