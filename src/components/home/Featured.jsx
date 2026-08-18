import { getAllSports } from "@/lib/data";
import FeatureCard from "../FeatureCard/FeatureCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Featured = async () => {
  const features = await getAllSports();

  return (
    <section className="bg-slate-50 dark:bg-slate-900/60 px-4 py-14 md:px-8 lg:px-12 transition-colors">
      <div className="mx-auto max-w-300">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Featured Facilities
          </h2>

          <Link
            href="/all-facilities"
            className="flex items-center gap-2 font-medium text-green-700 dark:text-green-400 transition hover:text-green-800"
          >
            See All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.slice(0, 6).map((feature) => (
            <FeatureCard key={feature._id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
