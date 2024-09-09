import Image from 'next/image';
import React from 'react';
import deliveryIcon from "../../assets/icons/deliveryIcon.png"
import cashOnIcon from "../../assets/icons/cashOnIcon.png"
import returnIcon from "../../assets/icons/returnIcon.png"

const WhyUsItem = ({ icon, heading }) => {
    return (
        <div className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[200px] lg:h-[200px] bg-[#4E4E4E] rounded-full flex justify-center items-center flex-col'>
            <Image width={700} height={300} src={icon} alt={`${heading} Icon`} className='w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[46px] lg:h-[46px]' />
            <h4 className='text-white text-[9px] md:text-[12px] lg:text-[16px]'>{heading}</h4>
        </div>
    );
};

const WhyUs = () => {
    const items = [
        { id: 1, heading: 'Fast Delivery', icon: deliveryIcon },
        { id: 2, heading: 'Cash On Delivery', icon: cashOnIcon },
        { id: 3, heading: 'Happy Return', icon: returnIcon },
    ];

    return (
        <div className='flex justify-center items-center mt-[40px]'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-1 md:gap-5'>
                {items.map(item => (
                    <WhyUsItem key={item.id} icon={item.icon} heading={item.heading} />
                ))}
            </div>
        </div>
    );
};

export default WhyUs;
