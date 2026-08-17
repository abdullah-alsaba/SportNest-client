import BookingCard from "@/components/BookingCard/BookingCard";
import NoBookings from "@/components/NoBookings/NoBookings";
import React from "react";

const MyBookingsPage = ({ bookings }) => {
  return (
    <div className="container px-4 py-10 mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">My Bookings</h1>

        <p className="mt-2 text-gray-500">
          View and manage all your facility bookings.
        </p>
      </div>

      {bookings.length === 0 ? (
        <NoBookings />
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
