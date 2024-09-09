import React from "react";

import TableView from "../../../../../../components/ui/tableView";
import Link from "next/link";
import { getSingleSalesMst } from "../../../../../api/frontend/salesmst/getSingleSalesMst";
import SalesTabel from "../../../../../../components/ui/salesTabel";

const CodeEdit = async ({ params }) => {
  const { result } = await getSingleSalesMst(params?.id);

  const redirectInfo = "xecomdetsl";

  return (
    <div className="disable-selection mt-10 w-full md:w-4/5 flex flex-col mx-auto bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          Order Summary
        </h3>

        <Link href="/dashboard/salesmst">
          <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
            Go To SalesMaster
          </button>
        </Link>
      </div>
      <hr className="my-10 border border-gray" />

      <SalesTabel id={params?.id} result={result} redirectInfo={redirectInfo} />
    </div>
  );
};

export default CodeEdit;
