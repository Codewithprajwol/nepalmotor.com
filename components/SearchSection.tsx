"use client";
import React, { useState } from "react";
import ModelSearchFrom from "./ModelSearchForm";
import TypeFilter from "./TypeFilter";
import CarSearchDisplay from "./CarSearchDisplay";

const SearchSection = () => {
  const [tab, setTab] = useState<"model" | "type">("model");
  return (
    <div className="w-full p-8 bg-[#F3F4F6]">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-2xl text-center md:text-3xl font-bold mb-4 text-[#004D40]">
          Find Cars
        </h1>
        {/* tabs  */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setTab("model")}
            className={`px-4 py-0.5 cursor-pointer border-b-2 transition-colors ${
              tab === "model"
                ? "border-[#00F3FF] text-[#008080]"
                : "border-transparent text-gray-600 hover:text-[#008080]"
            }`}
          >
            By Model
          </button>
          <button
            onClick={() => setTab("type")}
            className={`px-4 py-0.5 cursor-pointer border-b-2 transition-colors ${
              tab === "type"
                ? "border-[#00F3FF] text-[#008080]"
                : "border-transparent text-gray-600 hover:text-[#008080]"
            }`}
          >
            By Type
          </button>
        </div>
        <p className="text-sm mb-4 text-[#004D40]">
          Learn more about the car you're interested in before you buy.
        </p>
        {/* search input */}
        {tab === "model" && <ModelSearchFrom />}
        {tab == "model" && <CarSearchDisplay />}
        {tab === "type" && <TypeFilter />}
      </div>
    </div>
  );
};

export default SearchSection;
