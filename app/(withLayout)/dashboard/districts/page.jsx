// import React from "react";
// import { getCodeSetting } from "../../../../utils/getCodeSetting";

// import Table from "../../../../components/ui/tableNext";

// const page = async () => {
//   const codes = await getCodeSetting();

//   const pathName = "/codeSetting";

//   const linkURL = "/dashboard/districts/edit";

//   const createLink = "/dashboard/districts/create";

//   const deleteURL = "/api/codes";

//   const redirectInfo = "xcodeid";

//   const tableRow = [
//     // { tableName: "xcodeid" },
//     { tableName: "xcode" },
//     { tableName: "zactive" },
//     { tableName: "Action" },
//   ];

//   const tableName = [
//     // { tableName: "ID" },
//     { tableName: "District" },
//     { tableName: "Status" },
//     { tableName: "Action" },
//   ];

//   return (
//     <div className="w-full py-10 flex flex-col mx-auto">
//       <h3 className="text-left text-primary text-3xl font-semibold my-10">
//         All District Information
//       </h3>

//       <Table
//         tableRow={tableRow}
//         table_title="District"
//         tablesData={codes}
//         actionButton={true}
//         linkURL={linkURL}
//         createLink={createLink}
//         deleteURL={deleteURL}
//         redirectInfo={redirectInfo}
//         tableName={tableName}
//       />
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useEffect, useState } from "react";
import { getCodeSetting } from "../../../api/frontend/district/getCodeSetting";

import Table from "../../../../components/ui/tableNext";

const DistrictTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCodeSetting();
      setData(result?.result);
    };

    fetchData();
  }, []);

  const pathName = "/codeSetting";

  const linkURL = "/dashboard/districts/edit";

  const createLink = "/dashboard/districts/create";

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
    { tableName: "District" },
    { tableName: "Status" },
    { tableName: "Action" },
  ];

  return (
    <div className="w-full py-10 flex flex-col mx-auto">
      <h3 className="text-left text-primary text-3xl font-semibold my-10">
        All District Information
      </h3>

      <Table
        tableRow={tableRow}
        table_title="District"
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

export default DistrictTable;
