import AddFacilityForm from "@/components/AddFacilityForm/AddFacilityForm";
import GrowSports from "@/components/GrowSports/GrowSports";
import React from "react";

const AddNewFacilityPage = () => {
  return (
    <div className="container px-4 py-10 mx-auto lg:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
        <GrowSports />
        <AddFacilityForm />
      </div>
    </div>
  );
};

export default AddNewFacilityPage;
