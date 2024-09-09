"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import UpdatedFormDropDown from "./updatedFormDropDown";
import UpdateDropDown from "./updateDropDown";

const UpdateForm = ({
  fields, //@ ALL THE FIELDS YOU WANT TO SHOW IN THE FORM!
  initialValues, //@ INITIAL VALUES FOR ALL INPUT!
  apiEndpoint, //@ UPDATE METHOD API URL!
  placeholder, //@ FROM ( FIND UNIQUE ) DATA OBJECTS!
  id, //@ BASED ON WHICH ID, YOU WANT TO MATCH UPDATED DATA'S!
  createLink, //@ THAT METHOD CREATED URL IN FRONTEND!
  dropDownMenu,
  categoryName,
  subCategoryName,
  singleDropDown,
  dropName,
  enterDropTile,
  fetchedDropData,
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [selectedCatValue, setSelectedCatValue] = useState();
  const [selectedSubCatValue, setSelectedSubCatValue] = useState();
  const [singleDropValue, setSingleDropValue] = useState();

  const { status, data } = useSession();
  const businessId = data?.user?.bizid;
  const name = data?.user?.name;

  if (status === "loading") {
    return <div>Loading....</div>;
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
    setLoading(true);
    const datas = fields.reduce((acc, field) => {
      let value = formData[field.name];

      if (field.type === "number") {
        value = Number(value);
      }
      return { ...acc, [field.name]: value };
    }, {});

    const dropDownUpData = {
      ...datas,
      xcat: selectedCatValue,
      xcatsl: selectedSubCatValue,
      businessId,
      name: "Rafi",
    };

    const subCategoryData = {
      ...datas,
      xcatsl: singleDropValue,
      businessId,
      name,
    };

    const userData = {
      ...datas,
      xrole: singleDropValue,
      businessId,
      name,
    };

    try {
      let requestBody;

      if (dropDownMenu) {
        requestBody = dropDownUpData;
      } else if (dropName === "xcat") {
        requestBody = subCategoryData;
      } else if (dropName === "xrole") {
        requestBody = userData;
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
        body: JSON.stringify(requestBody),
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
        // customRevidateTag("singlesaledet");
        setUpdateButton(true);
        setUpRedirectID(res?.result?.[updateID]);
      }
    } catch (error) {
      console.error("Error posting data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = async () => {
    await submitFormData();
  };

  const handleButtonClear = async () => {
    setFormData(initialValues);
    {
      dropDownMenu && setSelectedCatValue("");
      setSelectedSubCatValue("");
    }

    toast.success("Form has been cleared!!");

    router.push(createLink);
    router.refresh();
  };

  return (
    <div>
      <div>
        {dropDownMenu && (
          <UpdatedFormDropDown
            dropDownMenu={dropDownMenu}
            selectedCatValue={selectedCatValue}
            setSelectedCatValue={setSelectedCatValue}
            selectedSubCatValue={selectedSubCatValue}
            setSelectedSubCatValue={setSelectedSubCatValue}
            categoryName={categoryName}
            subCategoryName={subCategoryName}
          />
        )}
      </div>
      <div>
        {singleDropDown && (
          <UpdateDropDown
            singleDropDown={singleDropDown}
            setSingleDropValue={setSingleDropValue}
            dropName={dropName}
            enterDropTile={enterDropTile}
            fetchedDropData={fetchedDropData}
          />
        )}
      </div>
      <form
        className="flex flex-col lg:grid lg:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        {fields.map((field) => (
          <div key={field.name} className="relative">
            <input
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
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

      <div className="flex flex-row gap-4 mt-5">
        <button
          onClick={handleButtonClick}
          className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
        >
          {loading ? "Updating..." : "Update"}
        </button>

        <button
          onClick={handleButtonClear}
          className="border-2 bg-blue border-blue rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;
