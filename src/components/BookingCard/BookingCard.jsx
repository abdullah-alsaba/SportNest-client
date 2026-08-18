import { CalendarDays, Clock, MapPin, Trash2, Banknote } from "lucide-react";
import Image from "next/image";
import React from "react";
import CancelBookingsButton from "../CancelBookingsButton/CancelBookingsButton";

const BookingCard = ({ booking }) => {
  const {
    facility_location,
    facility_image,
    total_price,
    hours,
    time_slot,
    booking_date,
    facility_name,
      status,
    _id
  } = booking;

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl transition-colors">
      <Image
        src={facility_image || "/heroimg.png"}
        alt={facility_name}
        width={180}
        height={140}
        className="object-cover rounded-lg h-44 w-full sm:h-35 sm:w-45"
      />

      <div className="flex flex-col flex-1">
        <div className="flex items-start justify-between">
          <h2 className="text-base font-bold text-gray-900 dark:text-white">
            {facility_name}
          </h2>

          <span
            className={`rounded-md px-2 py-1 text-[10px] font-medium uppercase ${
              status === "confirmed"
                ? "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-400"
                : "bg-yellow-50 text-amber-700 dark:bg-yellow-950/50 dark:text-amber-400"
            }`}
          >
            {status}
          </span>
        </div>

        <div className="flex items-center gap-1 mt-2 sm:mt-3 text-xs text-gray-500 dark:text-gray-400">
          <MapPin size={13} />
          <span>{facility_location}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <CalendarDays size={13} />
            <span>{booking_date}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock size={13} />
            <span>
              {time_slot} ({hours}h)
            </span>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-gray-900 dark:text-white">
          <Banknote size={13} />
          <span>${total_price}</span>
        </div>

        <div className="flex justify-end mt-4 sm:mt-auto">
          <CancelBookingsButton _id={_id} />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
