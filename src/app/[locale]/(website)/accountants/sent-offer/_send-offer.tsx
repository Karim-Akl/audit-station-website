"use client";
// pages/Register.tsx
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { FC, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { AiOutlineMail, AiOutlineLock, AiOutlineHome } from "react-icons/ai"; // Icons
import { PhoneInput } from "@/components/ui/phone-input";
import { Phone } from "lucide-react";
import Link from 'next/link';
const BecomeAnInstructor: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call or delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // تظهر شاشة التحميل لمدة 3 ثوانٍ
  };
  const [step, setStep] = useState(1);
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [academicQualification, setAcademicQualification] = useState("");
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({

    company: "",
    ownerName: "",
    email: "",
    country: "",
    countryCode: "",
    phoneNumber: "",
    companyAddress: "",
    businessType: "",
    companySize: "",
    linkedinProfile: "",
    website: "",
    phone: "",
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Process the files here
      console.log(files[0]); // Example: Access the first file
    } else {
      console.log("No file selected");
    }
  };


  return (
    <div className="flex justify-center items-center h-screen flex-col ">

      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (


        <div className="p-8 rounded-lg shadow-lg max-w-3xl w-full  ">
          <h2 className="text-[31px] text-[#333] font-semibold text-center mb-6">
            Add Offer
          </h2>
          <form onSubmit={step === 2 ? handleRegister : handleNextStep}>
            {/* Progress Bar */}
            <div className="flex flex-col w-full m-auto justify-center items-center mb-4 relative">
              <h2 className="align-right mb-4 text-sm items-end relative right-[-30%] ">
                <span className="text-[#22B9DD] items-start translate-x-10">
                  Step {step}
                </span>{" "}
                of 2
              </h2>
              <div className="flex items-center border border-gray-300 rounded-full w-[90%] bg-[#E9F8FC]">
                <div
                  className={`flex items-center rounded-full px-2 py-[6px] bg-[#22B9DD] ${step === 2 ? "w-full" : "w-1/2"
                    }`}
                ></div>
              </div>
            </div>


            <>
              {/* Step 1 */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                  Position*
                </label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                  <input
                    id="academicQualification"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="outline-none w-full text-sm"
                    placeholder="Position"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                  Sallary *
                </label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                  <input
                    id="academicQualification"
                    type="text"
                    value={academicQualification}
                    onChange={(e) => setAcademicQualification(e.target.value)}
                    className="outline-none w-full text-sm"
                    placeholder="Sallary"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                  Country* <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                  <AiOutlineMail className="text-gray-400 mr-2" />
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="outline-none w-full text-sm"
                    placeholder="Country"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
                  Joining Date<span className="text-red-600">*</span>
                </label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    className="outline-none w-full text-sm"
                    placeholder="Country"
                    required
                    onChange={handleChange}
                  />
              </div>

            </>




            {/* Buttons */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="bg-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-400"
                >
                  Back
                </button>
              )}

              <button



                type="submit"
                onSubmit={handleFormSubmit}
                className={`bg-[#22B9DD]  px-4 py-2 text-white rounded-md hover:bg-[#22b8dd94] m-auto  ${step === 2 ? "ml-4" : "ml-auto"} transition duration-300 w-full`}
              >
                {step === 2 ? "Continue" : "Next"}
              </button>


            </div>
          </form>
        </div>
      )}

    </div>
  );
};

export default BecomeAnInstructor;