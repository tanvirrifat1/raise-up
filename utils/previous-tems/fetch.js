export async function getItemsByBIZID(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/backend/items/previous-items/${id}`,
      { cache: "no-store" }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("error from ");
  }
}
