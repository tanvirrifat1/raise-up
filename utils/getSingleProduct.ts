export async function getSingleProduct(id: string): Promise<any> {
  try {
    const res: Response = await fetch(
      `/api/frontend/items/${id}`,
      {
        cache: "no-store",
      }
    );
    const product: any = await res.json();
    return product;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
}
