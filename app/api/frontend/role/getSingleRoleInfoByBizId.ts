export async function getSingleRoleInfoByBizId(id: any) {
  try {
    const res = await fetch(
      `/api/backend/users/user-role/${id}`,
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
