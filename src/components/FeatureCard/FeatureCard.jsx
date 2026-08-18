"use client";

import { MapPin } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FeatureCard = ({ feature }) => {
  const {
    _id,
    image,
    location,
    facility_type,
    name,
    price_per_hour,
    rating = "4.8",
  } = feature;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <Link href={`/all-facilities/${_id}`} className="block">
          <div className="relative h-47.5 overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={500}
              height={300}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-semibold text-gray-700 shadow-sm">
              ⭐ {rating}
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-gray-800">{name}</h2>

              <p className="whitespace-nowrap text-sm font-bold text-green-800">
                ${price_per_hour}/hr
              </p>
            </div>

            <p className="mt-1 text-sm text-gray-500">{facility_type}</p>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>

            <Button className="mt-5 h-11 w-full rounded-md bg-green-800 font-semibold text-white">
              Book Now
            </Button>
          </div>
        </Link>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
