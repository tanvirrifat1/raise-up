"use client";
import Table from "../../../../components/ui/table";
import { getAllSubCategoryInformation } from "../../../api/frontend/sub-category/getAllSubCategory";
import { useEffect, useState } from "react";

const tableRow = [
  { tableName: "xsubcatsl" },
  { tableName: "xcatsl" },
  { tableName: "xsubcat" },
  // { tableName: "xgroup" },
  { tableName: "Action" },
];

const tableName = [
  { tableName: "ID" },
  { tableName: "Category ID" },
  { tableName: "Sub Category" },
  { tableName: "Action" },
];

const RolesTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllSubCategoryInformation();
      setData(result.result);
    };

    fetchData();
  }, []);

  const linkURL = "/dashboard/sub-category/edit-information";

  const createLink = "/dashboard/sub-category/create";
  // const linkURL = "/dashboard/sub-category/create-update";

  // const createLink = "/dashboard/sub-category/create-update";

  const deleteURL = "/api/backend/sub-category";

  const redirectInfo = "xsubcatsl";

  return (
    <div className="w-full py-10 flex flex-col mx-auto">
      <h3 className="text-left text-primary text-3xl font-semibold my-10">
        All Sub Category Information
      </h3>

      <Table
        tableRow={tableRow}
        tableName={tableName}
        table_title="Sub Category"
        tablesData={data}
        actionButton={true}
        linkURL={linkURL}
        createLink={createLink}
        deleteURL={deleteURL}
        redirectInfo={redirectInfo}
      />
    </div>
  );
};

export default RolesTable;
