import Image from "next/image";
import React from "react";
import Logo from "@../../../public/assets/footer.png";
import AppStore from "@../../../public/assets/appstore.svg";
import GooglePlay from "@../../../public/assets/googleplay.svg";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
export const Footer: React.FC = () => {
  return (
    <div className="bg-[#1C1C1C] text-white w-full">
      <div
        className="w-10/12 h-full flex flex-col
       mx-auto"
      >
        <div className="flex flex-wrap justify-between text-[15px]">
          <ul className="text-sm">
            <li className="mt-[2rem] flex justify-between">
              <Image src={Logo} alt="logo" />
            </li>

            <li className="flex  max-w-60 flex-wrap my-[1rem]">
              <h6>Head Quarters:</h6>
              <p>
                1906, Grosvenor Business Bay Tower, Marasi Drive ,Business Bay,
                Dubai, UAE
              </p>
            </li>
            <li className="flex max-w-52  flex-wrap my-[1rem]">
              <h6>Our Branches:</h6>
              <p>
                12, Ooredoo Building, Alhkoud A Tijary st, Alhkoud, Muscat, Oman
              </p>
            </li>
          </ul>
          <ul className="my-[2rem]">
            <div className=" flex flex-col gap-4 ">
              <div className="text-xl text-lime-50 font-bold leading-none">
                Services
              </div>
              <div className="border-2 w-7"></div>
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
              <div className=" text-xl  text-lime-50 font-bold leading-none">
                Our Company
              </div>
              <div className="border-2 w-7"></div>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>FAQ</li>
            </div>
          </ul>
          <div className="my-[2rem] min-w-64">
            <div className="flex flex-col gap-4 ">
              <div className=" text-xl   text-lime-50   font-bold leading-none">
                Find Us On Social Media
              </div>
              <div className="border-2 w-7"></div>
              <p className="max-w-64 flex-wrap leading-none">
                Follow us on social media to get our latest news and updates
              </p>
              <div className="flex text-xl gap-2  items-center">
                <CiFacebook />
                <CiLinkedin />
                <CiInstagram />
                <CiFacebook />
                <CiLinkedin />
                <CiInstagram />
              </div>
              <div className="flex gap-1 items-center">
                <Image src={AppStore} alt="logo" />
                <Image src={GooglePlay} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-12 flex justify-center items-center mx-auto text-xs bg-[#242424]">
        <p>CopyRight @ Audit Station</p>
      </div>
    </div>
  );
};
