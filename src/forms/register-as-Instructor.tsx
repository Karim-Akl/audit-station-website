"use client";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { useLocale } from "next-intl";
import Link from "next/link";
// pages/Register.tsx
import { FC, useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineHome } from "react-icons/ai"; // Icons
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const RegisterAsInstructor: FC = () => {
  const locale = useLocale();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle Register logic
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create your account as Instructor
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <AiOutlineHome className="text-gray-400 mr-2" />
              <input
                id="fullname"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="outline-none w-full text-sm"
                placeholder="Enter your Full Name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Academic qualification
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <AiOutlineMail className="text-gray-400 mr-2" />
              <input
                id="academicQualification"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <AiOutlineMail className="text-gray-400 mr-2" />
              <input
                id="academicQualification"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none w-full text-sm"
                placeholder="Enter your Previous work"
                required
              />
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-700">
              By Signing Up, you agree to our{" "}
              <Link
                href={`/${locale}/registration/conditions-and-privacy-policy` || '/'}
              >
                <span className="text-[#1FA8C9]">
                  Conditions and Privacy Policy
                </span>{" "}
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#22B9DD] w-full py-2 text-white rounded-md hover:bg-[#22b8dd94] transition duration-300"
          >
            Sign Up
          </button>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href={`login`} className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterAsInstructor;
