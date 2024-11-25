import Image from "next/image";
import React from "react";
import Logo from "@../../../public/assets/footer.svg";
import AppStore from "@../../../public/assets/appstore.svg";
import GooglePlay from "@../../../public/assets/googlePlay.svg";
import { FloatingDockDemo } from "../helper/FloatingDock";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import Copyright from "./Copyright";
import { fetchData } from "@/lib/api/fetchData";
import { GetDataInServerSide } from "@/lib/actions/ServerActions";
export const Footer: React.FC = async () => {
  const { data, message } = await GetDataInServerSide({
    End_Point: `/api/public/settings`,
  });
  if (message) {
    console.error(message);
    return <div>Something went wrong</div>;
  }
  const locale = await getLocale();
  return (
    <footer className="relative  w-full ">
      <div
        className="w-10/12 h-full flex flex-col
       mx-auto"
      >
        <div className="flex flex-wrap justify-between text-[15px]">
          <ul className="text-sm">
            <li className="mt-[2rem] flex justify-between">
              <Image src={Logo} alt="logo" />
            </li>

            {/* <li className="flex  max-w-60 flex-wrap my-[1rem]">
              <h6>Head Quarters:</h6>
              <p className='ms-2'>{data?.head_quarters}</p>
            </li>
            <li className="flex max-w-52 flex-wrap my-[1rem]">
              <h6>Our Branches:</h6>
              {Array.isArray(data?.our_branches) && data?.our_branches?.map((address: string) => {
                return <p key={address}>{address}</p>;
              })}
            </li> */}
          </ul>
          <ul className="my-[2rem]">
            <div className=" flex flex-col gap-4 ">
              <div className="text-xl  font-bold leading-none">Services</div>
              <div className="border-2 w-7 border-[#1C1C1C]"></div>
              <li>Become a user</li>
              <li>Become an Accountant</li>
              <li>Get Certified</li>
              <li>Become a Company</li>
              <li>Become an Interviewer</li>
              <li>Become an Instructor</li>
              <li>Explore Courses</li>
              <li>Get a Job</li>
            </div>
          </ul>
          <ul className="my-[2rem]">
            <div className=" flex flex-col gap-4 text-sm">
              <div className=" text-xl   font-bold leading-none">
                Our Company
              </div>
              <div className="border-2 w-7 border-[#1C1C1C]"></div>
              <li>Contact Us</li>
              <li>About Us</li>
              <Link
                href={`/${locale}/privacy-policy` || '/'}
                target='_blank'
              >
                <li>Privacy Policy</li>
              </Link>
              <Link
                href={`/${locale}/terms-and-conditions` || '/'}
                target='_blank'
              >
                <li>Terms and Conditions</li>{' '}
              </Link>
              <li>Blogs</li>
              <li>Careers</li>
              <Link
                href={`/${locale}/faqs` || '/'}
                target='_blank'
              >
                <li>FAQ</li>
              </Link>
            </div>
          </ul>
          <div className="my-[2rem] min-w-64">
            <div className="flex flex-col gap-4 ">
              <div className=" text-xl font-bold leading-none">
                Find Us On Social Media
              </div>
              <div className="border-2 w-7 border-[#1C1C1C]"></div>
              <p className="max-w-64 flex-wrap leading-none">
                Follow us on social media to get our latest news and updates
              </p>
              <div className="flex text-xl gap-2  items-center">
                {/* <FloatingDockDemo data={data} /> */}
              </div>
              <div className='flex gap-1 items-center'>
                <Link
                  href={data?.app_store || '/'}
                  target='_blank'
                >
                  <Image
                    src={AppStore}
                    alt='logo'
                  />
                </Link>
                <Link
                  href={data?.google_play || '/'}
                  target='_blank'
                  className='max-w-36'
                >
                  <Image
                    src={GooglePlay}
                    alt='logo'
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};
