export async function getAllRoles() {
  try {
    const res = await fetch(`/api/backend/role`, {
      next: { tags: ["role"] },
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
