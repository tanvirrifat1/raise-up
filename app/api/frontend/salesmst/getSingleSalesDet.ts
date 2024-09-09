export async function getSingleSalesDet(id: string) {
  try {
    const res = await fetch(`/api/salesdet/${id}`, {
      // cache: "no-store",
      next: { tags: ["singlesaledet"] },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
