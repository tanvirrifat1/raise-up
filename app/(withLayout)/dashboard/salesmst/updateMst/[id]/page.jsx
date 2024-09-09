"use client";

import React, { useEffect, useState } from "react";
import UpdateForm from "../../../../../../components/ui/updateForm";
import Link from "next/link";
import { getSingleSalesDet } from "../../../../../api/frontend/salesmst/getSingleSalesDet";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const router = useRouter();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result } = await getSingleSalesDet(params?.id);
        setResult(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params?.id]);

  const fields = [
    { name: "zemail", type: "email", placeholder: "Enter Email" },
    { name: "xcost", type: "number", placeholder: "Enter Cost" },
    { name: "xrate", type: "number", placeholder: "Enter Rate" },
    { name: "xqty", type: "number", placeholder: "Enter Quantity" },
    { name: "xpaymethod", type: "text", placeholder: "Enter Payment-Method" },
    { name: "xstatus", type: "text", placeholder: "Enter Status" },
  ];

  const initialValues = {
    zemail: "",
    xcost: "",
    xrate: "",
    xqty: "",
    xpaymethod: "",
    xstatus: "",
  };

  const apiEndpoint = `${process.env.NEXT_PUBLIC_URL}/api/salesdet`;

  const pushURL = "/dashboard/zcodes";

  const createLink = "/dashboard/codeSetting";

  const handleFetch = () => {
    router.refresh();
  };

  return (
    <div className="disable-selection mt-10 w-full md:w-4/5 flex flex-col mx-auto bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          Order-Update
        </h3>

        <Link href={`/dashboard/salesmst/edit/${result?.xecomsl}`}>
          <button
            onClick={() => handleFetch()}
            className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md "
          >
            Go To SalesMaster Info
          </button>
        </Link>
      </div>
      <hr className="my-10 border border-gray" />
      <UpdateForm
        fields={fields}
        initialValues={initialValues}
        apiEndpoint={apiEndpoint}
        placeholder={result}
        id={params?.id}
        createLink={createLink}
        pushURL={pushURL}
      />
    </div>
  );
};

export default Page;
