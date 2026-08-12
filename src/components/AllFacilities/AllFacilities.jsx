import { Search } from "lucide-react";
import React from "react";
import Filter from "../Filter/Filter";
import { getAllSports } from "@/lib/data";
import FacilitiesCard from "../FacilitiesCard/FacilitiesCard";

const AllFacilities = async () => {
  const allFacilities = await getAllSports();

  return (
    <section className="min-h-screen bg-[#f8f9fb] px-6 py-6">
      <div className="mx-auto max-w-362.5">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h1 className="text-[30px] font-bold tracking-tight text-[#1f2a3d]">
              Explore Facilities
            </h1>

            <p className="mt-1 text-[13px] text-gray-500">
              Find and book the best sports venues in your neighborhood.
            </p>
          </div>

          <div className="flex h-10 w-full items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 shadow-sm md:w-63.75">
            <Search size={16} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search by Facility Name..."
              className="w-full bg-transparent text-[12px] outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="mt-5">
          <Filter />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {allFacilities.map((facilities) => (
            <FacilitiesCard key={facilities._id} facilities={facilities} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllFacilities;
