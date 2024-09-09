import React from "react";
import Table from "../../../../../components/ui/table";
import { options } from "../../../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { getCatInfoByBizId } from "../../../../api/frontend/items/getCatInfoByBizId";
import Link from "next/link";
const tableRow = [
  { tableName: "xitemid" },
  { tableName: "zemail" },
  { tableName: "xcat" },
  { tableName: "xsubcat" },
  { tableName: "xitemcode" },
  { tableName: "zactive" },
  { tableName: "Action" },
];

const tableName = [
  { tableName: "ID" },
  { tableName: "Email" },
  { tableName: "Category" },
  { tableName: "Sub Category" },
  { tableName: "Item Code" },
  { tableName: "Status" },
  { tableName: "Action" },
];

const ItemsTable = async () => {
  const session = await getServerSession(options);
  const businessId = session?.user?.bizid;

  const { result } = await getCatInfoByBizId(businessId);

  const createLink = "/dashboard/set-items/item";
  // const createLink = "/dashboard/set-items/create";

  const deleteURL = `/api/backend/items`;

  const linkURL = "/dashboard/set-items/item";
  // const linkURL = "/dashboard/set-items/edit-information";

  const redirectInfo = "xitemid";

  return (
    <div className="Items Information py-10 flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-left text-primary text-3xl font-semibold my-10">
          Items Information
        </h3>
        <Link
          href={"/dashboard/set-items/information/previous-items"}
          className="bg-blue-500 hover:bg-blue-700 text-white bg-lime hover:text-lime hover:bg-gray rounded-md font-bold py-2 px-4 duration-300"
        >
          Previous Bussiness Items
        </Link>
      </div>

      <Table
        tableRow={tableRow}
        tableName={tableName}
        table_title="Items"
        tablesData={result}
        actionButton={true}
        linkURL={linkURL}
        createLink={createLink}
        deleteURL={deleteURL}
        redirectInfo={redirectInfo}
      />
    </div>
  );
};

export default ItemsTable;
