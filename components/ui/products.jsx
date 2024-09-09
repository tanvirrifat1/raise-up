import Image from "next/image";
import React from "react";
import bookAdam from "../../assets/home/bookAdam.jpg";
import star from "../../assets/icons/star.png";
import cart from "../../assets/icons/cart.png";
import { getAllProducts } from "../../utils/getAllProducts"
import Button from "./button"
import { TbCurrencyTaka } from "react-icons/tb";
import Link from "next/link";

const ProductsItem = ({ id, img, price, icon, title, cur }) => {
  const icons = [
    { id: 1, icon: star },
    { id: 2, icon: star },
    { id: 3, icon: star },
    { id: 4, icon: star },
    { id: 5, icon: star },
  ];
  return (
    <div className="w-[342px] h-[370px] sm:w-[300px] sm:h-[374px] md:w-[310px] md:h-[364px] lg:w-[262px] lg:h-[302px] xl:w-[346px] xl:h-[390px] shadow-md p-[30px] rounded-lg mx-auto space-y-1">
      <Link href={`/products/product-details/${id}`}>
        <Image
          width={700}
          height={300}
          src={img}
          alt="Book photo"
          className="w-[210px] h-[236px] sm:w-[200px] sm:h-[220px] md:w-[184px] md:h-[218px] lg:w-[160px] lg:h-[170px] xl:w-[220px] xl:h-[236px]"
        />
      </Link>
      <h2 className="text-xl">{title?.length > 20 ? title?.slice(0, 23) + "..." : title}</h2>
      <h4 className=" flex justify-start items-center">Price: <span className="flex justify-center items-center text-primary ml-1">{price} <span ><TbCurrencyTaka /></span></span></h4>
      <div className="flex justify-between items-end">
        <div className="w-[83px] h-[14px] flex justify-center items-center">
          {icons.map((icon) => (
            <Image
              key={icon.id}
              width={700}
              height={300}
              src={icon.icon}
              alt="icon"
              className="w-[16px]"
            />
          ))}
        </div>
        <Button id={id} icon={icon}></Button>
      </div>
    </div>
  );
};

const Products = async () => {
  const products = await getAllProducts();
  return (
    <div className="w-full flex justify-center items-center mt-[60px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-16 lg:gap-10">
        {products?.map((item) => (
          <ProductsItem
            key={item?.id}
            id={item?.xitemid}
            title={item?.xdesc}
            price={item?.xpricepur}
            cur={item?.xcur}
            icon={item?.icon || cart}
            img={item?.ximages || bookAdam}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
