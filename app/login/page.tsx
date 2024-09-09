"use client";

import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import toast from "react-hot-toast";
import Link from "next/link";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [error, setErrors] = useState<string | null>(null);
  const [xpassword, setxpassword] = useState("");
  const [xuseremail, setxuseremail] = useState("");
  const [loading, setloading] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!isVisible);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setloading(true);
      const res = await signIn("credentials", {
        xpassword,
        xuseremail,
        redirect: false,
      });

      if (res.error) {
        setloading(false);
        toast.error(res.error);
        setErrors(res.error);
        return;
      }
      setloading(true);
      router.refresh();
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      setloading(true);
      return router.push("/dashboard");
    }
  }, [router, status]);

  if (status === "loading" || loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh]">
        <div className="">
          <h4 className="text-lightBlue text-center">Loading....</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto px-4 flex flex-col gap-3 min-h-screen mt-20"
      >
        <h4 className="text-xl font-semibold md:text-3xl">Login Here.</h4>
        <h4 className="text-sm text-center text-red">{error ? error : ""}</h4>
        <div className="relative">
          <input
            type="text"
            name="xuseremail"
            placeholder="Email"
            className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
            onChange={(e) => setxuseremail(e.target.value)}
            value={xuseremail}
            id="xuseremail"
          />
          <label
            className="absolute -top-2 left-0 bg-transparent text-lg text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
            htmlFor={"xuseremail"}
          >
            Email
          </label>
        </div>
        <div className="relative">
          <input
            type={!isVisible ? "password" : "text"}
            name="password"
            placeholder="Password"
            className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
            onChange={(e) => setxpassword(e.target.value)}
            value={xpassword}
            id="password"
          />
          <label
            className="absolute -top-2 left-0 bg-transparent text-lg text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
            htmlFor={"password"}
          >
            Password
          </label>
          <span className="absolute z-10 right-3 top-4" onClick={toggle}>
            {isVisible ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
          </span>
        </div>
        <button
          disabled={loading}
          type="submit"
          className="w-full py-2 hover:bg-opacity-95 text-white bg-primary px-4 rounded-md shadow hover:shadow-md transition-all duration-300"
        >
          {loading ? "Loading...." : "Login"}
        </button>
        <div className="mt-2 flex gap-1 items-center text-sm">
          <h4>You have no account ? </h4>
          <Link
            href={"/affiliate"}
            className="  hover:underline text-lightBlue hover:text-skyBlue font-semibold"
          >
            Register here.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
