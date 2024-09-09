export async function getSingleCode(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/codes/${id}`, {
      // cache: "no-store",
      next: { tags: ["singleCode"] },
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
