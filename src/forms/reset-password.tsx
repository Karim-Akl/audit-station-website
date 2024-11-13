"use client";
import { BASE_URL } from "@/lib/constants/constants";
import { useLocale } from "next-intl";

import { FC, FormEvent, useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // Icons
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";

const ResetPassword: FC = () => {
  const locale = useLocale();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);

      const response = await fetch(`${BASE_URL}/auth/password/reset_password`, {
        method: "POST",
        body: formData,
      });

      // Handle response if necessary
      const data = await response.json();
      console.log(data);
      if (data.type === "success") {
        toast.success(data.message);
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
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-[31px] font-semibold text-center mb-2">Reset Password</h2>

        <form onSubmit={onSubmit}>
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
                name="password_confirmation"
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
            
            {isLoading ? "Loading..." : " Reset Password"}

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
