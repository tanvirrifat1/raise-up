export async function getSingleRole(id: string) {
  try {
    const res = await fetch(
      `/api/backend/role/${id}`,
      {
        next: { tags: ["single-role"] },
      }
    );

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
