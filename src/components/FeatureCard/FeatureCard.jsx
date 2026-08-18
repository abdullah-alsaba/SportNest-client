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
      <Card className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-colors">
        <Link href={`/all-facilities/${_id}`} className="block">
          <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-slate-800">
            <Image
              src={image || "/heroimg.png"}
              alt={name}
              width={500}
              height={300}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs px-2.5 py-1 text-xs font-semibold text-gray-800 dark:text-gray-200 shadow-sm">
              ⭐ {rating}
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">{name}</h3>

              <p className="whitespace-nowrap text-sm font-bold text-green-600 dark:text-green-400">
                ${price_per_hour}/hr
              </p>
            </div>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{facility_type}</p>

            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <MapPin className="h-4 w-4 shrink-0 text-gray-400" />
              <span className="truncate">{location}</span>
            </div>

            <Button className="mt-5 h-11 w-full rounded-xl bg-green-700 hover:bg-green-800 font-semibold text-white">
              Book Now
            </Button>
          </div>
        </Link>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
