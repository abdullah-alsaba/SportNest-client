import React from "react";

const sports = [
  "All Sports",
  "Tennis",
  "Football",
  "Basketball",
  "Cricket",
  "Swimming",
  "Gym",
];

const Filter = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {sports.map((sport) => (
        <button
          key={sport}
          className="border border-gray-300 rounded-full px-4 py-2 hover:bg-green-600 hover:text-white transition"
        >
          {sport}
        </button>
      ))}
    </div>
  );
};

export default Filter;
