"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    description: string;
    link: string;
    image: {
      src: string;
    };
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {" "}
      <div className="col-span-3 text-center mt-4">
        <h1 className="text-2xl  md:text-4xl font-black">
          خدمات شراء اثاث مستعمل بافضل الاسعار
        </h1>
        <h1 className="text-md text-gray-500  md:text-2xl font-black">
          شراء اثاث مستعمل و شراء غرف نوم و شراء مطابخ مستعملة بالرياض و شراء
          اثاث مكتبي وشراء مكيفات مستعملة وشراء معدات مطاعم مستعملة .
        </h1>
      </div>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <Link
            href={item?.link}
            key={item?.id}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-400 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardImage className="hover:scale-110  duration-200   w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                <Image
                  src={item.image.src}
                  alt="startup template"
                  width={600}
                  height={600}
                />
              </CardImage>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#F8F8F7]   bg-gradient-to-r border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative  z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-2xl text-center	font-black tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8  tracking-wide leading-relaxed font-bold text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardImage = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-gray-50 tracking-wide leading-relaxed font-bold text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
