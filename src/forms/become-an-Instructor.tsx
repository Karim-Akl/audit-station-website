"use client";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { useLocale } from "next-intl";
import Link from "next/link";
// pages/Register.tsx
import { FC, useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineHome } from "react-icons/ai"; // Icons
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
const BecomeAnInstructor: FC = () => {
  const locale = useLocale();
  const [nationality, setNationality] = useState("");
  const [bio, setBio] = useState("");
  const [mainAddress, setMainAddress] = useState("");
  const [previousWork, setPreviouWork] = useState("");
  const [academicQualification, setAcademicQualification] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle Register logic
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-[31px] text-[#333] font-semibold text-center mb-6">
          Become an instructor
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="fullname"
            >
              Nationality
            </label>
            <div className="flex items-center border border-gray-300 rounded-md ps-3 ">
              <Select defaultValue="Ae">
                <SelectTrigger
                  className={cn(
                    "bg-blue border-none focus:ring-offset-0 focus:ring-0    "
                  )}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Ae">United Arab Emirates</SelectItem>
                    <SelectItem value="Sa">Saudi Arabia</SelectItem>
                    <SelectItem value="Qa">Qatar</SelectItem>
                    <SelectItem value="Om">Oman</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>{" "}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Main Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <input
                id="academicQualification"
                type="text"
                value={mainAddress}
                onChange={(e) => setMainAddress(e.target.value)}
                className="outline-none w-full text-sm"
                placeholder="Enter your Academic qualification"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Academic qualification
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <input
                id="academicQualification"
                type="text"
                value={academicQualification}
                onChange={(e) => setAcademicQualification(e.target.value)}
                className="outline-none w-full text-sm"
                placeholder="Enter your Academic qualification"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Previous work{" "}
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <input
                id="previouWork"
                type="text"
                value={previousWork}
                onChange={(e) => setPreviouWork(e.target.value)}
                className="outline-none w-full text-sm"
                placeholder="Enter your Previous work"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Bio{" "}
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <textarea
                id="academicQualification"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="outline-none w-full text-sm"
                placeholder="Type here.."
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#22B9DD] w-full py-2 text-white rounded-md hover:bg-[#22b8dd94] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeAnInstructor;
