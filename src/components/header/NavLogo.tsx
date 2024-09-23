"use client";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import Image from "next/image";
import React from "react";
import Logo from "@../../../public/assets/elmohands__1.png";
import Logo2 from "@../../../public/assets/elmohands__2.png";

const NavLogo: React.FC = () => {
  const { pathname } = UseSearchParamsHook();
 
  return (
    <>
      {pathname ===  "/ar" ? <Image height={150} width={150} src={Logo} alt="enlogo" /> : <Image height={150} width={150} src={Logo2} alt="enlogo" />}
    </>
  );
};

export default NavLogo;
