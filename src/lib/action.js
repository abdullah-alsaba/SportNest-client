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


export const getCancelFacility = async (_id)=>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/bookings/${_id}`, {
        method: "DELETE",
        headers: {
            "content-type" : "application/json"
        }

        
    })
    const data = await res.json();

    return data 
}