"use client";

import React, { useEffect, useState } from "react";
import TableNext from "../../../../components/ui/table";
import { getCustomerData } from "../../../api/frontend/customer/getCustomerData";
const CustomerTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCustomerData();
      setData(result?.result);
    };

    fetchData();
  }, []);

  const linkURL = "/dashboard/customer-data/edit";

  const createLink = "/dashboard/customer-data/create";

  const deleteURL = "/api/codes";

  const redirectInfo = "xcusid";

  const tableRow = [
    { tableName: "xcus" },
    { tableName: "zemail" },
    { tableName: "xmobile" },
    { tableName: "xaddress1" },
    { tableName: "zactive" },
    { tableName: "Action" },
  ];

  const tableName = [
    { tableName: "Name" },
    { tableName: "Email" },
    { tableName: "Mobile" },
    { tableName: "Address" },
    { tableName: "Status" },
    { tableName: "Action" },
  ];

  return (
    <div className="w-full py-10 flex flex-col mx-auto">
      <h3 className="text-left text-primary text-3xl font-semibold my-10">
        All Customer Information
      </h3>

      <TableNext
        tableRow={tableRow}
        table_title="Customer"
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

export default CustomerTable;
