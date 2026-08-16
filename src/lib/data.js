export const  getAllSports = async () => {
    const res = await fetch(`${process.env.NEXT_API_URI}/sports`);
    const data = await res.json()
  return data
}


export const getSelectedFacility = async ( id ) => {
  const res = await fetch(`${process.env.NEXT_API_URI}/sports/${id}`);

  const data = await res.json();


  return data;
};