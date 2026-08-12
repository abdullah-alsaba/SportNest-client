import { Search } from "lucide-react";
import React from "react";
import Filter from "../Filter/Filter";
import { getAllSports } from "@/lib/data";
import FacilitiesCard from "../FacilitiesCard/FacilitiesCard";

const AllFacilities = async () => {
  const allFacilities = await getAllSports();
  

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">Explore Facilities</h1>
        <div className="flex justify-between">
          <p>Find and book the best sports venues in your neighborhood.</p>
          <div className="flex items-center gap-3">
            <Search />
            <input
              type="text"
              placeholder="Search by Facility Name..."
              className="border rounded-4xl"
            />
          </div>
        </div>
      </div>
      <div>
        <Filter />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {allFacilities.map((facilities) => (
          <FacilitiesCard key={facilities._id} facilities={facilities} />
        ))}
      </div>
    </div>
  );
};

export default AllFacilities;
