import Image from "next/image";
import React from "react";
import { FaMoneyBills } from "react-icons/fa6";
import { IoTrendingUpOutline } from "react-icons/io5";

const GrowSports = () => {
  return (
    <div className="max-w-xl">
      <p className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wide text-green-700 bg-green-100 rounded-md">
        PARTNER PORTAL
      </p>

      <h1 className="max-w-md text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
        Grow your sports
        <br />
        community.
      </h1>

      <p className="max-w-md mt-4 text-sm leading-6 text-gray-600">
        List your facility on SportNest to reach thousands of active players.
        Manage bookings, maximize occupancy, and streamline your operations in
        one place.
      </p>

      <div className="relative mt-6 overflow-hidden rounded-xl">
        <Image
          src="/heroimg.png"
          alt="Sports facility"
          width={600}
          height={400}
          className="object-cover w-full h-43 sm:h-52"
        />

        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-6 py-5 bg-linear-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-center text-white rounded-full h-9 w-9 bg-white/20">
            ✓
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              Trusted by 500+ Venues
            </h3>

            <p className="text-xs text-gray-200">
              Join the fastest growing sports network
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="rounded-xl border border-gray-200 bg-[#f1f5ff] p-5">
          <IoTrendingUpOutline className="mb-3 text-lg text-green-700" />

          <h3 className="text-lg font-bold text-gray-800">30% Boost</h3>

          <p className="mt-1 text-xs leading-5 text-gray-600">
            Average increase in venue occupancy
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-[#f1f5ff] p-5">
          <FaMoneyBills className="mb-3 text-lg text-green-700" />

          <h3 className="text-lg font-bold text-gray-800">Fast Payouts</h3>

          <p className="mt-1 text-xs leading-5 text-gray-600">
            Secure weekly earnings processing
          </p>
        </div>
      </div>
    </div>
  );
};

export default GrowSports;
