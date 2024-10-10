"use client";
import { Input } from "@/components/ui/input";
import { useLocale } from "next-intl";
import Link from "next/link";
// pages/login.tsx
import { FC, useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // Icons
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const Login: FC = () => {
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
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
            <div className="text-right mt-2">
              <Link href="forgot-password" className="text-sm text-[#2695B3] hover:underline">
                Forgot Password?
              </Link>
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
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#22B9DD] w-full py-2 text-white rounded-md hover:bg-[#22b8dd94] transition duration-300"
          >
            Login
          </button>

          <div className="my-4 text-center text-sm text-gray-600">
            Or login with
          </div>

          <div className="flex justify-center space-x-4 mb-4">
            <button
              type="button"
              className="border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition duration-300"
            >
              <FaGoogle className="text-red-500" />
            </button>
            <button
              type="button"
              className="border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition duration-300"
            >
              <FaLinkedin className="text-blue-600" />
            </button>
          </div>

          <div className="text-center text-sm">
            Don’t have an account?{" "}
            <Link
              href={`registration`}
              className="text-blue-500 hover:underline"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
