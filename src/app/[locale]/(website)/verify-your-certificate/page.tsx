import React from "react";
import instractor from "@../../../public/assets/instractor.svg";
import { Card, CardContent } from "@/components/ui/card";
import { link } from "fs";
import HeroBackground from "@/components/helper/HeroBackground";

export const metadata = {
  title: "Verify certificate",
  description: "Verify your certificate Page",
};

export default function VerifyCertificate() {
  return (
    <main className="mb-20 relitive">
      <HeroBackground title="Verify your certificate" />
      <section className="container my-4 grid grid-cols-3 gap-4  ">VerifyCertificate</section>
    </main>
  );
}
