"use client";

import React, { useState } from "react";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import DurationSelector from "../Duration/Duration";
import { FaArrowRight } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { bookingFacility } from "@/lib/action";

const BookingForm = ({ selectedFacilities }) => {
  const { data: session } = authClient.useSession();

  const [hours, setHours] = useState(1);
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const {
    name,
    price_per_hour,
    available_slots,
    _id,
    image,
    facility_type,
    location,
  } = selectedFacilities;

  const totalPrice = price_per_hour * hours;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const bookingData = {
      facility_name: name,
      booking_date: formData.get("date"),
      time_slot: formData.get("time"),
      hours,
      total_price: totalPrice,
      facility_id: _id,
      facility_image: image,
      facility_location: location,
      facility_type,
      user_name: session?.user?.name,
      user_email: session?.user?.email,
      status: "pending",
    };

    setIsBooking(true);

    const result = await bookingFacility(bookingData);

    console.log(bookingData, result)

    setIsBooking(false);
    setIsBooked(true);

    toast.success("Booking confirmed successfully!");
  };

  return (
    <div className="p-5 bg-white border border-gray-300 shadow-sm rounded-xl sm:p-6">
      <h1 className="text-xl font-bold text-gray-800">Book This Facility</h1>

      <p className="mt-1 text-sm text-gray-500">
        Fill in your details to reserve this spot
      </p>

      <Form className="w-full mt-6 max-w-none" onSubmit={onSubmit}>
        <Fieldset className="w-full">
          <FieldGroup className="gap-5">
            <TextField name="facility">
              <Label className="text-xs font-semibold text-gray-700">
                Facility
              </Label>

              <Input value={name} readOnly className="mt-2" />

              <FieldError />
            </TextField>

            <TextField isRequired name="date" type="date">
              <Label className="text-xs font-semibold text-gray-700">
                Booking Date
              </Label>

              <Input className="mt-2" />

              <FieldError />
            </TextField>

            <div>
              <Label className="text-xs font-semibold text-gray-700">
                Time Slot
              </Label>

              <select
                name="time"
                required
                defaultValue=""
                className="w-full px-3 mt-2 text-sm text-gray-700 transition bg-white border border-gray-300 rounded-lg outline-none h-11 focus:border-green-600"
              >
                <option value="" disabled>
                  Choose Your Time
                </option>

                {available_slots?.map((slot) => {
                  const startTime = slot.split("-")[0];

                  return (
                    <option key={slot} value={startTime}>
                      {slot}
                    </option>
                  );
                })}
              </select>
            </div>

            <DurationSelector
              price_per_hour={price_per_hour}
              onDurationChange={setHours}
            />

            <Button
              type="submit"
              isDisabled={isBooking || isBooked}
              className={`flex items-center justify-center w-full h-12 gap-2 mt-1 text-sm font-semibold text-white rounded-lg transition ${
                isBooked
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isBooked
                ? "Already Booked"
                : isBooking
                  ? "Booking..."
                  : "Confirm Booking"}

              {!isBooked && !isBooking && <FaArrowRight />}
            </Button>

            <p className="text-xs text-center text-gray-500">
              {isBooked
                ? "You have already booked this facility."
                : "You won't be charged yet"}
            </p>
          </FieldGroup>
        </Fieldset>
      </Form>
    </div>
  );
};

export default BookingForm;
