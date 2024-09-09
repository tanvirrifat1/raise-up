"use client";

import React, { useEffect, useState } from "react";
import TableNext from "../../../../components/ui/tableNext";
import { getCurrency } from "../../../api/frontend/currency/getCurrency";

const CurrencyPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getCurrency();
      setData(result?.result);
    };

    fetchData();
  }, []);

  const linkURL = "/dashboard/currency/edit";

  const createLink = "/dashboard/currency/create";

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
    { tableName: "Currency" },
    { tableName: "Status" },
    { tableName: "Action" },
  ];

  return (
    <div className="w-full py-10 flex flex-col mx-auto">
      <h3 className="text-left text-primary text-3xl font-semibold my-10">
        All Currency Information
      </h3>

      <TableNext
        tableRow={tableRow}
        table_title="Currency"
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

export default CurrencyPage;
