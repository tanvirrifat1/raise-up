export async function getCurrency() {
  try {
    // if(typeof window === 'undefined'){
    //   return []
    // }
    const res = await fetch(
      `/api/backend/codes/currency`,
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
