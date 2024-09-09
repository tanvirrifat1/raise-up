"use client";

import React, { useEffect, useState } from "react";
import Table from "../../../../../components/ui/table";
import { useSession } from "next-auth/react";
import { getSingleRoleInfoByBizId } from "../../../../api/frontend/role/getSingleRoleInfoByBizId";

const tableRow = [
  { tableName: "zemail" },
  { tableName: "xrole" },
  { tableName: "Action" },
];

const tableName = [
  { tableName: "Email" },
  { tableName: "Role" },
  { tableName: "Action" },
];

const RolesTable = () => {
  const { data: sessionData } = useSession();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const businessId = sessionData?.user?.bizid;
      const { result: fetchedResult } = await getSingleRoleInfoByBizId(
        businessId
      );

      const resultToSet = Array.isArray(fetchedResult)
        ? fetchedResult
        : [fetchedResult];

      setResult(resultToSet);
    };

    if (sessionData) {
      fetchData();
    }
  }, [sessionData]);

  const linkURL = "/dashboard/role/edit-information";
  const createLink = "/dashboard/role/create";
  const deleteURL = "/api/backend/role";
  const redirectInfo = "xroleid";

  return (
    <div className="w-full py-10 flex flex-col">
      <h3 className="text-left text-primary text-3xl font-semibold my-10">
        User Role Information
      </h3>

      <Table
        tableRow={tableRow}
        tableName={tableName}
        table_title="Role"
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

export default RolesTable;
