export async function getCodeUom() {
  try {
    // if(typeof window === 'undefined'){
    //   return []
    // }
    const res = await fetch(`/api/backend/codes/uom`, {
      cache: "no-store",
      // next: { tags: ["uom"] },
    });

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
