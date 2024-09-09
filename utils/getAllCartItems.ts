export function getAllCartItems(): { productId: number; quantity: number }[] {
  try {
    if (typeof window == "undefined") {
      return [];
    }

    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = localStorage.getItem("cartItems");

      const totalCartItems: { productId: number; quantity: number }[] =
        JSON.parse(storedData || "[]");

      return totalCartItems;
    }
  } catch (error) {
    console.error(error);
  }
}