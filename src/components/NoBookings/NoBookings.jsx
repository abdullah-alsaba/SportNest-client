import Link from "next/link";
import { CalendarX, ArrowRight } from "lucide-react";

const NoBookings = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-center bg-white border border-gray-200 min-h-100 rounded-xl">
      <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-green-50">
        <CalendarX size={38} className="text-green-600" />
      </div>

      <h2 className="text-2xl font-bold text-gray-800">No Bookings Yet</h2>

      <p className="max-w-md mt-2 text-sm leading-6 text-gray-500">
        You haven&apos;t booked any sports facility yet. Explore our available
        facilities and reserve your favorite place.
      </p>

      <Link
        href="/all-facilities"
        className="flex items-center gap-2 px-5 py-3 mt-6 text-sm font-medium text-white transition bg-green-600 rounded-lg hover:bg-green-700"
      >
        Explore Facilities
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default NoBookings;
