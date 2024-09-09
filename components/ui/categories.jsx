import React from 'react';
import book from "../../assets/icons/book.png"
import kids from "../../assets/icons/kids.png"
import literature from "../../assets/icons/literature.png"
import science from "../../assets/icons/science.png"
import selfHelp from "../../assets/icons/selfHelp.png"
import seller from "../../assets/icons/seller.png"
import Image from 'next/image';

const CategoriesItems = ({ icon, heading }) => {
    return (
        <div className='w-[144px] h-[144px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] bg-[#4E4E4E] rounded-full flex justify-center items-center flex-col'>
            <Image width={700} height={300} src={icon} alt={`${heading} Icon`} className='w-[53px] h-[53px]' />
            <h4 className='text-white'>{heading}</h4>
        </div>
    );
};
const Categories = () => {
    const items = [
        { id: 1, heading: 'KIDS', icon: kids },
        { id: 2, heading: 'SELF HELP ', icon: selfHelp },
        { id: 3, heading: 'SCIENCE', icon: science },
        { id: 3, heading: 'LITERATURE', icon: literature },
        { id: 3, heading: 'bestseller', icon: seller },
    ];
    return (
        <div className='w-full mt-[78px] flex justify-center items-center flex-col bg-[#f6f6f6] pb-2'>
            <h1 className='uppercase text-2xl pt-5 pb-2'>Categories</h1>
            <div className=' flex flex-col xl:flex-row justify-center items-center gap-[18px]'>
                <div className='w-[188px] h-[188px] md:w-[210px] md:h-[210px] lg:w-[220px] lg:h-[220px] bg-white rounded-full flex justify-center items-center flex-col shadow-md mr-[2px] mb-2 md:mb-2 lg:mb-0'>
                    <Image width={700} height={300} src={book} alt="BOOK HEADING" className='w-[53px] h-[53px]' />
                    <h4 className='text-[#0A71B9]'>ISLAMIC</h4>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2'>
                    {items.map(item => (
                        <CategoriesItems key={item.id} icon={item.icon} heading={item.heading} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
