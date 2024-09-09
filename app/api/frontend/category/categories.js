export async function cetegories() {
  try {
    // if (typeof window === 'undefined'){
    //   return {
    //     props: {
    //       role: []
    //     }
    //   }
    // }
    const res = await fetch(`/api/backend/category`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
