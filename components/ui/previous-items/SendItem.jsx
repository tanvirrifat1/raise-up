'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SendItem = ({ items, seterrors }) => {
    const { data } = useSession();
    const bizid = data?.user?.bizid
    const router = useRouter()


    const handleCreateItem = async () => {

        try {
            const response = await fetch(`/api/backend/items/previous-items/${bizid}`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({ items: items, bizid: Number(bizid) }),

            });

            const res = await response.json();

            seterrors(res)

            if (response.ok) {

                toast.success(res?.message)

                router.refresh();
            }

        } catch (error) {

            console.error(error)
        }
    }
    return (
        <>
            <button onClick={handleCreateItem} className='bg-primary py-1 text-sm text-white shadow hover:shadow-md px-4 rounded'>Add Item</button>
        </>
    )
}

export default SendItem