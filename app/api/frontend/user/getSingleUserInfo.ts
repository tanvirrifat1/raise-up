export async function getSingleUserInfo(id: string) {
  try {
    const res = await fetch(`/api/backend/users/${id}`, {
      next: { tags: ["single-users"] },
    });

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
