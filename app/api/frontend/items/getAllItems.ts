export async function getAllItemInformation() {
  try {
    // if(typeof window === 'undefined'){
    //   return []
    // }
    const res = await fetch(
      `/api/backend/items`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
