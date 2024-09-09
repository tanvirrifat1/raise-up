"use client";
import { useContext } from "react";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { IoMdCheckbox } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import bookAdam from "../../assets/home/bookAdam.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CartContext } from "../context/context";

const CartItem = ({ item }) => {
  const router = useRouter();
  const {
    allSelectedCartItems,
    totalPrice,
    setTotalPrice,
    totalProductsPrice,
    setTotalProductsPrice,
  } = useContext(CartContext);

  // item selected functionality here
  const selectItem = (item) => {
    let existingSelectedItems =
      JSON.parse(localStorage.getItem("selectedItems")) || [];
    if (item) {
      existingSelectedItems.push({
        productId: item?.productId,
        quantity: item?.quantity,
        price: item?.price,
        stdPrice: item?.stdPrice,
        desc: item?.xdesc,
        code: item?.code,
        cur: item?.cur,
        cst: item?.cst,
        disc: item?.disc,
        stk: item?.xstock,
      });
    }
    // Update local storage with the selected item
    localStorage.setItem(
      "selectedItems",
      JSON.stringify(existingSelectedItems)
    );
    const price = item?.price * item?.quantity;
    setTotalProductsPrice((prevPrice) => prevPrice + price);

    // cart item status changes
    let cartItemsArray = JSON.parse(localStorage.getItem("cartItems"));
    const itemToUpdate = cartItemsArray.find(
      (product) => product.productId === item?.productId
    );
    if (itemToUpdate) {
      itemToUpdate.status = "true";
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));
    // selected cart item status changes
    let selectedCartItemsArray = JSON.parse(
      localStorage.getItem("selectedItems")
    );
    const selectedItemToUpdate = selectedCartItemsArray.find(
      (product) => product?.productId === item?.productId
    );
    if (selectedItemToUpdate) {
      selectedItemToUpdate.status = "true";
    }
    localStorage.setItem(
      "selectedItems",
      JSON.stringify(selectedCartItemsArray)
    );
  };
  // item non-selected functionality here
  const nonSelectItem = (item) => {
    let selectedItemsArray = JSON.parse(localStorage.getItem("selectedItems"));
    const indexToDelete = selectedItemsArray.findIndex(
      (itm) => itm?.productId === item?.productId
    );
    if (indexToDelete !== -1) {
      selectedItemsArray?.splice(indexToDelete, 1);
    }
    localStorage.setItem("selectedItems", JSON.stringify(selectedItemsArray));

    // const items = JSON.parse(localStorage.getItem("cartItems"));
    const price = item?.price * item?.quantity;
    setTotalProductsPrice((prevPrice) => prevPrice - price);
    // cart item status changes
    let cartItemsArray = JSON.parse(localStorage.getItem("cartItems"));
    const itemToUpdate = cartItemsArray.find(
      (product) => product.productId === item?.productId
    );
    if (itemToUpdate) {
      itemToUpdate.status = "false";
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));
    // selected cart item status changes
    let selectedCartItemsArray = JSON.parse(
      localStorage.getItem("selectedItems")
    );
    const selectedItemToUpdate = selectedCartItemsArray.find(
      (product) => product.productId === item?.productId
    );
    if (selectedItemToUpdate) {
      selectedItemToUpdate.status = "false";
    }
    localStorage.setItem(
      "selectedItems",
      JSON.stringify(selectedCartItemsArray)
    );
  };

  // decrease quantity functionality here
  const decreaseQuantity = (item) => {
    // selected Item quantity decrease here
    let selectedCartItemsArray =
      JSON.parse(localStorage.getItem("selectedItems")) || [];
    const selectedItemToUpdate = selectedCartItemsArray.find(
      (product) => product?.productId === item?.productId
    );
    if (selectedItemToUpdate) {
      selectedItemToUpdate.quantity =
        item?.quantity > 1 ? item?.quantity - 1 : item?.quantity;
    }
    localStorage.setItem(
      "selectedItems",
      JSON.stringify(selectedCartItemsArray)
    );
    // item quantity decrease here
    let cartItemsArray = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemToUpdate = cartItemsArray.find(
      (product) => product?.productId === item?.productId
    );
    if (itemToUpdate) {
      itemToUpdate.quantity =
        item?.quantity > 1 ? item?.quantity - 1 : item?.quantity;
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));

    // all selected item quantity decrease here
    let allSelectedItemsArray =
      JSON.parse(localStorage.getItem("selectedAllItems")) || [];
    const allSelectedItemToUpdate = allSelectedItemsArray.find(
      (product) => product?.productId === item?.productId
    );
    if (allSelectedItemToUpdate) {
      allSelectedItemToUpdate.quantity =
        item?.quantity > 1 ? item?.quantity - 1 : item?.quantity;
    }
    localStorage.setItem(
      "selectedAllItems",
      JSON.stringify(allSelectedItemsArray)
    );

    const price = parseFloat(item?.price);
    if (allSelectedCartItems?.length > 0 && item?.quantity > 1) {
      setTotalPrice((prevPrice) => prevPrice - price);
    }
    if (item?.status === "true" && item?.quantity > 1) {
      setTotalProductsPrice((prevPrice) => prevPrice - price);
    }
    router.refresh();
  };
  // increase quantity functionality here
  const increaseQuantity = (item) => {
    // selectedItems quantity increase here
    let selectedItemsArray =
      JSON.parse(localStorage.getItem("selectedItems")) || [];
    const selectItemToUpdate = selectedItemsArray.find(
      (product) => product.productId === item?.productId
    );
    if (selectItemToUpdate) {
      selectItemToUpdate.quantity = item?.quantity + 1;
    }
    localStorage.setItem("selectedItems", JSON.stringify(selectedItemsArray));

    // items quantity increase here
    let cartItemsArray = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemToUpdate = cartItemsArray.find(
      (product) => product?.productId == item?.productId
    );
    if (itemToUpdate) {
      itemToUpdate.quantity = item?.quantity + 1;
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));

    // all selected items quantity increase here
    let allSelectedItemsArray =
      JSON.parse(localStorage.getItem("selectedAllItems")) || [];
    const allSelectedItemToUpdate = allSelectedItemsArray.find(
      (product) => product?.productId == item?.productId
    );
    if (allSelectedItemToUpdate) {
      allSelectedItemToUpdate.quantity = item?.quantity + 1;
    }
    localStorage.setItem(
      "selectedAllItems",
      JSON.stringify(allSelectedItemsArray)
    );

    const price = parseFloat(item?.price);
    if (allSelectedCartItems?.length > 0) {
      setTotalPrice((prevPrice) => prevPrice + price);
      setTotalProductsPrice((prevPrice) => prevPrice);
    }
    if (item?.status === "true") {
      setTotalProductsPrice((prevPrice) => prevPrice + price);
    }
    router.refresh();
  };
  // delete functionality here
  const handleDelete = (item) => {
    if (allSelectedCartItems?.length > 0 || item?.status === "true") {
      const items = JSON.parse(localStorage.getItem("cartItems"));
      const findItem = items.find((itm) => itm?.productId == item?.productId);
      const price = parseInt(findItem?.quantity) * parseFloat(findItem?.price);
      if (totalPrice > 0) {
        setTotalPrice((prevPrice) => prevPrice - price);
      }
      if (
        totalProductsPrice > 0 &&
        (item?.status === "true" || allSelectedCartItems?.length > 0)
      ) {
        setTotalProductsPrice((prevPrice) => prevPrice - price);
      }
    }
    let selectedCartItemsArray =
      JSON.parse(localStorage.getItem("selectedItems")) || [];
    const idxToDelete = selectedCartItemsArray.findIndex(
      (itm) => itm?.productId === item?.productId
    );
    if (idxToDelete !== -1) {
      selectedCartItemsArray.splice(idxToDelete, 1);
    }
    localStorage.setItem(
      "selectedItems",
      JSON.stringify(selectedCartItemsArray)
    );

    let cartItemsArray = JSON.parse(localStorage.getItem("cartItems"));
    const indexToDelete = cartItemsArray.findIndex(
      (itm) => itm?.productId === item?.productId
    );
    if (indexToDelete !== -1) {
      cartItemsArray.splice(indexToDelete, 1);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));

    let itemsArray = JSON.parse(localStorage.getItem("selectedAllItems"));
    const indxToDelete = itemsArray?.findIndex(
      (itm) => itm?.productId === item?.productId
    );
    if (indxToDelete !== -1) {
      itemsArray?.splice(indxToDelete, 1);
    }
    localStorage.setItem("selectedAllItems", JSON.stringify(itemsArray));
    router.refresh();
  };
  return (
    <div className="flex justify-between items-center bg-white hover:scale-95 duration-200 p-5">
      {/* checkbox & img here  */}
      <div className="flex justify-center items-center gap-1 md:gap-2 mr-2 lg:mr-2">
        <div className="cursor-pointer">
          {allSelectedCartItems?.length > 0 ? (
            <span className="text-primary">
              <IoMdCheckbox></IoMdCheckbox>
            </span>
          ) : item?.status == "true" ? (
            <span onClick={() => nonSelectItem(item)} className="text-primary">
              <IoMdCheckbox></IoMdCheckbox>{" "}
            </span>
          ) : (
            <span onClick={() => selectItem(item)}>
              <RiCheckboxBlankLine></RiCheckboxBlankLine>
            </span>
          )}
        </div>
        <Image
          width={700}
          height={300}
          src={bookAdam}
          alt="item img"
          className="max-w-[100px] h-[120px]"
        ></Image>
      </div>

      {/* description & delete functionality here  */}
      <div className="space-y-1 w-[100px] md:w-[120px] lg:w-2/5">
        <h1 className="text-[13px] md:text-[16px] font-semibold text-primary">
          {item?.desc ? item?.desc + "..." : ""}
        </h1>
        <span
          onClick={() => handleDelete(item)}
          className="cursor-pointer"
          style={{ color: "red" }}
        >
          <AiOutlineDelete></AiOutlineDelete>
        </span>
      </div>

      {/* quantity increment and decrement functionality here  */}
      <div className="bg-primary flex flex-col md:flex-row justify-center items-center mr-2 lg:mr-0 text-white">
        <button
          onClick={() => decreaseQuantity(item)}
          className={` px-2 md:px-3 md:text-xl`}
        >
          -
        </button>
        <p className="bg-white font-semibold px-[6px] md:px-3 text-[#000]">
          {item?.quantity}
        </p>
        <button
          onClick={() => increaseQuantity(item)}
          className="px-2 md:px-3 md:text-xl"
        >
          +
        </button>
      </div>

      {/* price div  */}
      <div>
        <p className="text-primary">{item?.price} TK.</p>
        <p className="line-through" style={{ color: "red" }}>
          {item?.stdPrice} TK.
        </p>
      </div>
    </div>
  );
};

export default CartItem;
