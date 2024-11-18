"use client";
import { signInWithSSOProvider } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

// pages/login.tsx
import { FC, FormEvent, useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // Icons
import { FaGoogle } from "react-icons/fa";
import { setSession } from "@/app/[locale]/actions/setSession";
import { toast } from "sonner";
import { FaApple } from "react-icons/fa6";
import { BASE_URL } from "@/lib/constants/constants";
import { useLocale } from "next-intl";
interface LoginFormValues {
  username_or_email_or_mobile: string;
  password: string;
}

const Login: FC = () => {
  const locale = useLocale();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);

      const response = await fetch(`${BASE_URL}/auth/login/mobile`, {
        method: "POST",
        body: formData,
      });

      // Handle response if necessary
      const data = await response.json();
      if (data.type === "success") {
        toast.success(data.message);
        setSession(data);
      }
      if (data.type === "error") {
        toast.warning(data.message);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
  }
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-[31px] font-semibold text-center mb-6">
          Welcome Back!
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <AiOutlineMail className="text-gray-400 mr-2" />
              <input
                id="email"
                type="email"
                name="email"
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
                name="password"
                className="outline-none w-full text-sm"
                placeholder="Enter your password"
                required
              />
            </div>
            <input id="type" type="number" name="type" value={6} hidden />
            <div className="text-right mt-2">
              <Link
                href="forgot-password"
                className="text-sm text-[#2695B3] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input id="rememberMe" type="checkbox" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#22B9DD] w-full py-2 text-white rounded-md hover:bg-[#22b8dd94] transition duration-300"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>

          <div className="my-4 text-center text-sm text-gray-600">
            Or login with
          </div>

          <div className="flex justify-center space-x-4 mb-4">
            <button
              type="button"
              onClick={() => signInWithSSOProvider("google")}
              className="border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition duration-300"
            >
              <FaGoogle className="text-red-500" />
            </button>
            <button
              type="button"
              onClick={() => signInWithSSOProvider("apple")}
              className="border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition duration-300"
            >
              <FaApple className="text-black" />
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
