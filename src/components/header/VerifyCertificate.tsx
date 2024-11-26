import Link from "next/link";
import React from "react";
import { PiCertificate } from "react-icons/pi";
import { Interface } from "readline";

interface LoacaleProps {
  locale: string;
}
export const VerifyCertificate: React.FC<LoacaleProps> = ({ locale }) => {
  return (
    <form className="flex items-center">
      <Link href={`/${locale}/verify-your-certificate`}>
        {" "}
        <button
          type="submit"
          className="flex items-center  space-x-3 p-2 text-sm font-medium h-full text-white bg-[#1FA8C9] hover:bg-[#22a8dd] focus:ring-4 focus:outline-none rounded-full focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <PiCertificate className="hidden md:block" size={24} />
          <span className="flex gap-1">
            Verify <span className="hidden md:block">your</span> certificate
          </span>
        </button>
      </Link>
    </form>
  );
};
