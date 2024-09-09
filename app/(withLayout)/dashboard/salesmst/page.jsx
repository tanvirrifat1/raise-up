"use client";

import { useEffect, useState } from "react";
import TableView from "../../../../components/ui/tableView";

const tableRow = [
  { tableName: "xecomsl" },
  { tableName: "zemail" },
  { tableName: "xcus" },
  { tableName: "xstatus" },
  { tableName: "View" },
];

const tableName = [
  { tableName: "ID" },
  { tableName: "Email" },
  { tableName: "Customer Name" },
  { tableName: "Status" },
  { tableName: "View" },
];

const RolesTable = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/salesmst`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch sales data");
        }
        const data = await response.json();

        setSalesData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSalesData();
  }, []);

  const linkURL = "/dashboard/salesmst/edit";

  const createLink = "/dashboard/salesmst/create";

  const deleteURL = "/api/salesmst";

  const redirectInfo = "xecomsl";

  const validatedTag = "salemst";
  return (
    <div className="w-full py-10 flex flex-col mx-auto">
      <h3 className="text-left text-primary text-3xl font-semibold my-10">
        All SalesMaster Information
      </h3>

      <TableView
        tableRow={tableRow}
        table_title="SalesMaster"
        tablesData={salesData}
        actionButton={true}
        linkURL={linkURL}
        createLink={createLink}
        deleteURL={deleteURL}
        redirectInfo={redirectInfo}
        tableName={tableName}
        validatedTag={validatedTag}
      />
    </div>
  );
};

export default RolesTable;
