export async function allUsersInfo() {
  try {
    const res = await fetch(
      `/api/backend/users`,
      {
        next: { tags: ["users"] },
      }
    );

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
