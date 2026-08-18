import React from "react";
import { FaRegClock } from "react-icons/fa";
import { MdOutlinePayments, MdOutlineVerified } from "react-icons/md";

const StaticCard = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Why Choose SportNest
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-2 mb-8 max-w-xl mx-auto text-sm md:text-base">
          We provide the most seamless experience for both players and facility owners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm transition">
          <div>
            <div className="p-3.5 inline-block rounded-xl bg-green-600 text-white mb-4">
              <FaRegClock size={22} />
            </div>
            <h3 className="mb-2 font-bold text-lg text-gray-900 dark:text-white">
              Instant Booking
            </h3>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              No more endless phone calls. Browse live availability and book your favorite slot in seconds.
            </p>
          </div>
        </div>

        <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm transition">
          <div>
            <div className="p-3.5 inline-block rounded-xl bg-green-600 text-white mb-4">
              <MdOutlineVerified size={22} />
            </div>
            <h3 className="mb-2 font-bold text-lg text-gray-900 dark:text-white">
              Verified Facilities
            </h3>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              Every facility on our platform is manually verified for quality, safety, and amenities.
            </p>
          </div>
        </div>

        <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm transition">
          <div>
            <div className="p-3.5 inline-block rounded-xl bg-green-600 text-white mb-4">
              <MdOutlinePayments size={22} />
            </div>
            <h3 className="mb-2 font-bold text-lg text-gray-900 dark:text-white">
              Secure Payments
            </h3>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              100% secure online transactions with instant confirmation and flexible cancellation policies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticCard;
