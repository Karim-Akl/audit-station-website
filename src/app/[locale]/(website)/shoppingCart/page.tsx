import HeroBackground from "@/components/helper/HeroBackground";
import React from "react";
import Image from "next/image";
import cartempaty from "@/../public/assets/cartempaty.svg";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { BsArrowRightShort } from "react-icons/bs";
import { Card, CardContent } from "@/components/ui/card";
import { shopping } from ".";
export const metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart Page",
};
export default async function ShoppingCart() {
  const locale = await getLocale();
  return (
    <main className="mb-20">
      <HeroBackground title="Shopping Cart" />
      <div className="container w-full grid grid-cols-4  ">
        {shopping.length > 0 ? (
          shopping.map((cart) => (
            <Link
              key={cart.id}
              href={`/${locale}/top-courses/${cart.id}`}
              className="bg-white rounded-2xl border-1 border-[#E2E8F0] col-span-3 "
            >
              <Card className=" p-0 rounded-xl">
                <CardContent className="flex p-4">
                  <Image
                    src={cart.imageUrl}
                    width={100}
                    height={100}
                    alt={cart.name}
                    className=" w-64 h-100"
                  />
                  <div className="w-full flex flex-col justify-between gap-3 px-2 mb-4">
                    <div className="flex justify-between items-end ">
                      <div className="">
                        <div className="font-bold text-xl max-w-[18rem] text-wrap ">
                          {cart.title}
                        </div>
                        <p className="text-gray-700  text-base">
                          By {cart.name}
                        </p>
                      </div>
                      <div className="pt-4 pb-2  ">
                        <p className="text-2xl font-bold  text-[#0F1A29]">
                          {cart.students} C
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center ">
                      <div className="flex text-yellow-500">
                        <p className=" text-base">{cart.rating}</p>{" "}
                        <svg
                          className="w-5 h-5 "
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c-.3-.921-1.598-.921-1.898 0L5.317 6.23l-3.905.568c-1.011.147-1.416 1.392-.683 2.104l2.828 2.758-.668 3.892c-.172 1.002.883 1.753 1.785 1.284L10 15.347l3.49 1.834c.902.469 1.957-.282 1.785-1.284l-.668-3.892 2.828-2.758c.733-.712.328-1.957-.683-2.104l-3.905-.568-1.834-3.303z" />
                        </svg>
                        <svg
                          className="w-5 h-5 "
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c-.3-.921-1.598-.921-1.898 0L5.317 6.23l-3.905.568c-1.011.147-1.416 1.392-.683 2.104l2.828 2.758-.668 3.892c-.172 1.002.883 1.753 1.785 1.284L10 15.347l3.49 1.834c.902.469 1.957-.282 1.785-1.284l-.668-3.892 2.828-2.758c.733-.712.328-1.957-.683-2.104l-3.905-.568-1.834-3.303z" />
                        </svg>
                        <svg
                          className="w-5 h-5 "
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c-.3-.921-1.598-.921-1.898 0L5.317 6.23l-3.905.568c-1.011.147-1.416 1.392-.683 2.104l2.828 2.758-.668 3.892c-.172 1.002.883 1.753 1.785 1.284L10 15.347l3.49 1.834c.902.469 1.957-.282 1.785-1.284l-.668-3.892 2.828-2.758c.733-.712.328-1.957-.683-2.104l-3.905-.568-1.834-3.303z" />
                        </svg>
                        <svg
                          className="w-5 h-5 "
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c-.3-.921-1.598-.921-1.898 0L5.317 6.23l-3.905.568c-1.011.147-1.416 1.392-.683 2.104l2.828 2.758-.668 3.892c-.172 1.002.883 1.753 1.785 1.284L10 15.347l3.49 1.834c.902.469 1.957-.282 1.785-1.284l-.668-3.892 2.828-2.758c.733-.712.328-1.957-.683-2.104l-3.905-.568-1.834-3.303z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button className="bg-transparent text-white">
                        Remove
                      </Button>
                      <Button className="bg-[#22B9DD] text-white">
                        <BsArrowRightShort />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div className="mx-[2%] mt-10 relative">
            <div className="flex flex-col items-center justify-center bg-white shadow-lg  my-10  max-w-sm mx-auto">
              <div className="my-4">
                {/* Icon or Image */}
                <Image
                  src={cartempaty} // Replace with the actual path to your image/icon
                  alt="Cart is empty"
                  width={100}
                  height={100}
                  className="object-cover w-64"
                />
              </div>
              <div className="text-center text-white bg-[#22B9DD] w-full py-4 rounded-b-2xl ">
                <h2 className="text-lg md:text-3xl font-bold ">
                  Cart is empty!
                </h2>
                <p className="text-lg md:text-lg  mt-2">
                  Please add some courses in your cart.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="shadow-shadow_hover  rounded-2xl border-1 border-[#E2E8F0] col-span-1">
          sasasasa
        </div>
      </div>
    </main>
  );
}
