/* eslint-disable react/no-unescaped-entities */
"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../components/context/context";
import bookAdam from "../../assets/home/bookAdam.jpg";
import Image from "next/image";
import { useSession } from "next-auth/react";
import CustomerAddress from "../../components/ui/customerAddress";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { customRevidateTag } from "../../utils/revalidateTag";

const CheckoutPage = () => {
  const {
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
  } = useContext(CartContext);
  const router = useRouter();
  const { data } = useSession();
  // confirm order function here
  const confirmOrder = async () => {
    if (!allSelectedCartItems?.length > 0 && !selectedCartItems?.length > 0 && !allBuyProducts?.length > 0) {
      toast.error("please select items")
    } else {
      try {
        const secus = {
          xcus: user?.xcus,
        };

        const deliveryResponse = await fetch(`/api/frontend/sales`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            zemail: user?.zemail,
            bizid: user?.bizid,
            xdate: new Date(),
            xcus: user?.xcus,
            xpaymethod: "COD",
            xstatus: "Pending",
            xgrossdisc: 50.40,
            xrecflag: "Live",
            xyear: new Date().getFullYear(),
            xper: new Date().getMonth() + 1,
            secus: secus,
            orderProducts: allSelectedCartItems.length > 0 && allBuyProducts.length > 0 ? allSelectedCartItems.concat(allBuyProducts) : allBuyProducts.length > 0 && !allSelectedCartItems.length > 0 && selectedCartItems.length > 0 ? selectedCartItems.concat(allBuyProducts) : allSelectedCartItems.length > 0 ? allSelectedCartItems : allBuyProducts.length > 0 ? allBuyProducts : selectedCartItems
          }),
        });

        if (!deliveryResponse.ok) {
          throw new Error(
            `Failed to post delivery info: ${deliveryResponse.status}`
          );
        }
        const res = await deliveryResponse.json();
        if (res) {
          toast.success("Your Order Confirmed.");
          customRevidateTag("salse-product")
          router.push("/customer-dashboard")
          localStorage.removeItem("cartItems")
          localStorage.removeItem("selectedAllItems")
          localStorage.removeItem("selectedItems")
          localStorage.removeItem("BuyProducts")
          setTotalPrice(0)
          setTotalProductsPrice(0)
          setBuyPrice(0)
          router.refresh()
        }
        // router.refresh();
      } catch (error) {
        console.error("Error posting data:", error.message);
        toast.error("Failed to confirm orders.");
      }
    }
  };
  return (
    <div className="max-w-[1520px] mx-auto bg-grayBright p-1 md:p-5 min-h-[600px]">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-2 md:gap-5">
        {/* left side (item list & address modal) style here */}
        <div className="w-full md:w-2/3">
          <div className="flex justify-center items-center bg-white mb-3 p-5">
            {data === null ? (
              <div>
                <p>
                  Already Have An Account? Please{" "}
                  <Link href="/login/customer-login">
                    <span className="text-primary font-semibold">Login</span>
                  </Link>{" "}
                </p>
                <div className=" flex justify-center items-center">or</div>
                <p>
                  Don't Have An Account? Please{" "}
                  <Link href="/register">
                    <span className="text-primary font-semibold">Register</span>
                  </Link>{" "}
                </p>
              </div>
            ) : (
              <CustomerAddress />
            )}
          </div>
          {/* all items  */}
          <div className="grid grid-cols-1 gap-1 w-full">
            {
              allBuyProducts.length > 0 ? allBuyProducts?.map((item) => (
                <div
                  key={item.productId}
                  className="flex justify-between items-center bg-white p-5"
                >
                  <div className="mr-1">
                    <Image
                      width={700}
                      height={300}
                      src={bookAdam}
                      alt="item img"
                      className="max-w-[100px] h-[120px]"
                    ></Image>
                  </div>
                  <div className="space-y-1 w-[100px] md:w-[120px] lg:w-2/5">
                    <h1 className="text-[11px] md:text-[16px] text-primary">
                      {item?.desc ? item?.desc + "..." : ""}
                    </h1>
                  </div>
                  <div className="text-nowrap mr-3 text-[11px] md:text-[16px]">
                    Quantity: {item?.quantity}
                  </div>
                  {/* price div  */}
                  <div className="text-nowrap text-[12px] md:text-[16px]">
                    <p>{item?.price} TK.</p>
                    <p className="line-through" style={{ color: "red" }}>
                      {item?.stdPrice} TK.
                    </p>
                  </div>
                </div>
              )) : ""
            }
          </div>
          <div className="grid grid-cols-1 gap-1 w-full mt-1">
            {allSelectedCartItems?.length > 0
              ? allSelectedCartItems?.map((item) => (
                <div
                  key={item.productId}
                  className="flex justify-between items-center bg-white p-5"
                >
                  <div className="mr-1">
                    <Image
                      width={700}
                      height={300}
                      src={bookAdam}
                      alt="item img"
                      className="max-w-[100px] h-[120px]"
                    ></Image>
                  </div>
                  <div className="space-y-1 w-[100px] md:w-[120px] lg:w-2/5">
                    <h1 className="text-[11px] md:text-[16px] text-primary">
                      {item?.desc ? item?.desc + "..." : ""}
                    </h1>
                  </div>
                  <div className="text-nowrap mr-3 text-[11px] md:text-[16px]">
                    Quantity: {item?.quantity}
                  </div>
                  {/* price div  */}
                  <div className="text-nowrap text-[12px] md:text-[16px]">
                    <p>{item?.price} TK.</p>
                    <p className="line-through" style={{ color: "red" }}>
                      {item?.stdPrice} TK.
                    </p>
                  </div>
                </div>
              ))
              : selectedCartItems?.map((item) => (
                <div
                  key={item.productId}
                  className="flex justify-between items-center bg-white p-5"
                >
                  <div>
                    <Image
                      width={700}
                      height={300}
                      src={bookAdam}
                      alt="item img"
                      className="max-w-[100px] h-[120px]"
                    ></Image>
                  </div>
                  <div className="space-y-1 w-[100px] md:w-[120px] lg:w-2/5 ml-1">
                    <h1 className="text-[13px] md:text-[16px] font-semibold text-primary">
                      {item?.desc ? item?.desc + "..." : ""}
                    </h1>
                  </div>
                  <div className="text-nowrap text-sm md:text-[16px]">
                    Quantity: {item?.quantity}
                  </div>
                  {/* price div  */}
                  <div className="ml-2 text-nowrap">
                    <p className="text-primary">{item?.price} TK.</p>
                    <p className="line-through" style={{ color: "red" }}>
                      {item?.stdPrice} TK.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* order summery style here  */}
        <div className="w-full md:w-1/3 bg-white p-3 md:min-h-[600px]">
          <div className="mb-3">
            <h2 className="flex justify-between justify-center font-semibold text-sm text-primary">
              <span>Delivery Type</span> <span>Cash-On</span>
            </h2>
          </div>
          <hr />
          <h1 className="text-xl font-semibold mt-3">Order Summery</h1>
          <div className="flex justify-between items-center mt-2">
            <h2>Subtotal</h2>
            <span>
              {totalPrice > 0
                ? (totalPrice + buyPrice).toFixed(2)
                : (totalProductsPrice + buyPrice).toFixed(2)}
              $
            </span>
          </div>
          <div className="flex justify-between items-center">
            <h3>Shipping Fee</h3>
            <span>0$</span>
          </div>
          <div className="flex justify-between items-center">
            <h3>Total</h3>
            <span>
              {totalPrice > 0
                ? (totalPrice + buyPrice).toFixed(2)
                : (totalProductsPrice + buyPrice).toFixed(2)}
              $
            </span>
          </div>
          <button
            onClick={() => confirmOrder()}
            className="bg-primary w-full text-white font-semibold py-1 rounded-md mt-5 "
          >
            Order Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
