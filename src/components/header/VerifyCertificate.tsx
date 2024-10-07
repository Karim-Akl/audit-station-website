import React from "react";
import { PiCertificate } from "react-icons/pi";

export const VerifyCertificate: React.FC = () => {
  return (
    <form className="flex items-center ">
      <button
        type="submit"
        className="flex items-center space-x-3 p-3 text-sm font-medium h-full text-white bg-[#1FA8C9] hover:bg-[#22a8dd] focus:ring-4 focus:outline-none rounded-full focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <PiCertificate size={24} />
        <span className="hidden md:block"> Verify your certificate</span>
      </button>
    </form>
  );
};
