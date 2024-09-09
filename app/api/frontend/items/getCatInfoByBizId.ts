export async function getCatInfoByBizId(id: string) {
  try {
    // if (typeof window === "undefined") {
    //   return [];
    // }
    const res = await fetch(
      `/api/backend/items/categoryInfo/${id}`,
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
