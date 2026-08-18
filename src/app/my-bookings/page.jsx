import React from 'react';
import MyBookingsPage from '../Pages/MyBookings/MyBookingsPage';
import { getBookingsData } from '@/lib/data';

export const metadata = {
  title: "SportNest - My Bookings",
  description: "View and manage your booked sports facilities.",
};

const MyBookingPage = async () => {
 
    const bookings = await getBookingsData()

    return (
      <div>
        <MyBookingsPage bookings={bookings} />
      </div>
    );
};

export default MyBookingPage;