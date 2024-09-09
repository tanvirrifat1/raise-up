export function getAllSelectedCartItems(): {
  productId: number;
  quantity: number;
  status: string;
  stdPrice: string;
  price: string;
}[] {
  try {
    if (typeof window == "undefined") {
      return [];
    }

    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = localStorage.getItem("selectedAllItems");

      const totalCartItems: {
        productId: number;
        quantity: number;
        status: string;
        stdPrice: string;
        price: string;
      }[] = JSON.parse(storedData || "[]");

      return totalCartItems;
    }
  } catch (error) {
    console.error(error);
  }
}
