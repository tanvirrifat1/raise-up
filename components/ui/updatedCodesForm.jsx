"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import UpdatedFormDropDown from "./updatedFormDropDown";

const UpdateCodesFrom = ({
  fields, //@ ALL THE FIELDS YOU WANT TO SHOW IN THE FORM!
  initialValues, //@ INITIAL VALUES FOR ALL INPUT!
  apiEndpoint, //@ UPDATE METHOD API URL!
  placeholder, //@ FROM ( FIND UNIQUE ) DATA OBJECTS!
  id, //@ BASED ON WHICH ID, YOU WANT TO MATCH UPDATED DATA'S!
  createLink, //@ THAT METHOD CREATED URL IN FRONTEND!
  dropDownMenu,
  categoryName,
  subCategoryName,
}) => {
  const [formData, setFormData] = useState(initialValues);
  const router = useRouter();

  const [isActive, setIsActive] = useState(placeholder?.zactive === 1);
  const [isInactive, setIsInactive] = useState(placeholder?.zactive === 0);

  const { status, data } = useSession();
  const businessId = data?.user?.bizid;
  const name = data?.user?.name;

  if (status === "loading") {
    return <div>Loadin....</div>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitFormData();
  };

  const submitFormData = async () => {
    const datas = fields.reduce((acc, field) => {
      let value = formData[field.name];

      if (field.type === "number") {
        value = Number(value);
      }
      return { ...acc, [field.name]: value };
    }, {});

    const dropDownUpData = {
      ...datas,
      businessId,
      name: "Rafi",
      zactive: isActive ? 1 : isInactive ? 0 : undefined,
    };

    try {
      let requestBody;

      if (dropDownMenu) {
        requestBody = dropDownUpData;
      } else {
        requestBody = {
          ...datas,
          businessId,
          name,
        };
      }

      const response = await fetch(`${apiEndpoint}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dropDownUpData),
      });

      const res = await response.json();
      if (res.error) {
        toast.error(res.error);
      } else if (response.ok === false) {
        toast.error(`${response.status}, Something went wrong!!`);
      }

      if (response.ok === true) {
        toast.success("Updated!!");
        router.refresh();
        setUpdateButton(true);
        setUpRedirectID(res?.result?.[updateID]);
      }
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  };

  const handleButtonClick = async () => {
    await submitFormData();
  };

  const handleButtonClear = async () => {
    setFormData(initialValues);

    toast.success("Form has been cleared!!");

    router.push(createLink);
    router.refresh();
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <form
          className="flex flex-col lg:grid lg:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          {fields.map((field) => (
            <div key={field.name} className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full lg:w-[550px]"
                id={field.name}
                name={field.name}
                type={field.type}
                onChange={handleChange}
                defaultValue={placeholder?.[field.name]}
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor={field.name}
              >
                {field.placeholder}
              </label>
            </div>
          ))}
        </form>

        <div>
          <p className="border-b">Choose Status</p>
          <div className="flex flex-col lg:flex-row lg:gap-3 lg:self-center mt-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isActive}
                onChange={() => {
                  setIsActive(!isActive);
                  setIsInactive(false);
                }}
              />
              <span className="ml-2">Active</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isInactive}
                onChange={() => {
                  setIsInactive(!isInactive);
                  setIsActive(false);
                }}
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-5">
        <button
          onClick={handleButtonClick}
          className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
        >
          Update
        </button>

        <button
          onClick={handleButtonClear}
          className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default UpdateCodesFrom;
