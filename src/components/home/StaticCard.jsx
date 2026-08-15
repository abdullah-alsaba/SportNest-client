import React from "react";
import { FaRegClock } from "react-icons/fa";
import { MdOutlinePayments, MdOutlineVerified } from "react-icons/md";

const StaticCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-6">
      <div>
        <h1 className="text-center text-4xl font-bold">Why Chose SportNest</h1>
        <p className="text-center text-gray-400 mt-2 mb-6">
          We provide the most seamless experience for both players and facility
          owners.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-6 bg-[#e8ecff] rounded-xl ">
          <div>
            <div className="p-4 inline-block rounded-xl  bg-green-500">
              <FaRegClock />
            </div>
            <h1 className="mb-2 font-bold">Instant Booking</h1>
            <p>
              No more endless phone calls. Browse live availability and book
              your favorite slot in seconds.
            </p>
          </div>
        </div>
        <div className="p-6 bg-[#e8ecff] rounded-xl ">
          <div>
            <div className="p-4 inline-block rounded-xl  bg-green-500">
              <MdOutlineVerified />
            </div>
            <h1 className="mb-2 font-bold">Verified Facilities</h1>
            <p>
              Every facility on our platform is manually verified for quality,
              safety, and amenities.
            </p>
          </div>
        </div>
        <div className="p-6 bg-[#e8ecff] rounded-xl ">
          <div>
            <div className="p-4 inline-block rounded-xl  bg-green-500">
              <MdOutlinePayments />
            </div>
            <h1 className="mb-2 font-bold">Secure Payments</h1>
            <p>
              100% secure online transactions with instant confirmation and
              flexible cancellation policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticCard;
