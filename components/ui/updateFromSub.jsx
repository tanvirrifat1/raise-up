"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import UpdatedFormDropDown from "./updatedFormDropDown";
import EditDropdown from "./EditDropdown";

const UpdateFormSub = ({
  fields, //@ ALL THE FIELDS YOU WANT TO SHOW IN THE FORM!
  initialValues, //@ INITIAL VALUES FOR ALL INPUT!
  apiEndpoint, //@ UPDATE METHOD API URL!
  placeholder, //@ FROM ( FIND UNIQUE ) DATA OBJECTS!
  id, //@ BASED ON WHICH ID, YOU WANT TO MATCH UPDATED DATA'S!
  createLink, //@ THAT METHOD CREATED URL IN FRONTEND!
  dropDownMenu,
  categoryName,
  subCategoryName,
  results,
}) => {
  const [formData, setFormData] = useState(initialValues);

  const [selectedCatValue, setSelectedCatValue] = useState();
  const [selectedSubCatValue, setSelectedSubCatValue] = useState();
  const router = useRouter();

  const [selectedItems, setSelectedItems] = useState(new Map());
  const [selectAll, setSelectAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "all") {
      setSelectAll(checked);
      const updatedSelectedItems = new Map();
      results.forEach((category) => {
        updatedSelectedItems.set(category.xcat, checked);
        category.subcategory.forEach((subcategory) => {
          updatedSelectedItems.set(subcategory.xsubcat, checked);
        });
      });
      setSelectedItems(updatedSelectedItems);
    } else {
      const updatedSelectedItems = new Map(selectedItems);

      if (results.some((category) => category.xcat === name)) {
        results
          .filter((category) => category.xcat === name)
          .forEach((category) => {
            category.subcategory.forEach((subcategory) => {
              updatedSelectedItems.set(subcategory.xsubcat, checked);
            });
          });
        updatedSelectedItems.set(name, checked);

        setSelectedItems(updatedSelectedItems);
      } else {
        updatedSelectedItems.set(name, checked);

        const categoryContainingSubcategory = results.find((category) =>
          category.subcategory.some(
            (subcategory) => subcategory.xsubcat === name
          )
        );

        const categoryChecked = categoryContainingSubcategory.subcategory.some(
          (subcategory) => updatedSelectedItems.get(subcategory.xsubcat)
        );
        updatedSelectedItems.set(
          categoryContainingSubcategory.xcat,
          categoryChecked
        );

        setSelectedItems(updatedSelectedItems);
      }
    }
  };

  const transformSelectedItems = () => {
    const transformedData = [];
    selectedItems.forEach((value, key) => {
      if (value) {
        const category = results.find((category) => category.xcat === key);
        if (category) {
          const subCategoryArray = category.subcategory
            .filter((subcategory) => selectedItems.get(subcategory.xsubcat))
            .map((subcategory) => ({
              subcategoryName: subcategory.xsubcat,
            }));

          transformedData.push({
            category: key,
            subCategory: subCategoryArray,
          });
        }
      }
    });
    return transformedData;
  };

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
      xroledt: transformSelectedItems(),
      businessId,
      name,
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
        // setFormData(initialValues);
        setUpdateButton(true);
        setUpRedirectID(res?.result?.[updateID]);
        router.refresh();
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
      <div>
        {results && (
          <EditDropdown
            checkboxData={results}
            placeholder={placeholder}
            handleCheckboxChange={handleCheckboxChange}
            transformSelectedItems={transformSelectedItems}
            selectAll={selectAll}
            selectedItems={selectedItems}
          />
        )}
      </div>

      <div className="flex flex-row gap-4 mt-5">
        {/* {showCreateNewBTN === false ? (
          <>
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
          </>
        ) : (
          <Link href={createLink}>
            <button className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300">
              Create A New
            </button>
          </Link>
        )} */}

        <button
          onClick={handleButtonClick}
          className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
        >
          {loading ? "Updating..." : "Update"}
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

export default UpdateFormSub;
