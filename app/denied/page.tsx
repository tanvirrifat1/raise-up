"use client";

import Link from "next/link";
import React, { useState } from "react";

const Deniedpage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh]">
      <div className="text-center">
        <h4 className="uppercase text-xl font-semibold text-red">
          Sorry you are not authorized.
        </h4>
        <div className="mt-8">
          <button
            onClick={handleLoginClick}
            disabled={isLoading}
            className="text-blue text-sm border  border-gray px-3 py-1  rounded-md"
          >
            {isLoading ? "Loading..." : "Go Home"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deniedpage;
