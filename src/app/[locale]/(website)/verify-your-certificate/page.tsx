import React from "react";
import instractor from "@../../../public/assets/instractor.svg";
import { Card, CardContent } from "@/components/ui/card";
import { link } from "fs";
import HeroBackground from "@/components/helper/HeroBackground";
import { SearchInput } from "@/components/header/searchInput";
import { Button } from "@/components/ui/button";
import NavigationControls from "@/components/home/navigationControls/NavigationControls";

export const metadata = {
  title: "Verify certificate",
  description: "Verify your certificate Page",
};

export default function VerifyCertificate() {
  return (
    <main className="mb-20 relitive ">
      <HeroBackground title="Verify your certificate" />
      <section className="container flex flex-col justify-center w-full gap-2 border border-[#eee] p-8 my-8 shadow-md ">
        <h1 className="text-[31px] font-semibold">
          Enter certificate ID / barcode number
        </h1>
        <form className="flex flex-col gap-2">
          <SearchInput />

          <Button className="bg-[#22B9DD] hover:bg-[#22b8dd7a] text-white p-2 w-full">Search</Button>
        </form>
      </section>
      <NavigationControls />

    </main>
  );
}
