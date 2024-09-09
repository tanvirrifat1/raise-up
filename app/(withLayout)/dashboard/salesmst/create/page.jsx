import Link from "next/link";
import CreateFrom from "../../../../../components/ui/createForm";

const page = () => {
  const fields = [
    { name: "zemail", type: "email", placeholder: "Enter email" },
    { name: "bizid", type: "number", placeholder: "Enter bizid" },
    { name: "xcus", type: "text", placeholder: "Enter customer" },
    { name: "xdate", type: "date", placeholder: "Enter date" },
    { name: "xpaymethod", type: "text", placeholder: "Enter payment" },
    { name: "xgrossdisc", type: "number", placeholder: "Enter grossdisc" },
    { name: "xstatus", type: "text", placeholder: "Enter status" },
    { name: "xrecflag", type: "text", placeholder: "Enter recflag" },
    { name: "xyear", type: "text", placeholder: "Enter year" },
    { name: "xper", type: "number", placeholder: "Enter per" },
  ];

  const initialValues = {
    zemail: "",
    bizid: "",
    xcus: "",
    xdate: "",
    xpaymethod: "",
    xgrossdisc: "",
    xstatus: "",
    xrecflag: "",
    xyear: "",
    xper: "",
  };

  const apiEndpoint = `${process.env.NEXT_PUBLIC_URL}/api/salesmst`;

  const pushURL = "/dashboard/category/information";

  const updateURL = "/dashboard/category";

  const validatedTag = "salemst";

  return (
    <div className="disable-selection my-10 flex flex-col bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          Create A Salesmst
        </h3>

        <Link href="/dashboard/salesmst">
          <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
            Go To sales
          </button>
        </Link>
      </div>
      <hr className="my-10 border border-gray" />
      <CreateFrom
        fields={fields}
        initialValues={initialValues}
        apiEndpoint={apiEndpoint}
        // pushURL={pushURL}
        updateURL={updateURL}
        updateID="xecomsl"
        validatedTag={validatedTag}
      />
    </div>
  );
};

export default page;
