import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { GlobalLanguage } from "./GolablLanguage";
import { NavLink } from "./NavLink";
import Image from "next/image";
import Logo from "@../../../public/assets/vector.svg";
import { SearchInput } from "./searchInput";
import { Header } from "./header";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { GoPerson } from "react-icons/go";
import { MdOutlineDarkMode } from "react-icons/md";
import { VerifyCertificate } from "./VerifyCertificate";

export default async function Navbar() {
  return (
    <div className="top-0  left w-full relative">
      <div className="bg-[#EEE] w-full">
        <Header />
      </div>
      <nav className=" top-0 left-0 right-0 z-10">
        <div className="flex my-4 justify-center gap-4 md:gap-8 items-center transition">
          <Link href="/">
            <Image height={150} width={150} src={Logo} alt="enlogo" />
          </Link>
          <NavLink />
          <SearchInput />
          <VerifyCertificate />
          <div>
            {/* Mobile Menu */}
            <MobileMenu />
            {/* Mobile Menu */}
          </div>
          <div className="flex ms-0 ps-0 gap-4">
            <div className="rounded-full border border-[#767676] p-1 transition-all hover:rotate-45 hover:cursor-pointer hover:bg-gray-400 ">
              <MdOutlineDarkMode size={22} />
            </div>
            <div className="rounded-full border border-[#767676] p-1 hover:bg-gray-400 hover:cursor-pointer">
              <LiaShoppingBasketSolid size={22} />
            </div>
            <div className="rounded-full border border-[#767676] p-1 hover:bg-gray-400 hover:cursor-pointer">
              <GoPerson size={22} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
