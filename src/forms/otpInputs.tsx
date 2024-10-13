"use client";
import { useRef, useState } from "react";

export const OtpInput = () => {
  const maxPinLength = 4;
  const [password, setPassword] = useState<number[]>(Array(maxPinLength).fill(-1));
  const [activeInput, setActiveInput] = useState(-1);
  const inpRefs = useRef<HTMLInputElement[]>([]);

  const handleKeyDown = (e: any, i: number) => {
    if (e.key == "Backspace") {
      let pass = [...password];
      pass[i] = -1;
      setPassword(pass);
      setActiveInput(i - 1);
      if (i != 0) {
        let nextInput = inpRefs.current[i - 1];
        nextInput?.focus();
      } else {
        inpRefs.current[i].blur();
      }
    }
  };

  const handleChange = (e: any, i: number) => {
    let v = e.nativeEvent["data"];
    let pass = [...password];
    let value = parseInt(v);
    if (!isNaN(value)) {
      pass[i] = value;
      setPassword(pass);
      setActiveInput(i + 1);
      let nextInput = inpRefs.current[i + 1];
      nextInput?.focus();
    }
  };

  const handleSumit = (e: any) => {
    e.preventDefault();
    let pin = password.join("");
    console.log(pin);
  };
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h2 className="text-6xl font-bold mb-10">Enter PIN</h2>
      <form onSubmit={handleSumit}>
        <div className="flex space-x-4">
          {password.map((digit, i) => (
            <div
              key={i}
              className="w-14 h-14 relative rounded-lg overflow-hidden"
            >
              <label
                htmlFor={`pin_${i}`}
                className={`absolute flex justify-center items-center text-2xl top-0 left-0 w-full h-full ${
                  activeInput == i ? "bg-gray-400" : "bg-gray-200"
                } opacity-100`}
              >
                {digit !== -1 ? "" : ""}
              </label>
              <input
                onFocus={() => setActiveInput(i)}
                onBlur={() => setActiveInput(-1)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onChange={(e) => handleChange(e, i)}
                className="w-full h-full text-center border-none outline-none"
                id={`pin_${i}`}
                type="password"
                value={digit !== -1 ? digit : ""}
              ></input>
            </div>
          ))}
        </div>
        <button className="mt-10 bg-gray-900 active:border-b-2 active:border-blue-100 outline-none text-white px-4 py-2 text-lg rounded uppercase">
          Continue
        </button>
      </form>
    </div>
  );
};
