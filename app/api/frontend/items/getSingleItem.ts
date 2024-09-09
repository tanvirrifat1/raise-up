export async function getSingleItemInformation(id: string) {
  try {
    const res = await fetch(
      `/api/backend/items/${id}`,
      {
        cache: "no-store",
      }
    );

    // if (!res.ok) {
    //   throw new Error(`HTTP error! Status: ${res.status}`);
    // }

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
