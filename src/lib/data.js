export const getAllSports = async () => {
  const res = await fetch(`${process.env.NEXT_API_URI}/sports`);
  const data = await res.json();
  return data;
};

export const getSelectedFacility = async (id) => {
  const res = await fetch(`${process.env.NEXT_API_URI}/sports/${id}`);

  const data = await res.json();

  return data;
};

import { auth } from "./auth"; 
import { headers } from "next/headers";

export const getBookingsData = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user 
  
  const res = await fetch(`${process.env.NEXT_API_URI}/bookings/${user?.id}`)
  
  const data = await res.json()


  return data

}