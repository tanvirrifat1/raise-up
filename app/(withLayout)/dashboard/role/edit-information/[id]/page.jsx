import Link from "next/link";
import { getSingleRole } from "../../../../../api/frontend/role/getSingleRole";
import EditDropdown from "../../../../../../components/ui/EditDropdown";
import { getAllCategoryInformation } from "../../../../../api/frontend/category/getAllCategory";
import UpdateFormForRole from "../../../../../../components/ui/updateFormForRole";
import result from "../../../../../../public/defaultSidebar.json";
const page = async ({ params }) => {

  const { result: placeholder } = await getSingleRole(params?.id);

  const fields = [{ name: "xrole", type: "text", placeholder: "Role" }];

  const initialValues = {
    xrole: "",
  };

  const apiEndpoint = `${process.env.NEXT_PUBLIC_URL}/api/backend/role`;

  const createLink = "/dashboard/role/create";

  const pushURL = "/dashboard/role/information";

  return (
    <div className="disable-selection my-10 flex flex-col bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          Update A Role
        </h3>

        <Link href="/dashboard/role/information">
          <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
            Go To Items
          </button>
        </Link>
      </div>

      <hr className="my-10 border border-gray" />
      <UpdateFormForRole
        fields={fields}
        initialValues={initialValues}
        apiEndpoint={apiEndpoint}
        placeholder={placeholder}
        id={params?.id}
        createLink={createLink}
        pushURL={pushURL}
        result={result}
      />
    </div>
  );
};

export default page;
