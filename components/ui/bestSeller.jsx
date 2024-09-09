import Image from 'next/image';
import React from 'react';
import bookAdam from "../../assets/home/bookAdam.jpg"
import star from "../../assets/icons/star.png"
import cart from "../../assets/icons/cart.png"

const BestSellerItems = ({ img, heading, price, icon }) => {
    const icons = [
        { id: 1, icon: star },
        { id: 2, icon: star },
        { id: 3, icon: star },
        { id: 4, icon: star },
        { id: 5, icon: star },
    ]
    return (
        <div className='w-[342px] h-[370px] sm:w-[300px] sm:h-[374px] md:w-[310px] md:h-[364px] lg:w-[262px] lg:h-[302px] xl:w-[346px] xl:h-[390px] shadow-md p-[30px] rounded-lg mx-auto'>
            <Image width={700} height={300} src={img} alt="Book photo" className='w-[210px] h-[236px] sm:w-[200px] sm:h-[220px] md:w-[184px] md:h-[218px] lg:w-[160px] lg:h-[170px] xl:w-[220px] xl:h-[236px]' />
            <h2 className='text-xl'>{heading}</h2>
            <h4 className='text-[14px]'>Price {price}</h4>
            <div className='flex justify-between items-end'>
                <div className='w-[83px] h-[14px] flex justify-center items-center'>
                    {
                        icons.map(icon => <Image key={icon.id} width={700} height={300} src={icon.icon} alt="icon" className='w-[16px]' />)
                    }
                </div>
                <div className='w-[31px] h-[28px] border bg-[#000] rounded-md flex justify-center items-center '>
                    <Image width={700} height={300} src={icon} alt="icon" className='text-white w-[20px] h-[21px]' />
                </div>
            </div>
        </div>
    );
};

const BestSeller = () => {
    const items = [
        { id: 1, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 2, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 3, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 4, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 5, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 6, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 7, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 8, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 9, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 10, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 11, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 12, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 13, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 14, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 15, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 16, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 17, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 18, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 19, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 20, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 21, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 22, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 23, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 24, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 25, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 26, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 27, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 28, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 29, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
        { id: 30, heading: 'Product Name', price: "150BDT", icon: cart, img: bookAdam },
    ];

    return (
        <div className='w-full flex flex-col justify-center items-center mt-[50px]'>
            <h1 className='text-xl md:text-2xl lg:text-3xl mb-3 italic font-semibold uppercase'>Best seller</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-16 lg:gap-10'>
                {items.map(item => (
                    <BestSellerItems key={item.id} heading={item.heading} price={item.price} icon={item.icon} img={item.img} />
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
