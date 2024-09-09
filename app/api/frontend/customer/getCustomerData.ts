export async function getCustomerData() {
  try {
    const res = await fetch(
      `/api/backend/customer`,
      {
        cache: "no-store",
        //   next: { tags: ["singleCode"] },
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
