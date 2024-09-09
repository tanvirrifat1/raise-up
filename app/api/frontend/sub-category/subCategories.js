export async function subCategories() {
  try {
    // if (typeof window === 'undefined'){
    //   return {
    //     props: {
    //       role: []
    //     }
    //   }
    // }
    const res = await fetch(`/api/backend/sub-category`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
