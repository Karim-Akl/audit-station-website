import HeroBackground from "@/components/helper/HeroBackground";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { TfiLocationPin } from "react-icons/tfi";
import { GoogleMapComponent } from "@/components/helper/googleMap/GoogleMapComponent";

export const metadata = {
  title: "Contact",
  description: "Contact Page",
};
export default function Contact() {
  return (
    <main className="mb-20">
      <HeroBackground title="Contact" />
      <section className="container">
        <div className="my-4 grid grid-cols-3 gap-4 items-center ">
          <div className="md:col-span-1 col-span-3 space-y-4 rounded-lg  text-card-foreground shadow-sm  ">
            <Card className="flex items-center bg-[#F5F5F5] p-4 ">
              <FiPhoneCall
                color="white"
                className=" text-5xl p-3 m-0 rounded-full bg-[#22B9DD]"
              />

              <CardContent className=" p-3">
                <h3 className="text-[16px] font-bold">Phone</h3>
                <div className="flex flex-col  text-[#5C5C5C] text-sm">
                  <span>+1 (123) 456-7890</span>
                  <span>+1 (123) 456-7890</span>
                </div>
              </CardContent>
            </Card>
            <Card className="flex items-center bg-[#F5F5F5] p-4 ">
              <HiOutlineMail
                color="white"
                className=" text-5xl p-3 m-0 rounded-full bg-[#22B9DD]"
              />
              <CardContent className=" p-3">
                <h3 className="text-lg font-bold">E-mail Address</h3>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center text-sm text-[#5C5C5C] space-x-2">
                    <Link href="#" prefetch={false}>
                      alma.lawson@example.com
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="flex items-center bg-[#F5F5F5] p-4 ">
              <TfiLocationPin
                color="white"
                className=" text-5xl p-3 m-0 rounded-full bg-[#22B9DD]"
              />
              <CardContent className=" p-3">
                <h3 className="text-lg font-bold">Address</h3>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center text-sm text-[#5C5C5C] space-x-2">
                    <span>1234 Street Name, City, State, 56789</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-[#F5F5F5] md:col-span-2 col-span-3">
            <CardHeader>
              <h2 className="text-2xl font-bold">Send us a Message</h2>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="md:flex items-center md:space-x-2 md:space-y-0 space-y-2">
                <Input placeholder="Name*" type="text" />
                <Input placeholder="E-mail*" type="email" />
              </div>
              <Input placeholder="Subject *" type="text" />

              <Textarea
                placeholder="Enter your message"
                className="min-h-[100px]"
              />
            </CardContent>
            <CardFooter>
              <Button className="bg-[#22B9DD] text-black font-bold  hover:bg-[#22b8dd86] ">
                Submit Now
              </Button>
            </CardFooter>
          </Card>
        </div>
        <GoogleMapComponent />
      </section>
    </main>
  );
}
