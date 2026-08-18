import AllFacilities from '@/components/AllFacilities/AllFacilities';
import React from 'react';

export const metadata = {
  title: "SportNest - All Facilities",
  description: "Browse all available sports facilities and venues.",
};

const AllFacilitiesPage = () => {
    return (
        <div>
            <AllFacilities/>
        </div>
    );
};

export default AllFacilitiesPage;