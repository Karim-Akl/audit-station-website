"use client";
import { useLocale } from "next-intl";

import { FC, useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // Icons
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const ResetPassword: FC = () => {
  const locale = useLocale();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle ForgotPassword logic
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-[31px] font-semibold text-center mb-2">Reset Password</h2>

        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <AiOutlineLock className="text-gray-400 mr-2" />
              <input
                itemScope
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none w-full text-sm"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <AiOutlineLock className="text-gray-400 mr-2" />
              <input
                itemScope
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="outline-none w-full text-sm"
                placeholder="Enter your Confirm Password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#22B9DD] w-full py-2 text-white rounded-md hover:bg-[#22b8dd94] transition duration-300"
          >
            Login
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

export default ResetPassword;
