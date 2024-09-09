export async function getSingleSalesMst(id: string) {
  try {
    const res = await fetch(`/api/salesmst/${id}`, {
      cache: "no-store",
      // next: { tags: ["singleSalemst"] },
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
