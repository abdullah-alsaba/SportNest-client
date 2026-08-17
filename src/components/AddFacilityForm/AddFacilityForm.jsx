"use client";

import React, { useState } from "react";
import { ImageIcon, MapPin, Lock, PlusCircle } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { getAddNewFacility } from "@/lib/action";
import { toast } from "react-toastify";

const AddFacilityForm = () => {
    const { data: session } = useSession();

    const userEmail = session?.user?.email || "";
    
    const [selectedSlots, setSelectedSlots] = useState([]);

    const timeSlots = [
        "Morning (6AM-12PM)",
        "Afternoon (12PM-6PM)",
        "Evening (6PM-10PM)",
        "Night (10PM-12AM)",
    ];

    const handleSlot = (slot) => {
        setSelectedSlots((prevSlots) =>
            prevSlots.includes(slot)
                ? prevSlots.filter((item) => item !== slot)
                : [...prevSlots, slot],
        );
    };

    const handleSubmit = async (e) => {


  const formData = new FormData(e.currentTarget);

  const facilityData = {
    name: formData.get("name"),
    facility_type: formData.get("facility_type"),
    image: formData.get("image"),
    location: formData.get("location"),
    price_per_hour: Number(formData.get("price_per_hour")),
    capacity: Number(formData.get("capacity")),
    available_slots: selectedSlots,
    description: formData.get("description"),
    owner_email: formData.get("owner_email"),
  };

  
  const addNewFacility = await getAddNewFacility(facilityData);

  
  if (addNewFacility.insertedId) {
    toast.success("Facility added successfully!");
  }
};

        return (
            <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl sm:p-8">
                <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                    <span className="w-1 h-6 bg-green-600 rounded-full" />
                    Add New Facility
                </h1>

                <form onSubmit={handleSubmit} className="mt-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-xs font-medium text-gray-700"
                            >
                                Facility Name <span className="text-red-500">*</span>
                            </label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="e.g. Downtown Arena"
                                required
                                className="w-full px-3 text-sm transition border border-gray-300 rounded-lg outline-none h-11 focus:border-green-600"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="facility_type"
                                className="block mb-2 text-xs font-medium text-gray-700"
                            >
                                Facility Type <span className="text-red-500">*</span>
                            </label>

                            <select
                                id="facility_type"
                                name="facility_type"
                                required
                                defaultValue=""
                                className="w-full px-3 text-sm text-gray-600 transition bg-white border border-gray-300 rounded-lg outline-none h-11 focus:border-green-600"
                            >
                                <option value="" disabled>
                                    Select sport type
                                </option>

                                <option value="Football">Football</option>
                                <option value="Badminton">Badminton</option>
                                <option value="Cricket">Cricket</option>
                                <option value="Basketball">Basketball</option>
                                <option value="Tennis">Tennis</option>
                                <option value="Swimming">Swimming</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="image"
                                className="block mb-2 text-xs font-medium text-gray-700"
                            >
                                Image URL <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                                <ImageIcon
                                    size={16}
                                    className="absolute text-gray-500 -translate-y-1/2 left-3 top-1/2"
                                />

                                <input
                                    id="image"
                                    type="url"
                                    name="image"
                                    placeholder="https://..."
                                    required
                                    className="w-full py-2 pr-3 text-sm transition border border-gray-300 rounded-lg outline-none h-11 pl-9 focus:border-green-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="location"
                                className="block mb-2 text-xs font-medium text-gray-700"
                            >
                                Location <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">
                                <MapPin
                                    size={16}
                                    className="absolute text-gray-500 -translate-y-1/2 left-3 top-1/2"
                                />

                                <input
                                    id="location"
                                    type="text"
                                    name="location"
                                    placeholder="City, Area"
                                    required
                                    className="w-full py-2 pr-3 text-sm transition border border-gray-300 rounded-lg outline-none h-11 pl-9 focus:border-green-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="price_per_hour"
                                className="block mb-2 text-xs font-medium text-gray-700"
                            >
                                Price Per Hour ($) <span className="text-red-500">*</span>
                            </label>

                            <input
                                id="price_per_hour"
                                type="number"
                                name="price_per_hour"
                                placeholder="0.00"
                                required
                                min="0"
                                step="0.01"
                                className="w-full px-3 text-sm transition border border-gray-300 rounded-lg outline-none h-11 focus:border-green-600"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="capacity"
                                className="block mb-2 text-xs font-medium text-gray-700"
                            >
                                Capacity (People) <span className="text-red-500">*</span>
                            </label>

                            <input
                                id="capacity"
                                type="number"
                                name="capacity"
                                placeholder="Max players"
                                required
                                min="1"
                                className="w-full px-3 text-sm transition border border-gray-300 rounded-lg outline-none h-11 focus:border-green-600"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="block mb-3 text-xs font-medium text-gray-700">
                            Available Time Slots
                        </label>

                        <div className="flex flex-wrap gap-2">
                            {timeSlots.map((slot) => (
                                <button
                                    key={slot}
                                    type="button"
                                    onClick={() => handleSlot(slot)}
                                    className={`rounded-full border px-3 py-1 text-[10px] transition ${selectedSlots.includes(slot)
                                        ? "border-green-600 bg-green-600 text-white"
                                        : "border-gray-300 bg-white text-gray-600 hover:border-green-500"
                                        }`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <label
                            htmlFor="description"
                            className="block mb-2 text-xs font-medium text-gray-700"
                        >
                            Description
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            rows={4}
                            placeholder="Tell players about your facility, equipment provided, and house rules..."
                            className="w-full p-3 text-sm transition border border-gray-300 rounded-lg outline-none resize-none focus:border-green-600"
                        />
                    </div>

                    <div className="mt-6">
                        <label
                            htmlFor="owner_email"
                            className="block mb-2 text-xs font-medium text-gray-700"
                        >
                            Owner Email (Account Linked)
                        </label>

                        <div className="relative">
                            <Lock
                                size={16}
                                className="absolute text-gray-500 -translate-y-1/2 left-3 top-1/2"
                            />

                            <input
                                id="owner_email"
                                type="email"
                                name="owner_email"
                                value={userEmail}
                                readOnly
                                className="w-full py-2 pr-3 text-sm text-gray-500 bg-gray-100 border border-gray-300 rounded-lg outline-none h-11 pl-9"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="flex items-center justify-center w-full h-12 gap-2 mt-8 text-sm font-medium text-white transition bg-green-600 rounded-lg hover:bg-green-700"
                    >
                        <PlusCircle size={17} />
                        Submit Facility Listing
                    </button>

                    <p className="mt-3 text-center text-[10px] text-gray-500">
                        By submitting, you agree to our{" "}
                        <span className="text-green-700 underline">Venue Provider Terms</span>
                        .
                    </p>
                </form>
            </div>
        );
    };

export default AddFacilityForm;