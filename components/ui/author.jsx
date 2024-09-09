import React from "react";
import authorImg from "../../assets/home/authorImg.jpg";
import Image from "next/image";

const Authors = ({ icon, name }) => {
  return (
    <div className="w-[144px] h-[144px] flex justify-center items-center flex-col">
      <Image
        width={700}
        height={200}
        src={icon}
        alt={`${name} Icon`}
        className="w-[90%] h-[90%] rounded-full"
      />
      <h4 className="">{name}</h4>
    </div>
  );
};
const Author = () => {
  const items = [
    { id: 1, author_name: "A1", icon: authorImg },
    { id: 2, author_name: "A2", icon: authorImg },
    { id: 3, author_name: "A3", icon: authorImg },
    { id: 4, author_name: "A4", icon: authorImg },
    { id: 5, author_name: "A5", icon: authorImg },
  ];
  return (
    <div className="w-full  flex justify-center items-center flex-col mt-[50px] gap-5 pb-2 bg-[#f6f6f6] pt-5">
      <h1 className="text-2xl uppercase">Author</h1>
      <div className=" flex flex-col xl:flex-row justify-center items-center gap-8 lg:pb-3">
        <div className="w-[188px] h-[188px] rounded-full flex justify-center items-center flex-col lg:mr-[2px]">
          <Image
            width={700}
            height={300}
            src={authorImg}
            alt="BOOK name"
            className="w-full h-full rounded-full"
          />
          <h4 className="text-[#0A71B9] pt-1">REZA SIR</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {items.map((item) => (
            <Authors key={item.id} icon={item.icon} name={item.author_name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Author;
