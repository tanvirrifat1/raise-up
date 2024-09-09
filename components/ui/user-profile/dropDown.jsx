"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function DropDown({ user }) {
  const path = usePathname();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);

  return (
    <div ref={dropDownRef} className="relative mx-auto w-fit text-black">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`${
          user == "yes" ? "text-white" : "text-gray"
        } text-[16px] bg-primary px-4 md:px-6 py-2 rounded-md`}
      >
        <CgProfile></CgProfile>
      </button>
      <ul
        className={`${
          open ? "visible duration-300" : "invisible"
        } absolute right-0 top-12 z-50 w-fit rounded-sm bg-slate-200 shadow-md bg-primary text-white min-w-[150px] py-2`}
      >
        {user == "yes" ? (
          <>
            {session?.user?.role == "user" &&
              path !== "/customer-dashboard" && (
                <>
                  <li
                    className={`rounded-sm px-6 ${
                      open ? "opacity-100 duration-300" : "opacity-0"
                    } text-red-500 hover:bg-red-600 hover:text-white`}
                  >
                    <Link href={"/customer-dashboard"} className="text-nowrap">
                      Go Dashboard
                    </Link>
                  </li>
                  <li
                    className={`rounded-sm px-6 ${
                      open ? "opacity-100 duration-300" : "opacity-0"
                    } text-red-500 hover:bg-red-600 hover:text-white`}
                  >
                    <button
                      onClick={() =>
                        signOut({
                          callbackUrl: `${process.env.NEXT_PUBLIC_URL}/login/customer-login`,
                          redirect: true,
                        })
                      }
                      className="cursor-pointer text-nowrap"
                    >
                      Log-Out
                    </button>
                  </li>
                </>
              )}
            {path == "/customer-dashboard" && (
              <>
                <li
                  className={`rounded-sm px-6 ${
                    open ? "opacity-100 duration-300" : "opacity-0"
                  } text-red-500 hover:bg-red-600 hover:text-white`}
                >
                  <Link href={"/customer-dashboard"} className="text-nowrap">
                    Profile
                  </Link>
                </li>
                <li
                  className={`rounded-sm px-6 ${
                    open ? "opacity-100 duration-300" : "opacity-0"
                  } text-red-500 hover:bg-red-600 hover:text-white`}
                >
                  <button
                    onClick={() =>
                      signOut({
                        callbackUrl: `${process.env.NEXT_PUBLIC_URL}/login/customer-login`,
                        redirect: true,
                      })
                    }
                    className="cursor-pointer text-nowrap"
                  >
                    Log-Out
                  </button>
                </li>
              </>
            )}
            {session?.user?.role == "admin" && path !== "/dashboard" && (
              <>
                <li
                  className={`rounded-sm px-6 ${
                    open ? "opacity-100 duration-300" : "opacity-0"
                  } text-red-500 hover:bg-red-600 hover:text-white`}
                >
                  <Link href={"/dashboard"} className="text-nowrap">
                    Go Dashboard
                  </Link>
                </li>
                <li
                  className={`rounded-sm px-6 ${
                    open ? "opacity-100 duration-300" : "opacity-0"
                  } text-red-500 hover:bg-red-600 hover:text-white`}
                >
                  <button
                    onClick={() =>
                      signOut({
                        callbackUrl: `${process.env.NEXT_PUBLIC_URL}/login`,
                        redirect: true,
                      })
                    }
                    className="cursor-pointer text-nowrap"
                  >
                    Log-Out
                  </button>
                </li>
              </>
            )}
            {path == "/dashboard" && (
              <>
                <li
                  className={`rounded-sm px-6 ${
                    open ? "opacity-100 duration-300" : "opacity-0"
                  } text-red-500 hover:bg-red-600 hover:text-white`}
                >
                  <Link
                    href={"/dashboard/user-profile"}
                    className="text-nowrap"
                  >
                    Profile
                  </Link>
                </li>
                <li
                  className={`rounded-sm px-6 ${
                    open ? "opacity-100 duration-300" : "opacity-0"
                  } text-red-500 hover:bg-red-600 hover:text-white`}
                >
                  <button
                    onClick={() =>
                      signOut({
                        callbackUrl: `${process.env.NEXT_PUBLIC_URL}/login`,
                        redirect: true,
                      })
                    }
                    className="cursor-pointer text-nowrap"
                  >
                    Log-Out
                  </button>
                </li>
              </>
            )}
          </>
        ) : (
          <>
            <li
              className={`rounded-sm px-6 ${
                open ? "opacity-100 duration-300" : "opacity-0"
              } text-red-500 hover:bg-red-600 hover:text-white text-nowrap`}
            >
              <Link href={"/login"}>
                <button className="bg-primary md:px-6 rounded-md text-nowrap">
                  Affiliate Login
                </button>
              </Link>
            </li>
            <li
              className={`rounded-sm px-6 ${
                open ? "opacity-100 duration-300" : "opacity-0"
              } text-red-500 hover:bg-red-600 hover:text-white`}
            >
              <Link href={"/login/customer-login"}>
                <button className="bg-primary md:px-6 rounded-md text-nowrap">
                  Customer Login
                </button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
