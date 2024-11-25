"use client";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { useLocale } from "next-intl";
import Link from "next/link";
import { FC, FormEvent, useState, useEffect, Fragment } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineHome } from "react-icons/ai"; // Icons
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { BASE_URL } from "@/lib/constants/constants";
import { toast } from "sonner";
import { FaApple } from "react-icons/fa6";
import { signInWithSSOProvider } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { MdKeyboardBackspace } from "react-icons/md";
import { GoPlus } from "react-icons/go";

const AddReference: FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    rememberMe: false,
  });

  useEffect(() => {
    const { name, email, phone, password, password_confirmation, rememberMe } =
      formData;
    setFormValid(
      name.trim() !== "" &&
        email.trim() !== "" &&
        phone.trim() !== "" &&
        password.trim() !== "" &&
        password_confirmation.trim() !== "" &&
        rememberMe
    );
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const phone = formData.get("phone")?.toString().replace(/\s+/g, "");
      formData.set("phone", phone || "");
      const response = await fetch(`${BASE_URL}/auth/register/user`, {
        method: "POST",
        body: formData,
      });

      // Handle response if necessary
      const data = await response.json();
      console.log(data);
      if (data.type === "success") {
        toast.success(data.message);
        router.push(`/${locale}/otp?email=${formData.get("email")}`);
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
    <div className=" w-full">
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="fullname"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <AiOutlineHome className="text-gray-400 mr-2" />
            <input
              id="fullname"
              name="name"
              type="text"
              className="outline-none w-full text-sm"
              placeholder="Enter your Full Name"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
            Phone Number<span className="text-red-600">*</span>
          </label>
          <PhoneInput
            placeholder="Enter a phone number"
            name="phone"
            defaultCountry="AE"
            onChange={(value) => setFormData({ ...formData, phone: value })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="position"
          >
            Position <span className="text-red-600">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <AiOutlineMail className="text-gray-400 mr-2" />
            <input
              id="position"
              type="text"
              name="position"
              className="outline-none w-full text-sm"
              placeholder="Enter your position"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-2 items-center ">
          <button
            className="bg-transparent border border-[#22B9DD]  text-[#22B9DD] p-2 rounded-md hover:bg- transition duration-300"
            disabled={!formValid || isLoading}
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <span className="flex items-center gap-1">
                <MdKeyboardBackspace />
                Back
              </span>
            )}
          </button>
          <button
            type="submit"
            className="bg-[#22b8dd94]  py-2 text-white rounded-md hover:bg-[#22B9DD] p-2 transition duration-300"
            disabled={!formValid || isLoading}
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <span className="flex items-center gap-1">
                <GoPlus />
                save
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReference;
