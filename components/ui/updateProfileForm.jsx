"use client"
import { useContext, useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { CartContext } from '../context/context';
const UpdateProfileForm = () => {
    const { user } = useContext(CartContext)
    const { data } = useSession();
    const router = useRouter()
    const id = data?.user?.xcusid;
    const [formData, setFormData] = useState({
        xcity: "",
        xcountry: "",
        xaddress1: "",
        xaddress2: "",
        zemail: "",
        xemail: "",
        xstate: "",
        xcontact: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const updateProfile = async (e) => {
        e.preventDefault();
        try {
            const result = await fetch(
                `${process.env.NEXT_PUBLIC_URL}/api/frontend/customer-profile/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!result.ok) {
                throw new Error(`Failed to update profile info: ${result.status}`);
            }
            const res = await result.json();
            if (res) {
                toast.success("Profile Update Successfully");
                setTimeout(() => {
                    window.location.reload();
                }, 500);
                router.push("/customer-dashboard");
            }
        } catch (error) {
            console.error("Error updating data:", error.message);
        }
    };
    return (
        <div>
            <h1 className='font-semibold text-2xl mb-5'>
                Update Your Profile
            </h1>
            <form className="space-y-2 text-start">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                        name="zemail"
                        className="flex h-10 w-full rounded-md border px-3"
                        placeholder="Enter Your Email"
                        defaultValue={user?.zemail}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Support Email</label>
                    <input
                        name="xemail"
                        className="flex h-10 w-full rounded-md border px-3"
                        placeholder="Enter Your Support Email"
                        defaultValue={user?.xemail}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">City</label>
                    <input
                        name="xcity"
                        className="flex h-10 w-full rounded-md border px-3"
                        placeholder="Enter Your City"
                        defaultValue={user?.xcity}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">State</label>
                    <input
                        name="xstate"
                        className="flex h-10 w-full rounded-md border px-3"
                        placeholder="Enter Your State"
                        defaultValue={user?.xstate}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Country</label>
                    <input
                        name="xcountry"
                        className="flex h-10 w-full rounded-md border px-3"
                        placeholder="Enter your country"
                        defaultValue={user?.xcountry}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Contact</label>
                    <input
                        name="xcontact"
                        className="flex h-10 w-full rounded-md border px-3"
                        placeholder="Enter your Contact"
                        defaultValue={user?.xcontact}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Present Address</label>
                    <input
                        name="xaddress1"
                        className="flex h-10 w-full rounded-md border px-3"
                        placeholder="Enter your Present Address"
                        defaultValue={user?.xaddress1}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Permanent Address</label>
                    <input
                        name="xaddress2"
                        className="flex h-10 w-full rounded-md border px-3"
                        placeholder="Enter your Permanent Address"
                        defaultValue={user?.xaddress2}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <div className="flex justify-center">
                <button
                    onClick={(e) => updateProfile(e)}
                    className="bg-primary px-10 py-1 mt-5 text-white font-semibold rounded-md"
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default UpdateProfileForm;