"use client";

import { useState } from "react";

const DurationSelector = ({ price_per_hour, onDurationChange }) => {
  const [hours, setHours] = useState(1);

  const decreaseHours = () => {
    if (hours > 1) {
      const newHours = hours - 1;
      setHours(newHours);

      onDurationChange?.(newHours);
    }
  };

  const increaseHours = () => {
    const newHours = hours + 1;

    setHours(newHours);

    onDurationChange?.(newHours);
  };

  const totalPrice = price_per_hour * hours;

  return (
    <div className="mt-1">
      <h3 className="mb-3 text-xs font-semibold text-gray-700">
        Duration (Hours)
      </h3>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={decreaseHours}
          className="flex items-center justify-center w-10 h-10 text-lg text-gray-700 transition bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          -
        </button>

        <div className="flex h-11 flex-1 items-center justify-center rounded-lg border border-gray-300 bg-[#fafafa] text-sm font-medium text-gray-800">
          {hours}
        </div>

        <button
          type="button"
          onClick={increaseHours}
          className="flex items-center justify-center w-10 h-10 text-lg text-gray-700 transition bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          +
        </button>
      </div>

      <div className="my-5 border-t border-gray-300" />

      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>
          ${price_per_hour} × {hours} hour{hours > 1 ? "s" : ""}
        </span>

        <span className="font-medium text-gray-800">${totalPrice}</span>
      </div>

      <div className="my-5 border-t border-gray-300" />

      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-800">Total Price</h2>

        <p className="text-base font-bold text-gray-900">${totalPrice}</p>
      </div>
    </div>
  );
};

export default DurationSelector;
