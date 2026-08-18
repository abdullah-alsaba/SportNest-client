"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Filter from "../Filter/Filter";
import FacilitiesCard from "../FacilitiesCard/FacilitiesCard";

const AllFacilities = () => {
  const [facilities, setFacilities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFacilities = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (searchTerm.trim()) {
          params.append("search", searchTerm.trim());
        }
        if (selectedSport && selectedSport !== "All Sports") {
          params.append("type", selectedSport);
        }

        const query = params.toString() ? `?${params.toString()}` : "";
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/sports${query}`);
        const data = await res.json();
        setFacilities(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        setFacilities([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchFacilities();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, selectedSport]);

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Facility Name..."
              className="w-full bg-transparent text-[12px] outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="mt-5">
          <Filter
            selectedSport={selectedSport}
            onSelectSport={setSelectedSport}
          />
        </div>

        {loading ? (
          <div className="mt-16 flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-600 border-t-transparent" />
          </div>
        ) : facilities.length === 0 ? (
          <div className="mt-16 text-center text-gray-500">
            <p className="text-base font-medium">No facilities found.</p>
            <p className="mt-1 text-xs text-gray-400">
              Try searching with another facility name or category.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility) => (
              <FacilitiesCard key={facility._id} facilities={facility} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllFacilities;
