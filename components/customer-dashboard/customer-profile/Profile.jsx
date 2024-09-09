'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { getUserCartItems } from "../../../utils/getUserCartItems";
import bookAdam from "../../../assets/home/bookAdam.jpg"
import Image from 'next/image';
import { CartContext } from '../../context/context';
import Link from "next/link"

const Profile = () => {
    const { user } = useContext(CartContext);
    const { status, data } = useSession();
    const [items, setItems] = useState([]);
    const email = data?.user?.email;
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const itemsData = await getUserCartItems(email);
                setItems(itemsData);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };
        fetchItems();
    }, [email]);

    if (status === 'loading') return <div className='flex flex-col justify-center items-center min-h-[70vh]'>
        {`Loading...`}
    </div>
    return (
        <div>
            {/* User Info here  */}
            <div className='flex flex-col lg:flex-row justify-center items-center gap-2'>
                <div className='bg-white p-5 w-full lg:w-1/3 lg:min-h-[250px]'>
                    <p className='flex justify-start items-center gap-1'>
                        <h1 className='text-xl'>Personal Profile |</h1>
                        <Link href="/customer-dashboard/profile-update">
                            <span className='text-primary cursor-pointer'>Edit</span>
                        </Link>
                    </p>
                    <p className='font-semibold mt-3'>{user?.xcus}</p>
                    <p className=''>{user?.zemail}</p>
                </div>
                {/* address book here  */}
                <div className='flex flex-col lg:flex-row bg-white p-5 w-full lg:w-2/3 min-h-[250px]'>
                    <div className='w-full lg:w-1/2'>
                        <p className='flex justify-start items-center gap-1'>
                            <h1 className='text-xl'>Address Book |</h1>
                            <Link href="/customer-dashboard/profile-update">
                                <span className='text-primary cursor-pointer'>Edit</span>
                            </Link>
                        </p>
                        <p className='text-brightGray font-semibold uppercase'>Default Delivery Address</p>
                        <p className='font-semibold mt-3'>{data?.user?.name}</p>
                        <p className=''>{user?.xaddress1}</p>
                        <div className='flex gap-1'>
                            <p>{user?.xaddress2 ? user?.xaddress2 : ""} </p>
                            <p>{user?.xcity ? "- " + user?.xcity : ""}</p>
                            <p>{user?.xstate ? "- " + user?.xstate : ""}</p>
                            <p>{user?.xcountry ? "- " + user?.xcountry + "." : ""}</p>
                        </div>
                        <p><span>+88</span>{user?.xmobile}</p>
                    </div>
                    <div className='w-[2px] bg-brightGray hidden lg:block'></div>
                    <div className='h-[2px] bg-brightGray lg:hidden my-3'></div>
                    {/* default billing address  */}
                    <div className='w-full lg:w-1/2'>
                        <div className='lg:pl-3 lg:mt-7'>
                            <p className='text-brightGray font-semibold uppercase'>Default Billing Address</p>
                            <p className='font-semibold mt-3'>{data?.user?.name}</p>
                            <p className=''>{user?.xaddress1}</p>
                            <div className='flex gap-1'>
                                <p>{user?.xaddress2 ? user?.xaddress2 : ""} </p>
                                <p>{user?.xcity ? "- " + user?.xcity : ""}</p>
                                <p>{user?.xstate ? "- " + user?.xstate : ""}</p>
                                <p>{user?.xcountry ? "- " + user?.xcountry + "." : ""}</p>
                            </div>
                            <p><span>+88</span>{user?.xmobile}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Purchases Order Here  */}
            <div className='mt-5 bg-white px-1 md:px-5 py-2 text-nowrap'>Your Total Purchases Items: {
                items?.result?.reduce((total, item) => total + (item?.ecomsalesdet ? item?.ecomsalesdet.length : 0), 0)
            }</div>
            <div>
                {
                    items?.result?.map(item => <div key={item?.xitemid}>
                        <div>{item?.ecomsalesdet?.map((itm, idx) => <div key={idx} className='bg-white mt-1 px-1 md:px-5 py-2 flex justify-between items-center gap-1'>
                            <div>
                                <Image width={700} height={300} src={itm?.seitem?.ximages || bookAdam} alt='book img' className='w-[80px] md:w-[100px]'></Image>
                            </div>
                            <div className='flex justify-between items-start gap-5  w-11/12'>
                                {/* category and description here  */}
                                <div className='flex flex-col justify-start space-y-1 w-1/2'>
                                    <p className='text-nowrap text-[12px] md:text-[16px] hidden lg:block font-semibold'>{(itm?.seitem?.xdesc).length > 80 ? (itm?.seitem?.xdesc).slice(0, 80) + "..." : itm?.seitem?.xdesc}
                                    </p>
                                    <p className='text-nowrap text-[12px] md:text-[16px] lg:hidden font-semibold'>{(itm?.seitem?.xdesc).length > 20 ? (itm?.seitem?.xdesc).slice(0, 20) + "..." : (itm?.seitem?.xdesc)}
                                    </p>
                                    <p className='text-nowrap text-[12px] md:text-[16px] text-primary uppercase'>{itm?.seitem?.xcat}
                                    </p>
                                </div>
                                {/* qty, price, status and date here  */}
                                <div className='flex flex-col lg:flex-row lg:gap-10 w-1/2'>
                                    <span className='text-nowrap text-[12px] md:text-[16px] '>Qty: {itm?.xqty}</span>
                                    <span className='text-nowrap text-[12px] md:text-[16px] '>Price: <span className='text-primary font-semibold'>{itm?.seitem?.xpricepur} TK</span></span>
                                    <p className='text-nowrap text-[12px] md:text-[16px]'>Status: <span className={`${itm?.xstatus == "Pending" ? "bg-grayBright" : ""} px-2 py-1 rounded-md text-[10px] md:text-[12px]`}>{itm?.xstatus}</span>
                                    </p>
                                    <span className='text-nowrap text-[12px] md:text-[16px] '>Placed on <span className='font-semibold'>{new Date(itm?.xdate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span> </span>
                                </div>
                            </div>
                        </div>)}</div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Profile