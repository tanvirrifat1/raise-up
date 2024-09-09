export async function getAllSalesMst() {
  try {
    // if (typeof window === 'undefined'){
    //   return {
    //     props: {
    //       role: []
    //     }
    //   }
    // }
    const res = await fetch(`/api/salesmst`, {
      // cache: "no-store",
      next: { tags: ["salemst"] },
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
