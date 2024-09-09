"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { customRevidateTag } from "../../../utils/revalidateTag";
import { AffiliateUserData } from "../../../utils/types/types";

interface UserProps {
  user: AffiliateUserData;
}

export const UpdateProfile: React.FC<UserProps> = ({ user }) => {
  const [formData, setFormData] = useState({
    xorg: user?.user?.xorg,
    xemail: user?.user?.xemail,
    xcontact: user?.user?.xcontact,
    xphone: user?.user?.xphone,
    xsmsapiurl: user?.user?.xsmsapiurl,
    xpromoemail: user?.user?.xpromoemail,
    xsmtphost: user?.user?.xsmtphost,
    xsmtpuser: user?.user?.xsmtpuser,
    xport: user?.user?.xport,
    xdomain: user?.user?.xdomain,
    xsmtppass: user?.user?.xsmtppass,
    xmobile: user?.user?.xmobile,
    xdomainuser: user?.user?.xdomainuser,
    xsubdomain: user?.user?.xsubdomain,
    xaddress1: user?.user?.xaddress1,
    xaddress2: user?.user?.xaddress2,
    xbranch: user?.user?.xbranch,
    xcountry: user?.user?.xcountry,
    xcity: user?.user?.xcity,
    xstate: user?.user?.xstate,
    xfbpageurl: user?.user?.xfbpageurl,
  });

  const router = useRouter();

  const [loading, setloading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      setloading(true);

      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
        }),
      };

      const res = await fetch(`/api/user/${user?.user?.bizid}`, requestOptions);

      if (res.ok) {
        setloading(false);
        toast.success("Upate successfull");

        // router.refresh();
        customRevidateTag("user");

        router.push("/dashboard/user-profile");
      } else {
        const response = await res.json();
        setloading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h4 className="py-6 text-center font-semibold text-xl">
        Update Your Profile
      </h4>
      <form onSubmit={handleSubmit} className="max-w-screen-xl mx-auto p-3">
        <main className=" grid md:grid-cols-2 gap-4">
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xorg"
              defaultValue={formData?.xorg}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Organization Name
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xemail"
              defaultValue={formData?.xemail}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Email
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xcontact"
              defaultValue={formData?.xcontact}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Contact Info
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xmobile"
              defaultValue={formData?.xmobile}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Mobile Number
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xphone"
              defaultValue={formData?.xphone}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Phone Number
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xcountry"
              defaultValue={formData?.xcountry}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Country Name
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xcity"
              defaultValue={formData?.xcity}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              City Name
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xstate"
              defaultValue={formData?.xstate}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              State Name
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xaddress1"
              defaultValue={formData?.xaddress1}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Present Address
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xaddress2"
              defaultValue={formData?.xaddress2}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Permanent Address
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xsmsapiurl"
              defaultValue={formData?.xsmsapiurl}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              SMS URL
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xbranch"
              defaultValue={formData?.xbranch}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Branch
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xpromoemail"
              defaultValue={formData?.xpromoemail}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Promotion Email
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xsmtphost"
              defaultValue={formData?.xsmtphost}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              SMT Host
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xsmtpuser"
              defaultValue={formData?.xsmtpuser}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              SMT User
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xport"
              defaultValue={formData?.xport}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              SMT Port
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xdomain"
              defaultValue={formData?.xdomain}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Domain
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xdomainuser"
              defaultValue={formData?.xdomainuser}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Domain User
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xsubdomain"
              defaultValue={formData?.xsubdomain}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Sub Domain
            </label>
          </div>
          <div className="space-y-2 relative">
            <input
              type="text"
              name="xfbpageurl"
              defaultValue={formData?.xfbpageurl}
              onChange={handleChange}
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full bg-transparent"
            />
            <label className="absolute -top-2 left-0 bg-transparent text-sm text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400">
              Facebook Page URL
            </label>
          </div>
        </main>
        <div className="flex items-center gap-3">
          <button
            disabled={loading}
            type="submit"
            className="border bg-blue text-white shadow-sm hover:shadow px-3 py-1 rounded text-sm mt-3 w-fit h-10"
          >
            {loading ? "Loading..." : "Update"}
          </button>
          <Link
            href={`/dashboard/user-profile`}
            className="border bg-red text-white shadow-sm hover:shadow px-3 py-1 rounded text-sm mt-3 w-fit h-10 flex justify-center items-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
};
