"use client";
import { BASE_URL } from "@/lib/constants/constants";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { FC, FormEvent, useState } from "react";
import { AiOutlineMail } from "react-icons/ai"; // Icons
import { toast } from "sonner";

const ForgotPassword: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const locale = useLocale();
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch(
        `${BASE_URL}/auth/password/forgot_password`,
        {
          method: "POST",
          body: formData,
        }
      );

      // Handle response if necessary
      const data = await response.json();
      if (data.type === "success") {
        toast.success(data.message);
        router.push(
          `/${locale}/otp?email=${formData.get("handle")}&resetpassword=true`
        );
      }
      if (data.type === "error") {
        toast.warning(data.message);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
  }

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
        <form onSubmit={onSubmit}>
          <div className="my-6">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <AiOutlineMail className="text-gray-400 mr-2" />
              <input
                id="email"
                type="email"
                name="handle"
                className="outline-none w-full text-sm"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#22B9DD] w-full py-2 text-white rounded-md hover:bg-[#22b8dd94] transition duration-300"
            disabled={isLoading || !email}
          >
            {isLoading ? "Loading..." : " Send OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
