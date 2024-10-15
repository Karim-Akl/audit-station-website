import HeroBackground from "@/components/helper/HeroBackground";
import React from "react";
import Image from "next/image";
import cartempaty from "@/../public/assets/cartempaty.svg";
export const metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart Page",
};
export default function ShoppingCart() {
  return (
    <main className="mb-20">
      <HeroBackground title="Shopping Cart" />
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
            <h2 className="text-lg md:text-3xl font-bold ">Cart is empty!</h2>
            <p className="text-lg md:text-lg  mt-2">
              Please add some courses in your cart.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
