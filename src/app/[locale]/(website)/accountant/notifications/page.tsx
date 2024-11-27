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
import Image from "next/image";
export default function About() {
  return (
    <div className="mb-20">
      <div className=" w-full py-2 mb-2 font-sans">
        <h2 className="text-4xl text-[#333333] font-semibold ml-4">Notifications</h2>

        <div className="flex items-center justify-between mt-4 ">
          <p className="  text-[#0F1A29] ml-4">13 Notification</p>
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

        <div className=" w-full px-4 py-2 gap-6  flex flex-col">
          <div className="flex  justify-between  items-center m-auto w-full hover:bg-[#E9F8FC] transition-all duration-300 py-3">

            <div className="flex gap-8 items-center m-auto w-[80%] ">
              <div>
                <Image src="/assets/13dc220cb58f262ca51ec226f6968b32.png" className="" alt="logo" width={50} height={50} />
              </div>
              <div>
                <h2 className="">Lorem ipsum </h2>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, id.</p>
              </div>
            </div>
            <div className=" w-[10%] flex  items-center m-auto">
              <p className="text-right ">1hour age</p>
            </div>
          </div>
          <div className="flex  justify-between  items-center m-auto w-full hover:bg-[#E9F8FC] transition-all duration-300 py-3">

            <div className="flex gap-8 items-center m-auto w-[80%] ">
              <div>
                <Image src="/assets/13dc220cb58f262ca51ec226f6968b32.png" className="" alt="logo" width={50} height={50} />
              </div>
              <div>
                <h2 className="">Lorem ipsum </h2>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, id.</p>
              </div>
            </div>
            <div className=" w-[10%] flex  items-center m-auto">
              <p className="text-right ">1hour age</p>
            </div>
          </div>
          <div className="flex  justify-between  items-center m-auto w-full bg-[#E9F8FC] transition-all duration-300 py-3">

            <div className="flex gap-8 items-center m-auto w-[80%] ">
              <div>
                <Image src="/assets/masage.png" className="" alt="logo" width={50} height={50} />
              </div>
              <div>
                <h2 className="">Lorem ipsum </h2>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, id.</p>
              </div>
            </div>
            <div className=" w-[10%] flex  items-center m-auto">
              <p className="text-right ">1hour age</p>
            </div>
          </div>
          <div className="flex  justify-between  items-center m-auto w-full">
            <div className=" w-[10%] flex  items-center m-auto">
              <p className="text-right ">1hour age</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
