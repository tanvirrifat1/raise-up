"use client";
import Table from "../../../../components/ui/table";
import { getAllCategoryInformation } from "../../../api/frontend/category/getAllCategory";
import { useEffect, useState } from "react";

const tableRow = [
  { tableName: "xcatsl" },
  { tableName: "xcat" },
  { tableName: "Action" },
];

const tableName = [
  { tableName: "ID" },
  { tableName: "Category" },
  { tableName: "Action" },
];

const RolesTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllCategoryInformation();
      setData(result.result);
    };

    fetchData();
  }, []);

  const linkURL = "/dashboard/category/create-update";
  const createLink = "/dashboard/category/create-update";
  const deleteURL = "/api/backend/category";
  const redirectInfo = "xcatsl";

  const validateTag = "category";

  return (
    <div className="w-full py-10 flex flex-col mx-auto">
      <h3 className="text-left text-primary text-3xl font-semibold my-10">
        All Category Information
      </h3>

      <Table
        tableRow={tableRow}
        tableName={tableName}
        table_title="Category"
        tablesData={data}
        actionButton={true}
        linkURL={linkURL}
        createLink={createLink}
        deleteURL={deleteURL}
        redirectInfo={redirectInfo}
        validateTag={validateTag}
      />
    </div>
  );
};

export default RolesTable;
