export async function getSingleCategoryInformation(id: string) {
  try {

    const res = await fetch(
      `/api/backend/category/${id}`,
      {
        next: { tags: ["single-category"] },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
