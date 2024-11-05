"use client";
import { useLocale } from "next-intl";

import { FC, useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // Icons
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const ForgotPassword: FC = () => {
  const locale = useLocale();
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle ForgotPassword logic
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-[31px] font-semibold text-center mb-2">
          Forgot your password?
        </h2>
        <p className="text-[16px] font-medium text-center">
          Enter your email address and we will sent you an OTP to reset your
          password
        </p>
        <form onSubmit={handleForgotPassword}>
          <div className="my-6">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <AiOutlineMail className="text-gray-400 mr-2" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none w-full text-sm"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#22B9DD] w-full py-2 text-white rounded-md hover:bg-[#22b8dd94] transition duration-300"
          >
            Send OTP
          </button>

          {/* <div className="text-center text-sm">
            have an account?{" "}
            <Link href={`login`} className="text-blue-500 hover:underline">
              login
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
