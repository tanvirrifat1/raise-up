"use client"
import Image from 'next/image';
import { getSingleProduct } from "../../utils/getSingleProduct";
import toast from 'react-hot-toast';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from "next/navigation"
import { CartContext } from '../context/context';

const Button = ({ id, icon }) => {
    const { allCartItems } = useContext(CartContext)
    const router = useRouter();
    const [refreshKey, setRefreshKey] = useState(0);

    const handleEvent = () => {
        setRefreshKey(prevKey => prevKey + 1);
    };

    useEffect(() => {
        router.refresh();
    }, [router, refreshKey]);
    const addToCart = async (id) => {
        const product = await getSingleProduct(id);
        const [item] = allCartItems.filter(item => item?.productId == product?.item?.xitemid);
        if (item) {
            toast.error("Already Added The Product");
            return;
        }
        if (product?.item?.xitemid) {
            // item add to cart functionality here 
            const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const existingCartItemIndex = existingCartItems.findIndex(item => item.productId === product.item.xitemid);

            if (existingCartItemIndex !== -1) {
                // If item already exists, increase its quantity
                existingCartItems[existingCartItemIndex].quantity += 1;
            } else {
                // If item doesn't exist, add it to the cart
                existingCartItems.push({
                    productId: product.item.xitemid, quantity: 1, price: product?.item?.xpricepur, stdPrice: product?.item?.xstdprice, desc: product?.item?.xdesc.slice(0, 30), status: "true", code: product?.item?.xitemcode, cur: product?.item?.xcur, cst: product?.item?.xstdcost, disc: product?.item?.xdisc, stk: product?.item?.xstock
                });
            }

            localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
            toast.success('The Product Added Successfully.')

            // item add to selectedCart functionality here 
            const existingSelectCartItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
            const existingSelectCartItemIndex = existingSelectCartItems.findIndex(item => item.productId === product.item.xitemid);

            if (existingSelectCartItemIndex !== -1) {
                // If item already exists, increase its quantity
                existingSelectCartItems[existingSelectCartItemIndex].quantity += 1;
            } else {
                // If item doesn't exist, add it to the cart
                existingSelectCartItems.push({
                    productId: product.item.xitemid, quantity: 1, price: product?.item?.xpricepur, stdPrice: product?.item?.xstdprice, desc: product?.item?.xdesc.slice(0, 30), status: "true", code: product?.item?.xitemcode, cur: product?.item?.xcur, cst: product?.item?.xstdcost, disc: product?.item?.xdisc, stk: product?.item?.xstock
                });
            }

            localStorage.setItem('selectedItems', JSON.stringify(existingSelectCartItems));
            handleEvent();
        }
    }

    return (
        <div onClick={() => addToCart(id)} className="w-[31px] h-[28px] border bg-[#000] rounded-md flex justify-center items-center cursor-pointer">
            <Image
                width={700}
                height={300}
                src={icon}
                alt="icon"
                className="text-white w-[20px] h-[21px]"
            />
        </div>
    );
};

export default Button;
