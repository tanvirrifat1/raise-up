export async function getAllSalesDet() {
  try {
    // if (typeof window === 'undefined'){
    //   return {
    //     props: {
    //       role: []
    //     }
    //   }
    // }
    const res = await fetch(`/api/salesdet`, {
      // cache: "no-store",
      next: { tags: ["saleDet"] },
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
