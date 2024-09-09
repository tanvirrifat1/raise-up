export function getAllBuyProducts(): { productId: number; quantity: number }[] {
  try {
    if (typeof window == "undefined") {
      return [];
    }

    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = localStorage.getItem("BuyProducts");

      const totalBuyItems: { productId: number; quantity: number }[] =
        JSON.parse(storedData || "[]");

      return totalBuyItems;
    }
  } catch (error) {
    console.error(error);
  }
}
