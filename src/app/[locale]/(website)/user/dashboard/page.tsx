import Image from "next/image";
import React from "react";
import firstIcon from "@/../public/assets/profile/Background+Border.svg";
import secondIcon from "@/../public/assets/profile/Background+Border (1).svg";
import thirdIcon from "@/../public/assets/profile/Background+Border (2).svg";
import fourthIcon from "@/../public/assets/profile/Background+Border (3).svg";
import { fetchData } from "@/lib/api/fetchData";
export const metadata = {
  title: "Dashboard | User",
  description: "dashboard Page",
};
export default async function ProfileDashboard() {
  const profileData = await fetchData({endPoint: '/auth/profile'})
  console.log('profile data: ', profileData)
  return (
    <div className="mb-20 md:p-2 ">
      <div className="border-b w-full py-2 mb-2">
        <h2 className="text-4xl text-[#333333] font-semibold">Statistics</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 ">
        <div className="flex flex-col gap-4 items-center justify-center  py-10 px-14 hover:bg-[#22B9DD] text-[#333333] shadow-box-shadow  hover:shadow_hover hover:text-white ">
          <Image src={firstIcon} alt="logo" width={100} height={100} />

          <p className=" text-3xl font-semibold">10</p>
          <h3 className="text-2xl  font-semibold">Enrolled Courses</h3>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center  py-10 px-14 hover:bg-[#22B9DD] text-[#333333] shadow-box-shadow  hover:shadow_hover hover:text-white ">
          <Image src={secondIcon} alt="logo" width={100} height={100} />

          <p className=" text-3xl font-semibold">{profileData ? profileData.coins : 0}</p>
          <h3 className="text-2xl  font-semibold">Coins</h3>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center  py-10 px-14 hover:bg-[#22B9DD] text-[#333333] shadow-box-shadow  hover:shadow_hover   hover:text-white ">
          <Image src={thirdIcon} alt="logo" width={100} height={100} />

          <p className=" text-3xl font-semibold">10</p>
          <h3 className="text-2xl  font-semibold">Certificates</h3>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center  py-10 px-14 hover:bg-[#22B9DD] text-[#333333]  shadow-box-shadow  hover:shadow_hover hover:text-white ">
          <Image src={fourthIcon} alt="logo" width={100} height={100} />

          <p className=" text-3xl font-semibold">10</p>
          <h3 className="text-2xl  font-semibold">Order History</h3>
        </div>
      </div>
    </div>
  );
}
