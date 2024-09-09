import Link from "next/link";
import UpdateForm from "../../../../../../components/ui/updateForm";
import { getSingleItemInformation } from "../../../../../api/frontend/items/getSingleItem";
import { getAllCategoryInformation } from "../../../../../api/frontend/category/getAllCategory";
import { cetegories } from '@/app/api/frontend/category/categories';

const page = async ({ params }) => {
  const { result } = await getSingleItemInformation(params?.id);

  const { result: dropDownMenu } = await cetegories();

  const fields = [
    { name: "zemail", type: "String", placeholder: "Enter Email" },
    { name: "xdesc", type: "String", placeholder: "Enter item description" },
    {
      name: "xlongdesc",
      type: "String",
      placeholder: "Enter long description",
    },
    {
      name: "xunitpur",
      type: "String",
      placeholder: "Enter unit for purchase",
    },
    { name: "xunitsale", type: "String", placeholder: "Enter unit for sale" },
    { name: "xtypestk", type: "String", placeholder: "Enter type for stock" },
    { name: "xcur", type: "String", placeholder: "Enter currency" },
    { name: "xpricepur", type: "Number", placeholder: "Enter purchase price" },
    { name: "xstdcost", type: "Number", placeholder: "Enter standard cost" },
    { name: "xmrp", type: "Number", placeholder: "Enter MRP" },
    { name: "xstdprice", type: "Number", placeholder: "Enter standard price" },
    { name: "xdisc", type: "Number", placeholder: "Enter discount" },
    { name: "xvatpct", type: "Number", placeholder: "Enter VAT percentage" },
    { name: "zactive", type: "Number", placeholder: "Enter active status" },
  ];

  const initialValues = {
    zemail: "",
    xdesc: "",
    xlongdesc: "",
    xunitpur: "",
    xunitsale: "",
    xtypestk: "",
    xcur: "",
    xpricepur: null,
    xstdcost: null,
    xmrp: null,
    xstdprice: null,
    xdisc: null,
    xvatpct: null,
    zactive: null,
  };

  const apiEndpoint = `/api/backend/items`;

  const createLink = "/dashboard/set-items/create";

  const pushURL = "/dashboard/set-items/information";

  return (
    <div className="disable-selection my-10 flex flex-col bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          Edit Information
        </h3>

        <Link href="/dashboard/set-items/information">
          <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
            Go To Items
          </button>
        </Link>
      </div>
      <div>
        <hr className="my-10 border border-gray" />
        <UpdateForm
          fields={fields}
          initialValues={initialValues}
          apiEndpoint={apiEndpoint}
          placeholder={result}
          id={params?.id}
          createLink={createLink}
          pushURL={pushURL}
          dropDownMenu={dropDownMenu}
          subCategoryName={result?.subcategory?.xsubcat}
          categoryName={result?.xcat}
        />
      </div>
    </div>
  );
};

export default page;
