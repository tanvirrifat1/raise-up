import Image from "next/image";
import React from "react";
import bookImg from "../../assets/home/bookImg.png";
const Banner = () => {
  return (
    <div className="flex justify-center items-center relative lg:min-h-[600px]">
      <div className="z-10 w-full h-full">
        <Image
          width={700}
          height={300}
          src={bookImg}
          className="w-full lg:h-full"
          alt="book img"
        ></Image>
      </div>
      <div className="w-full absolute top-11 md:top-24 lg:top-[213px] text-center">
        <h3 className="text-[16px] md:text-2xl lg:text-[40px]">the ultimate</h3>
        <h1 className="font-black text-[18px] md:text-[34px] lg:text-[66px] text-primary uppercase">
          Book Lovers Destination
        </h1>
      </div>
    </div>
  );
};

export default Banner;
