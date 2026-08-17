"use server";

import { getJwtToken } from "./token";

export const bookingFacility = async (bookingData) => {
  const token = await getJwtToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookingData),
  });

  const data = await res.json();

  return data;
};

export const getCancelFacility = async (_id) => {
  const token = await getJwtToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/bookings/${_id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();

  return data;
};

export const getAddNewFacility = async (facilityData) => {
  const token = await getJwtToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/sports`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(facilityData),
  });

  const data = await res.json();

  return data;
};
