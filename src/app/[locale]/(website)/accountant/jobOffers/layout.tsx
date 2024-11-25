import React from "react";
import { DropdownMenuCheckboxes } from "@/components/helper/dropdownMenuCheckboxes";

export const metadata = {
  title: "Job Offers | Accountant",
  description: "Job Offers Page",
};
export default function JobOffersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="w-full py-2 mb-2 font-sans">
        <h2 className="text-4xl text-[#333333] font-semibold">Job Offers</h2>
        <div className="flex items-center justify-between ">
          <p>13 offer</p>
          <div className="flex items-center gap-4 w-48">
            <span>sort By:</span>
            <DropdownMenuCheckboxes />
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
