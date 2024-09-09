"use client"
import CartItem from "./cartItem"
import { getAllCartItems } from "../../utils/getAllCartItems"
import { useContext, useEffect, useState } from "react";
import { IoMdCheckbox } from "react-icons/io";
import { RiCheckboxBlankLine } from "react-icons/ri";
import Link from "next/link";
import { CartContext } from "../context/context";

const CartItems = () => {
    const totalCartItems = getAllCartItems();
    const { selectItems, setSelectItems, allSelectedCartItems, selectedCartItems, totalPrice, setTotalPrice, totalProductsPrice, setTotalProductsPrice } = useContext(CartContext)
    const [nonSelectItems, setNonSelectItems] = useState([]);
    // when empty cartItems then set totalPrice & setTotalProductsPrice = 0 
    useEffect(() => {
        if (totalCartItems?.length === 0) {
            setTotalPrice(0)
            setTotalProductsPrice(0)
        }
    }, [setTotalPrice, setTotalProductsPrice, totalCartItems])

    // selectAll functionality here when selectAll items by one click
    const selectedAll = () => {
        const items = JSON.parse(localStorage.getItem("cartItems")) || [];
        const updatedItems = items.map(item => ({
            ...item,
            status: "true"
        }));
        localStorage.setItem("selectedAllItems", JSON.stringify(updatedItems))
        let totalPrice = 0;
        items.forEach(item => {
            totalPrice += parseInt(item?.quantity) * parseFloat(item?.price);
        });
        setTotalPrice(totalPrice)
        setTotalProductsPrice(prevPrice => prevPrice)
    }
    // nonSelectAll functionality here when nonSelectAll items by one click
    const nonSelectedAll = () => {
        localStorage.removeItem("selectedAllItems")
        setTotalPrice(0)
        setTotalProductsPrice(prevPrice => prevPrice)
    }
    return (<div>
        {
            totalCartItems?.length > 0 ? <div className="bg-grayBright p-1 md:p-5 min-h-[600px]">
                <div className="flex flex-col-reverse md:flex-row justify-between gap-2 md:gap-5">
                    {/* left side (item list) style here */}
                    <div className="w-full md:w-2/3"> <div className="flex justify-between items-center bg-white mb-3 p-5">
                        <h3 className="text-[14px] md:text-[16px]">Total Cart Items: {totalCartItems?.length}</h3>
                        <div className="flex justify-center items-center gap-1 text-[14px] md:text-[16px]">
                            <p className="cursor-pointer">
                                {allSelectedCartItems?.length > 0 ? <span onClick={() => nonSelectedAll()} className="text-primary"><IoMdCheckbox ></IoMdCheckbox></span> : <span onClick={() => selectedAll()}><RiCheckboxBlankLine ></RiCheckboxBlankLine></span>}
                            </p>
                            <span>Select All ( {allSelectedCartItems?.length > 0 ? [allSelectedCartItems?.length] : selectedCartItems?.length} items)</span>
                        </div>
                    </div>
                        <div className="grid grid-cols-1 gap-1 w-full">
                            {
                                allSelectedCartItems?.length > 0 ? allSelectedCartItems?.map(item => <CartItem
                                    key={item?.xitemid}
                                    item={item}
                                    setSelectItems={setSelectItems}
                                    selectItems={selectItems}
                                    nonSelectItems={nonSelectItems}
                                    setNonSelectItems={setNonSelectItems}
                                ></CartItem>) : totalCartItems?.map(item => <CartItem
                                    key={item?.xitemid}
                                    item={item}
                                    setSelectItems={setSelectItems}
                                    selectItems={selectItems}
                                    nonSelectItems={nonSelectItems}
                                    setNonSelectItems={setNonSelectItems}
                                ></CartItem>)
                            }
                        </div>
                    </div>
                    {/* order summery style here  */}
                    <div className="w-full md:w-1/3 bg-white p-3 md:min-h-[600px]">
                        <h1 className="text-xl font-semibold">Order Summery</h1>
                        <div className="flex justify-between items-center mt-2">
                            <h2>Subtotal</h2>
                            <span >{totalPrice > 0 ? totalPrice?.toFixed(2) : totalProductsPrice?.toFixed(2)}$</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 >Shipping Fee</h3>
                            <span>0$</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3>Total</h3>
                            <span >{totalPrice > 0 ? totalPrice?.toFixed(2) : totalProductsPrice?.toFixed(2)}$</span>
                        </div>
                        <Link href="/checkout">
                            <button className="uppercase bg-primary text-white w-full py-2 rounded-sm text-md md:text-sm lg:text-md mt-5">Proceed to checkout</button>
                        </Link>
                    </div>
                </div>
            </div> : <div className="flex flex-col justify-center items-center min-h-[600px] gap-2">
                <p>There are no items in this cart </p>
                <Link href="/">
                    <button className="border p-2 uppercase text-primary font-semibold">Continue shopping</button>
                </Link>
            </div>
        }
    </div>

    );
};

export default CartItems;
