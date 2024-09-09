export async function getStock() {
  try {
    // if(typeof window === 'undefined'){
    //   return []
    // }
    const res = await fetch(
      `/api/backend/codes/type-of-stock`,
      {
        cache: "no-store",
        // next: { tags: ["uom"] },
      }
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
