import { auth } from "./auth";
import { headers } from "next/headers";
import { getJwtToken } from "./token";

export const getAllSports = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/sports`);
  const data = await res.json();
  return data;
};

export const getSelectedFacility = async (id) => {
  const token = await getJwtToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/sports/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return data;
};

// export const getBookingsData = async () => {
//   const token = await getJwtToken();

//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });
//   const user = session?.user;

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URI}/bookings/${user?.id}`,
//     {
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     },
//   );

//   const data = await res.json();

//   return data;
// };

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