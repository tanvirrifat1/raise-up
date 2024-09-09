export async function getUsersByBiz(id: string) {
  try {
    const res = await fetch(
      `/api/backend/users/user-by-biz/${id}`,
      {
        next: { tags: ["user-by-biz"] },
      }
    );

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
