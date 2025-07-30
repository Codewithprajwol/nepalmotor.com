"use client";
import React, { useState } from "react";
import ModelSearchFrom from "./ModelSearchForm";
import TypeFilter from "./TypeFilter";
import CarSearchDisplay from "./CarSearchDisplay";

const SearchSection = () => {
  const [tab, setTab] = useState<"model" | "type">("model");
  return (
    <div className="w-full mx-auto px-2  md:px-6 lg:px-8 py-5 bg-[#F3F4F6]">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-2xl text-center md:text-3xl font-bold mb-4 text-[#00594F]">
          Find Cars
        </h1>

        {/* tabs  */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setTab("model")}
            className={`px-4 py-0.5 cursor-pointer  border-b-2 ${
              tab === "model" ? "border-black" : "border-transparent"
            }`}
          >
            By Model
          </button>
          <button
            onClick={() => setTab("type")}
            className={`px-4 py-0.5 cursor-pointer border-b-2 ${
              tab === "type" ? "border-black" : "border-transparent"
            }`}
          >
            By Type
          </button>
        </div>
        <p className="text-sm mb-4 text-gray-600">
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
