import React from 'react';
import AddNewFacilityPage from '../Pages/AddNewFacility/AddNewFacilityPage';

export const metadata = {
  title: "SportNest - Add Facility",
  description: "List and publish your sports facility on SportNest.",
};

const AddFacility = () => {
    return (
        <div>
            <AddNewFacilityPage/>
        </div>
    );
};

export default AddFacility;