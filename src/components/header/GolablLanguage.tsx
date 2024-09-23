"use client";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

export const GlobalLanguage: React.FC<{ className: string }> = ({
  className,
}) => {
  const { pathname, router } = UseSearchParamsHook();

  const changeLanguage = () => {
    router.push(pathname === `/ar` ? `/en` : `/ar`);
  };

  return (
    <div>
      <button onClick={changeLanguage} className={`${className} text-black`}>
        {pathname === "/ar" ? (
          <span className="flex items-center">
            {" "}
            <Globe size={20} strokeWidth={1} />
            En
          </span>
        ) : (
          <span className="flex items-center">
            {" "}
            Ar
            <Globe size={20} strokeWidth={1} />
          </span>
        )}
      </button>
    </div>
  );
};
