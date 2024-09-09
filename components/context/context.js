"use client";
import { createContext, useEffect, useState } from "react";
import { getAllCartItems } from "../../utils/getAllCartItems";
import { getAllSelectedCartItems } from "../../utils/getAllSelectedCartItems";
import { getSelectedCartItems } from "../../utils/getSelectedCartItems";
import { getAllBuyProducts } from "../../utils/getAllBuyProducts";
import { useSession } from "next-auth/react";
import { getSingleUser } from "../../utils/getSingleUser";

export const CartContext = createContext();

const Context = ({ children }) => {
  const allCartItems = getAllCartItems();
  const allSelectedCartItems = getAllSelectedCartItems();
  const selectedCartItems = getSelectedCartItems();
  const allBuyProducts = getAllBuyProducts();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProductsPrice, setTotalProductsPrice] = useState(0);
  const [buyPrice, setBuyPrice] = useState(0);
  const [user, setUser] = useState(null);
  const { data } = useSession();
  const cusId = data?.user?.xcusid;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getSingleUser(cusId);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [cusId]);
  useEffect(() => {
    if (allSelectedCartItems?.length > 0) {
      const items = JSON.parse(localStorage.getItem("selectedAllItems")) || [];
      let totalPrice = 0;
      items.forEach((item) => {
        totalPrice += parseInt(item?.quantity) * parseFloat(item?.price);
      });
      setTotalPrice(totalPrice);
      const buyItems = JSON.parse(localStorage.getItem("BuyProducts")) || [];
      let totalBuyPrice = 0;
      buyItems.forEach((item) => {
        totalBuyPrice += parseInt(item?.quantity) * parseFloat(item?.price);
      });
      setBuyPrice(totalBuyPrice);
    } else {
      const items = JSON.parse(localStorage.getItem("selectedItems")) || [];
      let totalProductsPrice = 0;
      items.forEach((item) => {
        totalProductsPrice +=
          parseInt(item?.quantity) * parseFloat(item?.price);
      });
      setTotalProductsPrice(totalProductsPrice);
      const buyItems = JSON.parse(localStorage.getItem("BuyProducts")) || [];
      let totalBuyPrice = 0;
      buyItems.forEach((item) => {
        totalBuyPrice += parseInt(item?.quantity) * parseFloat(item?.price);
      });
      setBuyPrice(totalBuyPrice);
    }
  }, [allSelectedCartItems, allBuyProducts]);

  return (
    <CartContext.Provider
      value={{
        allCartItems,
        allSelectedCartItems,
        selectedCartItems,
        allBuyProducts,
        totalPrice,
        setTotalPrice,
        totalProductsPrice,
        setTotalProductsPrice,
        buyPrice,
        setBuyPrice,
        user,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Context;
