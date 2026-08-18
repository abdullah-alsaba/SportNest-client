import { auth } from "./auth";
import { headers } from "next/headers";
import { getJwtToken } from "./token";

export const getAllSports = async (search = "", type = "") => {
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (type && type !== "All Sports") params.append("type", type);

  const query = params.toString() ? `?${params.toString()}` : "";
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/sports${query}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const getSelectedFacility = async (id) => {
  const token = await getJwtToken();

  console.log("JWT TOKEN:", token);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/sports/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return data;
};

export const getBookingsData = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    return [];
  }

  const token = await getJwtToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/bookings/${session.user.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    console.log("Booking API Error:", res.status);
    console.log("Booking API Response:", await res.text());

    return [];
  }

  const data = await res.json();

  return Array.isArray(data) ? data : [];
};