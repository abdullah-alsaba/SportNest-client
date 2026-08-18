import React from 'react';
import ManageFacilitiesPage from '../Pages/ManageFacilitiesPage/ManageFacilitiesPage';

export const metadata = {
  title: "SportNest - Manage Facilities",
  description: "Manage, update, and delete your listed sports facilities.",
};

const ManageFacilities = () => {
    return (
        <div>
            <ManageFacilitiesPage/>
        </div>
    );
};

export default ManageFacilities;