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
    <div className="flex gap-4 p-3 bg-white border border-gray-200 rounded-xl">
      <Image
        src={facility_image}
        alt={facility_name}
        width={180}
        height={140}
        className="object-cover rounded-lg h-35 w-45"
      />

      <div className="flex flex-col flex-1">
        <div className="flex items-start justify-between">
          <h2 className="text-base font-bold text-[#1f2937]">
            {facility_name}
          </h2>

          <span
            className={`rounded-md px-2 py-1 text-[10px] font-medium uppercase ${
              status === "confirmed"
                ? "bg-green-50 text-green-700"
                : "bg-yellow-50 text-green-700"
            }`}
          >
            {status}
          </span>
        </div>

        <div className="flex items-center gap-1 mt-3 text-xs text-gray-500">
          <MapPin size={13} />
          <span>{facility_location}</span>
        </div>

        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
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

        <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-[#1f2937]">
          <Banknote size={13} />
          <span>${total_price}</span>
        </div>

        <div className="flex justify-end mt-auto">
          <CancelBookingsButton _id={_id} />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
