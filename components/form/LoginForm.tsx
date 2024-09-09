"use client";

import { signIn, useSession } from "next-auth/react";
import React, { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { status, data } = useSession();

  const router = useRouter();

  const [error, setErrors] = React.useState<string | null>(null);

  const [xpassword, setxpassword] = useState("");
  const [xusername, setxusername] = useState("");

  if (status === "authenticated") {
    return router.push("/dashboard");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        xpassword,
        xusername,
        redirect: false,
      });

      if (res.error) {
        setErrors("invalid credentials");
        return;
      }
      router.push("/dashboard");
      // router.replace("dashboard");
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
        <h4 className="text-xl font-semibold md:text-3xl">Login Here.</h4>
        <h4>{error ? error : ""}</h4>
        <input
          type="text"
          name="xusername"
          placeholder="Username"
          className="p-3 border border-gray w-full rounded-md"
          onChange={(e) => setxusername(e.target.value)}
          value={xusername}
          id=""
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="p-3 border border-gray w-full rounded-md"
          onChange={(e) => setxpassword(e.target.value)}
          value={xpassword}
          id=""
        />

        <button
          type="submit"
          className="w-full py-2 hover:bg-opacity-95 text-white bg-primary px-4 rounded-md shadow hover:shadow-md transition-all duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
