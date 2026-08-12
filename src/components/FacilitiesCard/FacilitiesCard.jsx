import React from "react";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import Link from "next/link";

const FacilitiesCard = ({ facilities }) => {
  const {
    _id,
    image,
    location,
    facility_type,
    name,
    price_per_hour,
    rating = "4.8",
  } = facilities;

  return (
    <Link href={`/all-facilities/${_id}`} className="block">
      <Card className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="relative h-42.5 w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 rounded bg-[#86efac] px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-green-800">
            {facility_type}
          </span>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-[16px] font-semibold text-gray-800">{name}</h2>

            <div className="flex items-center gap-1 text-[12px] font-medium text-gray-700">
              <Star size={14} className="fill-green-700 text-green-700" />
              {rating}
            </div>
          </div>

          <div className="mt-2 flex items-center gap-1 text-[12px] text-gray-500">
            <MapPin size={13} />
            <span>{location}</span>
          </div>

          <div className="my-5 border-t border-gray-200" />

          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-gray-500">
                Hourly Rate
              </p>

              <p className="mt-1 text-[15px] font-bold text-green-900">
                £{price_per_hour}
              </p>
            </div>

            <Button className="h-9 min-w-18.5 rounded-md bg-[#006b3f] px-4 text-xs font-semibold text-white">
              Book Now
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default FacilitiesCard;
