export async function getAllSubCategoryInformation() {
  try {
    const res = await fetch(
      `/api/backend/sub-category`,
      {
        next: { tags: ["sub-category"] },
      }
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
