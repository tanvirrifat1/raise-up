import toast from "react-hot-toast";

export async function getSingleSubCategoryInformation(id: string) {
  try {
    const res = await fetch(
      `/api/backend/sub-category/${id}`,
      {
        next: { tags: ["single-sub-category"] },
      }
    );

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
