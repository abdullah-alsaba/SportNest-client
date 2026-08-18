"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import ManageFacilityCard from "@/components/ManageFacilityCard/ManageFacilityCard";
import NoManageFacilities from "@/components/NoManageFacilities/NoManageFacilities";

const ManageFacilitiesPage = () => {
  const { data: session } = useSession();
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    if (session?.user?.email) {
      fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/sports?email=${session.user.email}`,
      )
        .then((res) => res.json())
        .then((data) => setFacilities(Array.isArray(data) ? data : []));
    }
  }, [session]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Manage Facilities
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Review, update, or remove your listed sports facilities and venues.
          </p>
        </div>

        <Link href="/add-facilities">
          <Button className="bg-green-700 text-white rounded-xl flex items-center gap-2">
            <Plus size={18} />
            Add New Facility
          </Button>
        </Link>
      </div>

      {facilities.length === 0 ? (
        <NoManageFacilities />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <ManageFacilityCard key={facility._id} facility={facility} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageFacilitiesPage;
