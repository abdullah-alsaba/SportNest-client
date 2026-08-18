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
      <Card className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-colors">
        <div className="relative h-44 w-full overflow-hidden bg-gray-100 dark:bg-slate-800">
          <Image
            src={image || "/heroimg.png"}
            alt={name}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 rounded-full bg-emerald-500/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {facility_type}
          </span>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-[16px] font-semibold text-gray-900 dark:text-white truncate">{name}</h3>

            <div className="flex items-center gap-1 text-[12px] font-medium text-gray-700 dark:text-gray-300 shrink-0">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              {rating}
            </div>
          </div>

          <div className="mt-2 flex items-center gap-1 text-[12px] text-gray-500 dark:text-gray-400">
            <MapPin size={13} className="shrink-0" />
            <span className="truncate">{location}</span>
          </div>

          <div className="my-4 border-t border-gray-100 dark:border-slate-800" />

          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-gray-400">
                Hourly Rate
              </p>

              <p className="mt-0.5 text-[15px] font-bold text-green-700 dark:text-green-400">
                ${price_per_hour}
              </p>
            </div>

            <Button className="h-9 min-w-18.5 rounded-lg bg-green-700 hover:bg-green-800 px-4 text-xs font-semibold text-white">
              Book Now
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default FacilitiesCard;
