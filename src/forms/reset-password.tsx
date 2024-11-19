"use client";
import { BASE_URL } from "@/lib/constants/constants";
import { useLocale } from "next-intl";

import { FC, FormEvent, useState, ChangeEvent } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // Icons

import { toast } from "sonner";
import { useRouter } from "next/navigation";
interface resetPasswordProps {
  email: string;
  otp: number;
}
export function ResetPassword({ email, otp }: resetPasswordProps) {
  const locale = useLocale();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

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
        router.push(`/${locale}/login`);
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

  const isFormValid =
    password && confirmPassword && password === confirmPassword;

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-[31px] font-semibold text-center mb-2">
          Reset Password
        </h2>

        <form onSubmit={onSubmit}>
          <input name="handle" type="email" hidden value={email} />
          <input name="code" type="number" hidden value={otp} />
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
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
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
                value={confirmPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(e.target.value)
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className=" w-full py-2 text-white rounded-md bg-[#22B9DD]   transition duration-300"
            disabled={!isFormValid || isLoading}
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
}

export default ResetPassword;
