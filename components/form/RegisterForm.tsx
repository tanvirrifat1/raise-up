"use client";

import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";

interface FormData {
  xusername: string;
  xpassword: string;
  xfullname: string;
  xusermobile: string;
  xuseremail: string;
  xorg: string;
  xbranch: string;
  xaddress1: string;
  xaddress2: string;
  xcountry: string;
  xstate: string;
  xcity: string;
  xconfirmpassword: string;
  bizid: number;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    xusername: "",
    xpassword: "",
    xfullname: "",
    xusermobile: "",
    xuseremail: "",
    xorg: "",
    xbranch: "",
    xaddress1: "",
    xaddress2: "",
    xcountry: "",
    xstate: "",
    xcity: "",
    xconfirmpassword: "",
    bizid: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
        }),
      };

      const res = await fetch(`/api/users`, requestOptions);

      if (res.status === 201) {
        alert("register successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto px-4 flex flex-col gap-3 min-h-screen mt-20"
      >
        <h4 className="text-xl font-semibold md:text-3xl">Register Here.</h4>

        <input
          required
          type="text"
          name="xfullname"
          placeholder="Full Name"
          className="p-3 border border-gray w-full rounded-md"
          onChange={handleChange}
          value={formData.xfullname}
          id=""
        />
        <input
          required
          type="number"
          name="bizid"
          placeholder="Bussiness ID"
          className="p-3 border border-gray w-full rounded-md"
          onChange={handleChange}
          value={formData.bizid}
          id=""
        />
        <input
          required
          type="text"
          name="xusername"
          placeholder="User Name"
          className="p-3 border border-gray w-full rounded-md"
          onChange={handleChange}
          value={formData.xusername}
          id=""
        />
        <input
          required
          type="email"
          name="xuseremail"
          placeholder="Email"
          className="p-3 border border-gray w-full rounded-md"
          onChange={handleChange}
          value={formData.xuseremail}
          id=""
        />
        <input
          type="text"
          name="xusermobile"
          placeholder="mobile"
          className="p-3 border border-gray w-full rounded-md"
          onChange={handleChange}
          value={formData.xusermobile}
          id=""
        />
        {/* <input
                    type='text'
                    name='xorg'
                    placeholder='Organization Name'
                    className='p-3 border border-gray w-full rounded-md'
                    onChange={handleChange}
                    value={formData.xorg}
                    id=''
                />
                <input
                    type='text'
                    name='xbranch'
                    placeholder='Branch Name'
                    className='p-3 border border-gray w-full rounded-md'
                    onChange={handleChange}
                    value={formData.xbranch}
                    id=''
                /> */}
        <input
          required
          type="text"
          name="xaddress1"
          placeholder="Present Address"
          className="p-3 border border-gray w-full rounded-md"
          onChange={handleChange}
          value={formData.xaddress1}
          id=""
        />
        <input
          required
          type="text"
          name="xaddress2"
          placeholder="Parmanent Address"
          className="p-3 border border-gray w-full rounded-md"
          onChange={handleChange}
          value={formData.xaddress2}
          id=""
        />
        <input
          required
          type="text"
          name="xcountry"
          placeholder="Country"
          className="p-3 border border-gray w-full rounded-md"
          onChange={handleChange}
          value={formData.xcountry}
          id=""
        />
        <input
          required
          type="text"
          name="xstate"
          placeholder="State"
          className="p-3 border border-gray w-full rounded-md"
          onChange={handleChange}
          value={formData.xstate}
          id=""
        />
        <input
          required
          type="text"
          name="xcity"
          placeholder="City"
          className="p-3 border border-gray w-full rounded-md"
          onChange={handleChange}
          value={formData.xcity}
          id=""
        />
        <input
          required
          type="password"
          name="xpassword"
          placeholder="Password"
          className="p-3 border border-gray w-full rounded-md"
          onChange={handleChange}
          value={formData.xpassword}
          id=""
        />
        <input
          required
          type="password"
          name="xconfirmpassword"
          placeholder="Confirm Password"
          className="p-3 border border-gray w-full rounded-md"
          onChange={handleChange}
          value={formData.xconfirmpassword}
          id=""
        />
        <button
          type="submit"
          className="w-full py-2 hover:bg-opacity-95 text-white bg-primary px-4 rounded-md shadow hover:shadow-md transition-all duration-300"
        >
          Register
        </button>
        <div className="text-sm flex items-center gap-1">
          <h4>You have an account ?</h4>
          <Link href={"/login"}>
            <button className="hover:underline text-limeBlue">
              login here.
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
