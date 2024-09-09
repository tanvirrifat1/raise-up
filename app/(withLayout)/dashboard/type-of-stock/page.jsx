"use client";

import React, { useEffect, useState } from "react";
import TableNext from "../../../../components/ui/tableNext";
import { getStock } from "@/app/api/frontend/stock/getStocks";

const StockTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getStock();
      setData(result?.result);
    };

    fetchData();
  }, []);

  const linkURL = "/dashboard/type-of-stock/edit";

  const createLink = "/dashboard/type-of-stock/create";

  const deleteURL = "/api/codes";

  const redirectInfo = "xcodeid";

  const tableRow = [
    // { tableName: "xcodeid" },
    { tableName: "xcode" },
    { tableName: "zactive" },
    { tableName: "Action" },
  ];

  const tableName = [
    // { tableName: "ID" },
    { tableName: "Stocks" },
    { tableName: "Status" },
    { tableName: "Action" },
  ];

  return (
    <div className="w-full py-10 flex flex-col mx-auto">
      <h3 className="text-left text-primary text-3xl font-semibold my-10">
        All Stocks Information
      </h3>

      <TableNext
        tableRow={tableRow}
        table_title="Stocks"
        tablesData={data}
        actionButton={true}
        linkURL={linkURL}
        createLink={createLink}
        deleteURL={deleteURL}
        redirectInfo={redirectInfo}
        tableName={tableName}
      />
    </div>
  );
};

export default StockTable;
