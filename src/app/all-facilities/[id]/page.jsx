import React from "react";
import { getSelectedFacility } from "@/lib/data";
import FacilitiesDetailsCard from "@/components/FacilitiesDetailsCard/FacilitiesDetailsCard";
import BookingForm from "@/components/BookingForm/BookingForm";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const selectedFacilities = await getSelectedFacility(id);

  return {
    title: selectedFacilities?.name
      ? `SportNest - ${selectedFacilities.name}`
      : "SportNest - Facility Details",
    description: selectedFacilities?.description || "Facility details and booking",
  };
}

const FacilitiesDetailsPage = async ({ params }) => {
  const { id } = await params;

  const selectedFacilities = await getSelectedFacility(id);

  return (
    <main className="bg-[#fafafa]">
      <div className="container px-4 py-8 mx-auto lg:px-6 lg:py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start lg:gap-8">
          <div className="lg:col-span-2">
            <FacilitiesDetailsCard selectedFacilities={selectedFacilities} />
          </div>

          <aside className="lg:sticky lg:top-6">
            <BookingForm selectedFacilities={selectedFacilities} />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default FacilitiesDetailsPage;
