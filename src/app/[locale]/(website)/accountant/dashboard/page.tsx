import Image from "next/image";
import React from "react";
import fristIcon from "@/../public/assets/profile/Background+Border.svg";
import secondIcon from "@/../public/assets/profile/Background+Border (1).svg";
import thirdIcon from "@/../public/assets/profile/Background+Border (2).svg";
export const metadata = {
  title: "Dashboard | Instructor",
  description: "dashboard Page",
};
export default function ProfileDashboard() {
  return (
    <div className="mb-20 md:p-2 ">
      <div className="border-b w-full py-2 mb-2">
        <h2 className="text-4xl text-[#333333] font-semibold">Statistics</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 ">
        <div className="flex flex-col gap-4 items-center justify-center rounded-lg  transition duration-300  py-10 px-14 hover:bg-[#22B9DD] text-[#333333] shadow-box-shadow  hover:shadow_hover hover:text-white ">
          <Image src={fristIcon} alt="logo" width={100} height={100} />
          <p className=" text-3xl font-semibold">4</p>
          <h3 className="text-2xl  font-semibold">Job Offers</h3>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-lg  py-10 px-14 hover:bg-[#22B9DD] text-[#333333] shadow-box-shadow  hover:shadow_hover hover:text-white ">
          <Image src={secondIcon} alt="logo" width={100} height={100} />
          <p className=" text-3xl font-semibold">201346</p>
          <h3 className="text-2xl  font-semibold">Coins</h3>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-lg py-10 px-14 hover:bg-[#22B9DD] text-[#333333] shadow-box-shadow  hover:shadow_hover hover:text-white ">
          <Image src={fristIcon} alt="logo" width={100} height={100} />
          <p className=" text-3xl font-semibold">4</p>
          <h3 className="text-2xl  font-semibold">Favorite Jobs</h3>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-lg  py-10 px-14 hover:bg-[#22B9DD] text-[#333333] shadow-box-shadow  hover:shadow_hover hover:text-white ">
          <Image src={secondIcon} alt="logo" width={100} height={100} />
          <p className=" text-3xl font-semibold">10</p>
          <h3 className="text-2xl  font-semibold">Interviews</h3>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-lg  py-10 px-14 hover:bg-[#22B9DD] text-[#333333] shadow-box-shadow  hover:shadow_hover   hover:text-white ">
          <Image src={thirdIcon} alt="logo" width={100} height={100} />
          <p className=" text-3xl font-semibold  font-sans">2</p>
          <h3 className="text-2xl  font-semibold font-sans">References</h3>
        </div>
      </div>
    </div>
  );
}
