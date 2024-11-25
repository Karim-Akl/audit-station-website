import React from "react";
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
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";
export const metadata = {
  title: "Notfication | Instructor",
  description: "Notfication Page",
};
export default function About() {
  return (
    <div className="mb-20">
      <div className=" w-full py-2 mb-2 font-sans">
        <h2 className="text-4xl text-[#333333] font-semibold">Notifications</h2>

        <div className="flex items-center justify-between mt-4 flex-nowrap">
          <p className="  text-[#0F1A29]">13 Notification</p>
          <div className="flex  items-center   ">
            <p className="text-[#5C5C5C]  ">Sort BY :</p>
            <Select defaultValue="all">
              <SelectTrigger
                className={cn(
                  "bg-blue text-bold border-none focus:ring-offset-0 focus:ring-0    "
                )}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Notifications</SelectItem>
                  <SelectItem value="new">New Notifications</SelectItem>
                  <SelectItem value="old">Old Notifications</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="bg-white hover:bg-white">
              <RiDeleteBin6Line className="text-3xl  border rounded-sm p-1 border-[#F55157] text-[#F55157]" />
            </Button>
          </div>
        </div>
        <div className="bg-[#E9F8FC]">
          <div></div>
        </div>
      </div>
    </div>
  );
}
