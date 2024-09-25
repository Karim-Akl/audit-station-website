import Image from "next/image";
import FristCard from "@../../../public/assets/Icon1.svg";
import SecCard from "@../../../public/assets/Icon2.svg";
import ThirdCard from "@../../../public/assets/Icon3.svg";

export const StepsComponent: React.FC = () => {
  return (
    <div className=" p-8    rounded-lg text-center">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Your steps to be <span className="text-blue-500">unique</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis donec
          massa at risus.
        </p>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#2F327D]">
        {/* Step 1 */}
        <div className="bg-white shadow-md shadow-slate-400  rounded-lg p-6 text-center">
          <div className=" mb-4  ">
            <Image
              src={FristCard}
              className="bg-blue-500 p-2 mx-auto rounded-full"
              alt="step1"
            />
          </div>
          <h3 className="font-semibold mb-2">01.</h3>
          <p className="mx-auto max-w-40 text-xl flex-wrap">
            Develop your skills through the courses on the platform!
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white shadow-md shadow-slate-400  rounded-lg p-6 text-center">
          <div className=" mb-4">
            <Image
              src={SecCard}
              className="bg-green-500 p-2 mx-auto rounded-full"
              alt="step1"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">02.</h3>
          <p className="mx-auto max-w-40 text-xl flex-wrap">
            Complete your file and upload your certificates!
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white shadow-md shadow-slate-400  rounded-lg p-6  text-center text-2xl">
          <div className=" mb-4">
            <Image
              src={ThirdCard}
              className="bg-sky-400 p-2 mx-auto rounded-full"
              alt="step1"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">03.</h3>
          <p className="mx-auto max-w-48 text-xl flex-wrap">
            Take the Audit Station exam and start your journey towards
            certification!
          </p>
        </div>
      </div>
    </div>
  );
};
