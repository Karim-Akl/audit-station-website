import React from "react";
import { BiSearch } from "react-icons/bi";
import { Input } from "../ui/input";

export const SearchInput: React.FC = () => {
  return (
    <form className="flex items-center  ">
      <div className="flex  rounded-full p-1 w-full">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <div className="relative w-full rounded-full">
          <Input
            type="search"
            id="search-dropdown"
            className=" p-2 md:pe-20 w-full z-20 text-sm rounded-full focus:outline-none bg-none "
            style={{ background: "none" }}
            placeholder="Search Here . . ."
            required
          />
          <button
            type="submit"
            className="absolute top-1 bottom-1 end-1 p-2 text-xs font-medium  text-white bg-[#1FA8C9] hover:bg-[#22a8dd] focus:ring-4 focus:outline-none rounded-full focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <BiSearch size={20} />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};
