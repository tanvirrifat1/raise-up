"use client"
import Image from 'next/image';
import bookAdam from "../../assets/home/bookAdam.jpg"
import { TbCurrencyTaka } from 'react-icons/tb';
import toast from 'react-hot-toast';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CartContext } from '../context/context';

const ProductDetails = ({ product }) => {
    const [quantity, setQuantity] = useState(1)
    const [refreshKey, setRefreshKey] = useState(0);
    const { allCartItems, allSelectedCartItems, setTotalPrice, setTotalProductsPrice, buyPrice, setBuyPrice } = useContext(CartContext);
    const router = useRouter();
    const [item] = allCartItems.filter(item => item.productId == product?.item?.xitemid);

    const handleEvent = () => {
        setRefreshKey(prevKey => prevKey + 1);
    };
    // add to cart functionality here 
    const addToCart = (product) => {
        if (item) {
            toast.error("Already Added The Product");
            return;
        }
        if (product?.item?.xitemid) {
            // item add to cart functionality here
            const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const existingCartItemIndex = existingCartItems.findIndex(item => item.productId === product.item.xitemid);

            if (existingCartItemIndex !== -1) {
                setQuantity(prev => prev + 1)
            } else {
                existingCartItems.push({
                    productId: product.item.xitemid, quantity: quantity, price: product?.item?.xpricepur, stdPrice: product?.item?.xstdprice, desc: product?.item?.xdesc.slice(0, 30), status: "true", code: product?.item?.xitemcode, cur: product?.item?.xcur, cst: product?.item?.xstdcost, disc: product?.item?.xdisc, stk: product?.item?.xstock
                });
            }

            localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
            toast.success('The Product Added Successfully.')

            // item add to selectedCart functionality here
            const existingSelectCartItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
            const existingSelectCartItemIndex = existingSelectCartItems.findIndex(item => item.productId === product.item.xitemid);

            if (existingSelectCartItemIndex !== -1) {
                setQuantity(prev => prev + 1)
            } else {
                existingSelectCartItems.push({
                    productId: product.item.xitemid, quantity: quantity, price: product?.item?.xpricepur, stdPrice: product?.item?.xstdprice, desc: product?.item?.xdesc.slice(0, 30), status: "true", code: product?.item?.xitemcode, cur: product?.item?.xcur, cst: product?.item?.xstdcost, disc: product?.item?.xdisc, stk: product?.item?.xstock
                });
            }

            localStorage.setItem('selectedItems', JSON.stringify(existingSelectCartItems));
            handleEvent();
        }
    }
    // decrease quantity functionality here
    const decreaseQuantity = (item) => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
        // selected Item quantity decrease here
        let selectedCartItemsArray = JSON.parse(localStorage.getItem("selectedItems")) || [];
        const selectedItemToUpdate = selectedCartItemsArray.find(product => product?.productId === item?.productId);
        if (selectedItemToUpdate) {
            selectedItemToUpdate.quantity = item?.quantity > 1 ? item?.quantity - 1 : item?.quantity;
        }
        localStorage.setItem("selectedItems", JSON.stringify(selectedCartItemsArray));
        // item quantity decrease here
        let cartItemsArray = JSON.parse(localStorage.getItem("cartItems")) || [];
        const itemToUpdate = cartItemsArray.find(product => product?.productId === item?.productId);
        if (itemToUpdate) {
            itemToUpdate.quantity = item?.quantity > 1 ? item?.quantity - 1 : item?.quantity;
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));

        // all selected item quantity decrease here
        let allSelectedItemsArray = JSON.parse(localStorage.getItem("selectedAllItems")) || [];
        const allSelectedItemToUpdate = allSelectedItemsArray.find(product => product?.productId === item?.productId);
        if (allSelectedItemToUpdate) {
            allSelectedItemToUpdate.quantity = item?.quantity > 1 ? item?.quantity - 1 : item?.quantity;
        }
        localStorage.setItem("selectedAllItems", JSON.stringify(allSelectedItemsArray));

        const price = parseFloat(item?.price)
        if (allSelectedCartItems?.length > 0 && item?.quantity > 1) {
            setTotalPrice(prevPrice => prevPrice - price)
        } if (item?.status === "true" && item?.quantity > 1) {
            setTotalProductsPrice(prevPrice => prevPrice - price)
        }
        router.refresh()
    }
    // increase quantity functionality here
    const increaseQuantity = (item) => {
        setQuantity(prev => prev + 1)
        // selectedItems quantity increase here
        let selectedItemsArray = JSON.parse(localStorage.getItem("selectedItems")) || [];
        const selectItemToUpdate = selectedItemsArray.find(product => product.productId === item?.productId);
        if (selectItemToUpdate) {
            selectItemToUpdate.quantity = item?.quantity + 1;
        }
        localStorage.setItem("selectedItems", JSON.stringify(selectedItemsArray));

        // items quantity increase here
        let cartItemsArray = JSON.parse(localStorage.getItem("cartItems")) || [];
        const itemToUpdate = cartItemsArray.find(product => product?.productId == item?.productId);
        if (itemToUpdate) {
            itemToUpdate.quantity = item?.quantity + 1;
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));

        // all selected items quantity increase here
        let allSelectedItemsArray = JSON.parse(localStorage.getItem("selectedAllItems")) || [];
        const allSelectedItemToUpdate = allSelectedItemsArray.find(product => product?.productId == item?.productId);
        if (allSelectedItemToUpdate) {
            allSelectedItemToUpdate.quantity = item?.quantity + 1;
        }
        localStorage.setItem("selectedAllItems", JSON.stringify(allSelectedItemsArray));

        const price = parseFloat(item?.price)
        if (allSelectedCartItems?.length > 0) {
            setTotalPrice(prevPrice => prevPrice + price)
            setTotalProductsPrice(prevPrice => prevPrice)
        }
        if (item?.status === "true") {
            setTotalProductsPrice(prevPrice => prevPrice + price)
        }
        router.refresh()
    }
    // handleBuyProduct functionality here 
    const handleBuyProduct = (product) => {
        const existingProducts = JSON.parse(localStorage.getItem("BuyProducts")) || [];
        const alreadyExistingProduct = existingProducts.findIndex(item => item?.productId === product?.item.xitemid);
        if (alreadyExistingProduct > -1) {
            toast.error("Already Added The Product For Buy");
            return;
        } else {
            existingProducts.push({
                productId: product.item.xitemid, quantity: quantity, price: product?.item?.xpricepur, stdPrice: product?.item?.xstdprice, desc: product?.item?.xdesc.slice(0, 30), status: "true", code: product?.item?.xitemcode, cur: product?.item?.xcur, cst: product?.item?.xstdcost, disc: product?.item?.xdisc, stk: product?.item?.xstock
            })
        }
        const price = parseFloat(product?.item?.xpricepur);
        setBuyPrice(prev => prev + price);
        localStorage.setItem("BuyProducts", JSON.stringify(existingProducts))
        router.push("/checkout")
    }
    useEffect(() => {
        if (item) {
            setQuantity(item?.quantity)
        }
        router.refresh();
    }, [router, refreshKey, item]);
    return (
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-[650px]">
            <div className="lg:w-5/6 flex flex-col md:flex-row justify-between items-start gap-5 md:px-5 min-h-[400px]">
                <Image
                    width={700}
                    height={300}
                    src={product?.item?.ximages || bookAdam}
                    alt="Book photo"
                    className="w-2/3 md:w-1/3 mx-auto min-h-[400px]"
                />
                <div className="space-y-5 px-3 min-h-[400px]">
                    <p className="text-lg font-semibold min-h-[150px] text-justify">{product?.item?.xdesc}</p>
                    <hr />
                    <p className=" flex justify-start items-center text-4xl text-primary py-1">{product?.item?.xpricepur} <span><TbCurrencyTaka /></span></p>
                    <hr />
                    {/* quantity increment and decrement functionality here  */}
                    <div className=" flex flex-col md:flex-row justify-center items-center mr-2 lg:mr-0 text-white w-[200px] min-h-[80px]">
                        <p className="text-[#000] font-semibold px-3">Quantity:</p>
                        <button onClick={() => decreaseQuantity(item)} className={`bg-primary px-2 md:px-3 md:text-xl`}>-</button>
                        <p className='bg-white font-semibold px-[6px] md:px-3 text-[#000]'>{quantity}</p>
                        <button onClick={() => increaseQuantity(item)} className="bg-primary px-2 md:px-3 md:text-xl">+</button>
                    </div>
                    {/* handleBuyProduct and add to cart functionality here  */}
                    <div className="flex items-center gap-5">
                        <button onClick={() => handleBuyProduct(product)} className="bg-primary px-9 md:px-14 lg:px-20 py-2 font-semibold text-white rounded-md">Buy Now</button>
                        <button onClick={() => addToCart(product)} className="bg-primary px-9 md:px-14 lg:px-20 py-2 font-semibold text-white rounded-md">Add To Cart</button>
                    </div>
                </div>

            </div>
            <div className="lg:w-1/6"></div>
        </div>
    );
};

export default ProductDetails;

