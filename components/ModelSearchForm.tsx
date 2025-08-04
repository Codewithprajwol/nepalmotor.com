import React, { useState, useEffect, useRef } from "react";

const ChevronDownIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="h-5 w-5 text-[#008080]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative h-full" ref={selectRef}>
      <label className="block text-xs font-medium text-[#004D40]">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative mt-1 w-full cursor-pointer border-0 bg-transparent p-0 text-left text-base font-medium text-[#004D40] focus:outline-none hover:text-[#008080] transition-colors"
      >
        <span className="block truncate">{value}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
          <ChevronDownIcon />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white p-1 text-base shadow-xl ring-1 ring-[#008080]/10 border border-[#008080]/20 focus:outline-none">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer select-none rounded-lg py-2 px-3 text-[#004D40] hover:bg-[#00F3FF]/10 hover:text-[#008080] transition-all duration-150"
            >
              <span
                className={`block truncate ${
                  value === option
                    ? "font-semibold text-[#008080]"
                    : "font-normal"
                }`}
              >
                {option}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CarResearchForm: React.FC = () => {
  const makes: string[] = ["Sabaru", "Toyota", "Honda", "Ford", "BMW"];
  const modelsByMake: { [key: string]: string[] } = {
    Sabaru: ["Forester Hybrid", "Crosstrek", "Outback", "Impreza"],
    Toyota: ["RAV4 Hybrid", "Camry", "Corolla", "Highlander"],
    Honda: ["CR-V Hybrid", "Civic", "Accord", "Pilot"],
    Ford: ["Escape Hybrid", "Mustang", "F-150", "Explorer"],
    BMW: ["X5", "3 Series", "5 Series", "X3"],
  };
  const years: string[] = ["All years", "2024", "2023", "2022", "2021", "2020"];

  const [selectedMake, setSelectedMake] = useState<string>("Sabaru");
  const [selectedModel, setSelectedModel] = useState<string>("Forester Hybrid");
  const [selectedYear, setSelectedYear] = useState<string>("All years");

  return (
    <div
      className="flex w-full flex-col rounded-lg border border-[#008080]/20 bg-white shadow-sm
                 md:flex-row"
    >
      <div className="flex-1 p-4">
        <CustomSelect
          label="Make"
          options={makes}
          value={selectedMake}
          onChange={(make) => {
            setSelectedMake(make);
            setSelectedModel(modelsByMake[make][0]);
          }}
        />
      </div>

      <div className="relative flex-1 border-t border-[#008080]/20 p-4 md:border-l md:border-t-0">
        <CustomSelect
          label="Model"
          options={modelsByMake[selectedMake]}
          value={selectedModel}
          onChange={setSelectedModel}
        />
      </div>

      <div className="relative flex-1 border-t border-[#008080]/20 p-4 md:border-l md:border-t-0">
        <CustomSelect
          label="Year"
          options={years}
          value={selectedYear}
          onChange={setSelectedYear}
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer bg-[#18675E] p-4 text-center text-white rounded-lg rounded-l-none font-bold transition-all duration-200 hover:bg-[#008080] hover:text-white transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md md:px-10"
      >
        Search
      </button>
    </div>
  );
};

export default CarResearchForm;
