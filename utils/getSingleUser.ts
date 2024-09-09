export async function getSingleUser(cusId: string) {
  try {
    const res = await fetch(`/api/customer/${cusId}`, {
      next: { tags: ["profile-update"] },
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
