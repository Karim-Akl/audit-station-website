import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Ellipse from "@../../../public/assets/Ellipse 8328.svg";

import cartempaty from "@/../public/assets/cartempaty.svg";
import { coursesCart } from "@/app/[locale]/(website)/shoppingCart";
import Link from "next/link";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { BsCollectionPlay } from "react-icons/bs";
import { TbClockHour3 } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { getLocale } from "next-intl/server";
import { FaviroteJobs } from "@/app/[locale]/(website)/accountant/favoriteJobs";
import { IoCheckmark, IoCloseOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { GoBookmark } from "react-icons/go";
import { IoIosBookmark } from "react-icons/io";

const JobOfferCard: React.FC = async () => {
  const locale = await getLocale();
  return (
    <div className="w-full mt-4  flex flex-col space-y-8  ">
      {FaviroteJobs.length > 0 ? (
        FaviroteJobs.map((cart) => (
          <Card
            key={cart.id}
            className="  rounded-lg border border-[#EBEBEB] px-2 py-6 hover:bg-[#22B9DD] hover:text-white"
          >
            <CardContent className="md:flex  items-start gap-4  ">
              <Image
                src={cart.imageUrl}
                width={100}
                height={100}
                alt={cart.imageUrl}
              />

              <div className="w-full flex flex-col space-y-4">
                <div className="flex justify-between items-center ">
                  <div className="font-normal text-xl  text-wrap ">
                    {cart.category}
                  </div>
                  <div className="flex items-center gap-3   ">
                    <Button className=" p-2 bg-[#E9F8FC] text-[#22B9DD] border border-[#22B9DD]">
                      {/* <GoBookmark size={20} /> */}
                      <IoIosBookmark size={20} />
                    </Button>
                    <Button className="flex items-center text-base font-semibold gap-2 text-[#AE3A3E]  bg-[#FEEEEE]  ">
                      reject
                      <IoCloseOutline size={20} />
                    </Button>
                    <Button className="flex items-center text-base font-semibold gap-2 text-[#22B9DD] bg-[#E7F0FA]  ">
                      Accept
                      <IoCheckmark size={20} />
                    </Button>
                  </div>
                </div>
                <div className="flex w-full justify-between items-center ">
                  <div className="">
                    <div className="flex items-center gap-3  ">
                      <h1 className=" text-2xl font-medium">{cart.title}</h1>
                      <span className="text-[#22B9DD] bg-[#E9F8FC] text-sm rounded-sm">
                        Time Remaining: {cart.TimeRemaining}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-10 font-normal text-sm ">
                  <div className="flex items-center gap-1">
                    <BsCollectionPlay />
                    <p>{cart.leasons} Lessons</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <TbClockHour3 />
                    <p>{cart.houre} Hours</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <PiStudent />
                    <p>{cart.students} Students</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <PiStudent />
                    <p>{cart.students} Students</p>
                  </div>
                </div>
                <div className="text-base text-[#5C5C5C] font-normal ">
                  {cart.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="mx-[2%] mt-10 relative">
          <div className="flex flex-col items-center justify-center bg-white shadow-lg  my-10  max-w-sm mx-auto">
            <div className="my-4">
              {/* Icon or Image */}
              <Image
                src={cartempaty} // Replace with the actual path to your image/icon
                alt="Cart is empty"
                width={100}
                height={100}
                className="object-cover w-64"
              />
            </div>
            <div className="text-center text-white bg-[#22B9DD] w-full py-4 rounded-b-2xl ">
              <h2 className="text-lg md:text-3xl font-bold ">Cart is empty!</h2>
              <p className="text-lg md:text-lg  mt-2">
                Please add some courses in your cart.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobOfferCard;
