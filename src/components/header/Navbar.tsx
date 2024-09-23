import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { GlobalLanguage } from "./GolablLanguage";
import { NavLink } from "./NavLink";
import Image from "next/image";
import Logo from "@../../../public/assets/vector.svg";
import { MdOutlineMail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

export default async function Navbar() {
  return (
    <div className="top-0  left w-full relative">
      <nav className="  absolute top-0 left-0 right-0 z-10">
        <div className="bg-[#2e2e2e] text-white h-9 w-full flex-col justify-center items-start gap-2.5 inline-flex">
          <div className="container self-stretch  justify-between items-center inline-flex">
            <div className="justify-start  items-center gap-8 flex">
              <div className="justify-start items-center gap-1 flex">
                <FaMapLocationDot />
                <div className=" text-[13px] font-medium ">ul. Skrajna 7, Szczecin 70-886</div>
              </div>
              <div className="justify-start items-center gap-1 flex">
                <MdOutlineMail />
                <div className=" text-[13px] font-medium ">alma.lawson@example.com</div>
              </div>
            </div>
            <div className="justify-start items-center gap-12 flex">
              <div className="justify-start items-center gap-2 flex">
                <div className=" text-[13px] font-medium ">Follow Us On :</div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="w-6 h-6 p-[2.25px] justify-center items-center flex" />
                  <div className="w-6 h-6 p-[2.25px] justify-center items-center flex" />
                  <div className="w-6 h-6 p-[2.25px] justify-center items-center flex" />
                  <div className="w-6 h-6 pl-[3.74px] pr-[3.75px] pt-[3px] pb-[2.99px] justify-center items-center flex" />
                </div>
              </div>
              <div className="justify-start items-center gap-4 flex">
                <div className="justify-start items-center gap-2 flex">
                  <div className=" text-[13px] font-medium ">English</div>
                  <div className="w-5 h-5 px-[3.12px] pt-[6.87px] pb-[5.62px] justify-center items-center flex" />
                </div>
                <div className="w-9 h-[0px] origin-top-left rotate-90 border border-[#a6a6a6]"></div>
                <div className="justify-start items-center gap-2 flex">
                  <div className=" text-[13px] font-medium ">$-USD</div>
                  <div className="w-5 h-5 px-[3.12px] pt-[6.87px] pb-[5.62px] justify-center items-center flex" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex my-4 justify-around items-center transition">
          <Link href="/">
            <Image height={150} width={150} src={Logo} alt="enlogo" />
          </Link>
          <NavLink />
          <div>
            {/* Mobile Menu */}
            <MobileMenu />
            {/* Mobile Menu */}
          </div>
          <GlobalLanguage className="hidden lg:flex" />
        </div>
      </nav>
    </div >
  );
}
