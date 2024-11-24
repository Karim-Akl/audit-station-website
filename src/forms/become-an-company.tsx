"use client";
// pages/Register.tsx
import { FC, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
const BecomeAnInstructor: FC = () => {
  const [step, setStep] = useState(1);
  const [mainAddress, setMainAddress] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [previousWork, setPreviouWork] = useState("");
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
    <div className="flex justify-center items-center h-screen ">
      <div className="p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-[31px] text-[#333] font-semibold text-center mb-6">
          Become a Company
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

          {step === 1 && (
            <>
              {/* Step 1 */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                  Company Name *
                </label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                  <input
                    id="academicQualification"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="outline-none w-full text-sm"
                    placeholder="Enter your Company Name"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                  Owner’s Name*
                </label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                  <input
                    id="academicQualification"
                    type="text"
                    value={academicQualification}
                    onChange={(e) => setAcademicQualification(e.target.value)}
                    className="outline-none w-full text-sm"
                    placeholder="Enter Owner’s Name"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                  Email *
                </label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                  <input
                    id="previouWork"
                    type="email"
                    value={previousWork}
                    onChange={(e) => setPreviouWork(e.target.value)}
                    className="outline-none w-full text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="fullname"
                >
                  Country or company headquarters*
                </label>
                <div className="flex items-center border border-gray-300 rounded-md ps-3 ">
                  <Select defaultValue="Ae">
                    <SelectTrigger
                      className={cn(
                        "bg-blue border-none focus:ring-offset-0 focus:ring-0    "
                      )}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Ae">United Arab Emirates</SelectItem>
                        <SelectItem value="Sa">Saudi Arabia</SelectItem>
                        <SelectItem value="Qa">Qatar</SelectItem>
                        <SelectItem value="Om">Oman</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 mb-4">
                  <label
                    className="block text-gray-700 text-sm mb-2"
                    htmlFor="countryCode"
                  >
                    Country Code *
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md px-2">
                    <Select defaultValue="Ae">
                      <SelectTrigger
                        className={cn(
                          "bg-white border-none focus:ring-offset-0 focus:ring-0"
                        )}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Ae">NGN</SelectItem>
                          <SelectItem value="Sa">Saudi Arabia</SelectItem>
                          <SelectItem value="Qa">Qatar</SelectItem>
                          <SelectItem value="Om">Oman</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="col-span-9">
                  <label
                    className="block text-gray-700 text-sm mb-2"
                    htmlFor="phoneNumber"
                  >
                    Phone Number *
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                    <input
                      id="phoneNumber"
                      type="text"
                      value={mainAddress}
                      onChange={(e) => setMainAddress(e.target.value)}
                      className="outline-none w-full text-sm"
                      placeholder="243543287923"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                  Company Address*
                </label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                  <input
                    id="academicQualification"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="outline-none w-full text-sm"
                    placeholder="Enter your Academic qualification"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              {/* Step 2 */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                  Company Field of Work *
                </label>
                <input
                  name="companyAddress"
                  type="text"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="Enter your Company Field of Work"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                  {`  Registrant's Position in company*`}
                </label>
                <input
                  name="businessType"
                  type="text"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="Enter your position in the company"
                  required
                />

              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                  Company Logo <span className="text-gray-500">(optional)</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex gap-1  items-center justify-center">
                  <div className="flex flex-row items-center justify-center w-full m-auto px-3">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 15a4 4 0 100-8 4 4 0 000 8zM10 21v-2a4 4 0 00-4-4H3a4 4 0 00-4 4v2m21-10l-5-5m0 0l-5 5m5-5v12"
                        />
                      </svg>
                    </div>

                    <div className="flex flex-col m-auto ">
                      <p className="text-gray-700 text-[10px] mt-2">Select a file or drag and drop here</p>
                      <p className="text-gray-500 text-[10px] mt-1">JPG, PNG or PDF, file size no more than 10MB</p>
                    </div>
                  </div>

                  {/* Hidden file input */}
                  <input
                    type="file"
                    accept=".jpg,.png,.pdf"
                    onChange={handleFileChange}
                    id="file-input"
                    className="hidden"
                  />
                  <div className="flex">
                    <button
                      type="button"
                      onClick={() => (document.getElementById("file-input") as HTMLElement).click()}
                      className="flex mt-4 border border-[#22B9DD] text-[#22B9DD] px-4 py-2 rounded-md text-sm hover:bg-blue-200"
                    >
                      Select file
                    </button>
                  </div>
                  {fileName && (
                    <div className="mt-4 text-gray-700 text-[8px]">
                      <p>Selected file: {fileName}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                  License and Tax Information (optional)<span className="text-gray-500">(optional)</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex gap-1  items-center justify-center">
                  <div className="flex flex-row items-center justify-center w-full m-auto px-3">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 15a4 4 0 100-8 4 4 0 000 8zM10 21v-2a4 4 0 00-4-4H3a4 4 0 00-4 4v2m21-10l-5-5m0 0l-5 5m5-5v12"
                        />
                      </svg>
                    </div>

                    <div className="flex flex-col m-auto ">
                      <p className="text-gray-700 text-[10px] mt-2">Select a file or drag and drop here</p>
                      <p className="text-gray-500 text-[10px] mt-1">JPG, PNG or PDF, file size no more than 10MB</p>
                    </div>
                  </div>

                  {/* Hidden file input */}
                  <input
                    type="file"
                    accept=".jpg,.png,.pdf"
                    onChange={handleFileChange}
                    id="file-input"
                    className="hidden"
                  />
                  <div className="flex">
                    <button
                      type="button"
                      onClick={() => (document.getElementById("file-input") as HTMLElement).click()}
                      className="flex mt-4 border border-[#22B9DD] text-[#22B9DD] px-4 py-2 rounded-md text-sm hover:bg-blue-200"
                    >
                      Select file
                    </button>
                  </div>

                  {fileName && (
                    <div className="mt-4 text-gray-700 text-[8px]">
                      <p>Selected file: {fileName}</p>
                    </div>
                  )}
                </div>
              </div>

            </>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                className="bg-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-400"
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              className={`bg-[#22B9DD]  px-4 py-2 text-white rounded-md hover:bg-[#22b8dd94] m-auto ml-4 transition duration-300 w-full`}
            >

              {step === 2 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BecomeAnInstructor;