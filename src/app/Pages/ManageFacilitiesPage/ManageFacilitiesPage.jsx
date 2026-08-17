import { Button } from '@heroui/react';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ManageFacilitiesPage = () => {
    return (
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">Manage Facilities</h1>
            <p className="text-lg">
              Review, update, or remove your listed sports facilities and
              venues.
            </p>
          </div>
          <div>
            <Link href="/add-facilities">
              <Button className="p-4 bg-green-800 rounded-xl">
                <Plus />
                Add New Facility
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ManageFacilitiesPage;