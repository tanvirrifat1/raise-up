import React from "react";
import CreateFrom from "../ui/createForm";

const AffiliateForm = async () => {
  const fields = [
    { name: "xorg", type: "text", placeholder: "Enter Name" },
    { name: "xemail", type: "email", placeholder: "Enter Email" },
    { name: "xsmtppass", type: "password", placeholder: "Enter Password" },
    { name: "xmobile", type: "text", placeholder: "Enter Mobile" },
    { name: "xaddress1", type: "text", placeholder: "Enter Address" },
  ];

  const initialValues = {
    xemail: "",
    xsmtppass: "",
    xorg: "",
    xaddress1: "",
    xmobile: "",

  };

  const apiEndpoint = "/api/affiliate";

  const updateURL = "/dashboard/codeSetting/edit";

  const redirectURL = '/login'
  return (
    <div className="disable-selection  w-full md:w-4/5 flex flex-col mx-auto bg-white p-10 rounded-md">
      <hr className="my-10 border border-gray" />
      <CreateFrom
        redirectURL={redirectURL}
        fields={fields}
        initialValues={initialValues}
        apiEndpoint={apiEndpoint}
        updateURL={updateURL}
        updateID="xcodeid"
      />
    </div>
  );
};

export default AffiliateForm;
