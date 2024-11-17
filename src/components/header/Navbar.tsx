import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { NavLink } from "./NavLink";
import Image from "next/image";
import Logo from "@../../../public/assets/vector.svg";
import { SearchInput } from "./searchInput";
import { Header } from "./header";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { VerifyCertificate } from "./VerifyCertificate";
import { getLocale, getTranslations } from "next-intl/server";
import AuthIconCheck from "./authIconCheck";
import { ModeToggle } from "./ModeToggle";
import { NavbarProps } from "@/lib/types/nav-bar";
import { useTheme } from "next-themes";

export const Navbar: React.FC<NavbarProps> = async ({
  isAuthenticated,
  username,
  image,
}) => {
  const locale = await getLocale();
  const t = await getTranslations("header");

  const links = [
    {
      id: 1,
      name: t("home"),
      href: "/",
      activeLink: "/",
    },
    {
      id: 2,
      name: t("finalwork"),
      href: `${locale}/about`,
      activeLink: "about",
    },
    {
      id: 3,
      name: t("whatbuy"),
      href: `${locale}/services`,
      activeLink: "services",
    },
    {
      id: 4,
      name: t("commonQuestion"),
      href: `${locale}/blogs`,
      activeLink: "blogs",
    },
    {
      id: 5,
      name: t("contact"),
      href: `${locale}/contact`,
      activeLink: "contact",
    },
  ];

  return (
    <div className="top-0   left w-full relative">
      <Header />
      <nav className=" top-0 left-0 right-0 z-10 ">
        <div className="flex">
          {/* Mobile Menu */}
          <MobileMenu
            links={links}
            locale={locale}
            icon={
              <AuthIconCheck
                username={username}
                image={image}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          {/* Mobile Menu */}
        </div>
        <div className="md:flex hidden py-4  justify-center  gap-4 md:gap-8 items-center  transition">
          <Link href="/">
            <Image height={200} width={200} src={Logo} alt="enlogo" />
          </Link>
          <NavLink locale={locale} links={links} />
          <SearchInput />
          <VerifyCertificate locale={locale} />
          <div className="flex items-center ms-0 ps-0 gap-4 text-[#767676]">
            <div className="">
              <ModeToggle />
            </div>
            <div className="rounded-full border border-[#767676] p-2 hover:bg-gray-400 hover:cursor-pointer">
              <Link href={`/${locale}/shoppingCart`}>
                <LiaShoppingBasketSolid size={22} />
              </Link>
            </div>
            <div>
              <AuthIconCheck
                username={username}
                image={image}
                isAuthenticated={isAuthenticated}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
