import React from "react";

const sports = [
  "All Sports",
  "Football",
  "Badminton",
  "Cricket",
  "Basketball",
  "Tennis",
  "Swimming",
];

const Filter = ({ selectedSport = "All Sports", onSelectSport }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {sports.map((sport) => {
        const isSelected = selectedSport === sport;

        return (
          <button
            key={sport}
            type="button"
            onClick={() => onSelectSport && onSelectSport(sport)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition cursor-pointer ${
              isSelected
                ? "border-green-700 bg-green-700 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:border-green-700 hover:text-green-700"
            }`}
          >
            {sport}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
