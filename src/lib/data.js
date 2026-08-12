export const  getAllSports = async () => {
    const res = await fetch(`${process.env.NEXT_API_URI}/sports`);
    const data = await res.json()
  return data
}