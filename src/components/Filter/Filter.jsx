import React from "react";

const sports = [
  "All Sports",
  "Tennis",
  "Football",
  "Basketball",
  "Padel",
  "Swimming",
  "Gym",
];

const Filter = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {sports.map((sport, index) => (
        <button
          key={sport}
          className={`rounded-full border px-4 py-1.75 text-[12px] font-medium transition ${
            index === 0
              ? "border-[#006b3f] bg-[#006b3f] text-white"
              : "border-gray-300 bg-white text-gray-600 hover:border-[#006b3f] hover:bg-[#006b3f] hover:text-white"
          }`}
        >
          {sport}
        </button>
      ))}
    </div>
  );
};

export default Filter;
