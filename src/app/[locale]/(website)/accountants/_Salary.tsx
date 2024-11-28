"use client";
import React, { useState } from "react";

interface IProps {
  title?: string;
  locale?: string;
  ActiveTaShow?: boolean;
  upgradeshow?: boolean;
  activeTabShow?: string;
  step?: string | boolean;
  salaryRanges?: string[] | number[];
}

const SalaryFilter: React.FC<IProps> = ({
  title = "Salary Filter",
  locale,
  ActiveTaShow = true,
  activeTabShow = "Hourly",
  salaryRanges = ["Any", "> 30000k", "> 50000k", "> 80000k", "> 100000k"],
}) => {
  const [activeTab, setActiveTab] = useState(activeTabShow);
  const tabs = ["Hourly", "Monthly", "Yearly"];


  return (
    <div className="bg-gray-100 rounded-lg p-4 md:w-72 shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {ActiveTaShow && (
        <div className="flex space-x-2 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-2 text-center rounded-sm text-sm font-medium ${
                activeTab === tab
                  ? "bg-[#E9F8FC] text-[#22B9DD] border border-[#22B9DD]"
                  : "bg-white text-gray-600 border border-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
      <div className="space-y-2">
        {salaryRanges.map((range) => (
          <label key={range} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
            />
            <span className="text-gray-700">{range}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SalaryFilter;
