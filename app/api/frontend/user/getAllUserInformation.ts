export async function getAllUserInformation(id: string, role: string) {
  try {
    const res = await fetch(
      `/api/backend/users/user-role/${id}?role=${role}`,
      {
        next: { tags: ["user-role"] },
      }
    );

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
