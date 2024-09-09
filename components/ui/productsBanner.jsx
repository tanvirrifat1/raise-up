import Image from 'next/image';
import React from 'react';
import bannerImg from "../../assets/home/bannerImg.jpg"

const ProductsBanner = () => {
    return (
        <div className=''>
            <Image width={700} height={300} src={bannerImg} alt='banner photo' className='w-full max-h-[650px] object-cover'></Image>
        </div>
    );
};

export default ProductsBanner;
