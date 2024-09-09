export async function getAllCategoryInformation() {
  try {
    const res = await fetch(
      `/api/backend/category`,
      {
        next: { tags: ["category"] },
      }
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
