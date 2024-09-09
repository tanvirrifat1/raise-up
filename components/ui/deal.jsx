import React from "react";

const Deal = ({ title, discount }) => {
  return (
    <div className="w-full flex justify-center -mt-[16px] md:-mt-[36px] lg:-mt-[65px]">
      <div className="w-[60%] md:w-[45%] lg:w-[40%] min-h-[60px] md:min-h-[80px] lg:min-h-[150px] rounded-[10px] md:rounded-xl lg:rounded-2xl shadow-md flex flex-col justify-center items-center bg-white z-20">
        <h2 className="text-[12px] md:text-[16px] lg:text-[25px] uppercase">
          {title}
        </h2>
        <h1 className="text-[14px] md:text-[20px] lg:text-[32px] font-extrabold italic text-primary">
          {discount}
        </h1>
      </div>
    </div>
  );
};

export default Deal;
