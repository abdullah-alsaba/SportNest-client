import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaCar, FaRegClock, FaRegStar, FaWifi } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineShower, MdPayments } from "react-icons/md";
import { RiCupLine } from "react-icons/ri";
import { TbHanger } from "react-icons/tb";
import { Key } from "@gravity-ui/icons";

const FacilitiesDetailsCard = ({ selectedFacilities }) => {
  const {
    image,
    location,
    facility_type,
    name,
    price_per_hour,
    rating = "4.8",
    capacity,
    description,
    booking_count,
  } = selectedFacilities;

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          width={900}
          height={520}
          className="object-cover w-full h-70 sm:h-95 lg:h-110"
          priority
        />

        <span className="absolute px-3 py-1 text-xs font-semibold tracking-wider text-white bg-green-700 rounded-md left-5 top-5">
          {facility_type.toUpperCase()}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="flex flex-col items-center justify-center px-3 text-center bg-white border border-gray-300 shadow-sm min-h-24 rounded-xl">
          <MapPin className="mb-2 text-green-700" size={17} />
          <span className="text-[10px] font-semibold text-gray-500">
            LOCATION
          </span>
          <p className="mt-1 text-xs font-semibold text-gray-800">{location}</p>
        </div>

        <div className="flex flex-col items-center justify-center px-3 text-center bg-white border border-gray-300 shadow-sm min-h-24 rounded-xl">
          <IoPeopleSharp className="mb-2 text-green-700" size={17} />
          <span className="text-[10px] font-semibold text-gray-500">
            CAPACITY
          </span>
          <p className="mt-1 text-xs font-semibold text-gray-800">
            {capacity} Players
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-3 text-center bg-white border border-gray-300 shadow-sm min-h-24 rounded-xl">
          <MdPayments className="mb-2 text-green-700" size={17} />
          <span className="text-[10px] font-semibold text-gray-500">PRICE</span>
          <p className="mt-1 text-xs font-semibold text-gray-800">
            ${price_per_hour}/hr
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-3 text-center bg-white border border-gray-300 shadow-sm min-h-24 rounded-xl">
          <FaRegClock className="mb-2 text-green-700" size={16} />
          <span className="text-[10px] font-semibold text-gray-500">
            BOOKINGS
          </span>
          <p className="mt-1 text-xs font-semibold text-gray-800">
            {booking_count} Bookings
          </p>
        </div>
      </div>

      <div className="p-5 bg-white border border-gray-300 shadow-sm rounded-xl sm:p-6">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">{name}</h1>

        <div className="flex flex-wrap items-center mt-3 text-sm text-gray-500 gap-x-5 gap-y-2">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-green-700" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-1">
            <FaRegStar className="text-yellow-500" size={14} />
            <span className="font-medium text-gray-700">{rating}</span>
            <span>(124 Reviews)</span>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-base font-bold text-gray-800">Description</h2>

          <p className="mt-2 text-sm leading-7 text-gray-600">{description}</p>
        </div>

        <div className="mt-7">
          <h2 className="text-base font-bold text-gray-800">Amenities</h2>

          <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-[#fafafa] px-4 py-3 text-sm text-gray-700">
              <MdOutlineShower className="text-green-700" />
              <span>Shower Rooms</span>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-[#fafafa] px-4 py-3 text-sm text-gray-700">
              <FaCar className="text-green-700" />
              <span>Free Parking</span>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-[#fafafa] px-4 py-3 text-sm text-gray-700">
              <FaWifi className="text-green-700" />
              <span>Free Wi-Fi</span>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-[#fafafa] px-4 py-3 text-sm text-gray-700">
              <TbHanger className="text-green-700" />
              <span>Locker Rooms</span>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-[#fafafa] px-4 py-3 text-sm text-gray-700">
              <RiCupLine className="text-green-700" />
              <span>Snack Bar</span>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-[#fafafa] px-4 py-3 text-sm text-gray-700">
              <Key className="text-green-700" />
              <span>First Aid Kit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesDetailsCard;
