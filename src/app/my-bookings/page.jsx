import React from 'react';
import MyBookingsPage from '../Pages/MyBookings/MyBookingsPage';
import { getBookingsData } from '@/lib/data';

const MyBookingPage = async () => {
 
    const bookings = await getBookingsData()

    return (
      <div>
        <MyBookingsPage bookings={bookings} />
      </div>
    );
};

export default MyBookingPage;