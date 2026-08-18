import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";

const NoManageFacilities = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-center bg-white border border-gray-200 min-h-100 rounded-xl">
      <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-green-50">
        <Building2 size={38} className="text-green-600" />
      </div>

      <h2 className="text-2xl font-bold text-gray-800">No Facilities Yet</h2>

      <p className="max-w-md mt-2 text-sm leading-6 text-gray-500">
        You haven&apos;t added any sports facilities yet. Add your first
        facility to start managing your listings.
      </p>

      <Link
        href="/add-facilities"
        className="flex items-center gap-2 px-5 py-3 mt-6 text-sm font-medium text-white transition bg-green-600 rounded-lg hover:bg-green-700"
      >
        Add Facility
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default NoManageFacilities;
