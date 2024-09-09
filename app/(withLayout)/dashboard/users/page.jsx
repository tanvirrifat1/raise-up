import { getServerSession } from "next-auth";
import Table from "../../../../components/ui/table";
import { options } from "../../../api/auth/[...nextauth]/options";
import { getUsersByBiz } from "../../../api/frontend/user/getUsersByBiz";

const tableRow = [
  { tableName: "xuserid" },
  { tableName: "xusername" },
  { tableName: "xuseremail" },
  { tableName: "xusermobile" },
  { tableName: "xrole" },
  { tableName: "zactive" },
  { tableName: "Action" },
];

const tableName = [
  { tableName: "ID" },
  { tableName: "Username" },
  { tableName: "Email" },
  { tableName: "Mobile" },
  { tableName: "Role" },
  { tableName: "Status" },
  { tableName: "Action" },
];

const RolesTable = async () => {
  const session = await getServerSession(options);
  const businessId = session?.user?.bizid;

  const { result } = await getUsersByBiz(businessId);

  const linkURL = "/dashboard/users/edit-information";

  const createLink = "/dashboard/users/create";

  const deleteURL = "/api/backend/users";

  const redirectInfo = "xuserid";

  return (
    <div className="w-full py-10 flex flex-col mx-auto">
      <h3 className="text-left text-primary text-3xl font-semibold my-10">
        All Users Information
      </h3>

      <Table
        tableRow={tableRow}
        tableName={tableName}
        table_title="Users"
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
