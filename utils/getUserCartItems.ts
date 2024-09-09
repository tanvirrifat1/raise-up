export async function getUserCartItems(email: string): Promise<any | void> {
  try {
    // if (typeof window == "undefined") {
    //   return [];
    // }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/frontend/sales/${email}`,
      {
        // cache: "no-store",
        next: { tags: ["salse-product"] },
      }
    );

    if (res.ok) {
      return await res.json();
    } else {
      console.error(`Failed to get data. Status code: ${res.status}`);
    }
  } catch (error) {
    console.error("Error getting data:", error);
  }
}
