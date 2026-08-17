export const bookingFacility = async (bookingData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  return await res.json();
};
