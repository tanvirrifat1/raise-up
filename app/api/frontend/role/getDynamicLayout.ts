export async function getDynamicLayout(id: string, role: string) {
  try {
    const res = await fetch(
      `/api/backend/users/user-role-layout/${id}?role=${role}`,
      {
        next: { tags: ["user-role-layout"] },
      }
    );

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
