"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import React from "react";
import { NavLinkItem, NavLinkProps } from "@/lib/types";

export const NavLink: React.FC<NavLinkProps> = ({ links }) => {
  const { pathname } = UseSearchParamsHook();

  function FilterPath() {
    
    
    const pathSegment = pathname.split("/")[2];
    return pathSegment === undefined ? "/" : parseInt(pathSegment) ? "/" : pathSegment;
  }
  function isActive(active?: string): boolean {
    
    return active === FilterPath();
  }

  const renderLinks = (links: NavLinkItem[]) => {
    return links.map((link) => (

      <div key={link.id} className="relative  group  ml-2">
        <div className="flex items-center   transition duration-800 delay-150 hover:delay-300">
          <Link
            href={`/${link.href}`}
            className={` rounded-md flex  items-center relative transition duration-400   hover:text-[#1fa8c9] `}
          >
            <p
              className={` capitalize leading-relaxed flex items-center ${
                isActive(link.activeLink) && "text-[#1fa8c9]"
              }`}
            >
              {link.name}
              {link.children && <ChevronDown strokeWidth={1} size={16} />}
            </p>
          </Link>
        </div>

        {link.children && link.children.length > 0 && (
          <div className="absolute left-0 top-full hidden group-hover:block   rounded-md p-4 transition duration-300">
            <div className="link-children flex flex-col text-sm text-[#333333] gap-3  ">
              {renderLinks(link.children)}
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <nav className="hidden lg:flex md:space-x-3 space-x-4 text-lg  ">
      {renderLinks(links)}
    </nav>
  );
};
