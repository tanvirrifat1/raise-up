/* eslint-disable react/jsx-key */
import Image from "next/image";
import Link from "next/link";

const AllProducts = (item) => {
  const { img, heading, price, icon, description } = item.item;
  return (
    <div className="w-full lg:w-4/5 md:w-4/5 shadow-md p-5 rounded-lg flex flex-col justify-between">
      <div>
        <Image
          width={700}
          height={300}
          src={img}
          alt="Book photo"
          className="w-full md:w-[170px] h-[216px]"
        />
        <h2 className="text-xl md:text-lg lg:text-xl text-black">{heading}</h2>
        <h4 className="text-[14px] md:text-[12px] lg:text-[14px] text-black">
          Price {price}
        </h4>
        <div className="flex flex-row justify-between items-top">
          <div className="w-full md:w-auto">
            <p className="text-[14px] md:text-[12px] lg:text-[14px]">
              {description}
            </p>
          </div>

          <Link href="cart" className="text-white text">
            <div className="bg-deepBlue p-2 rounded-full">{icon}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
