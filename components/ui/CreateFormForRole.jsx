"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

import DropDownSub from "../../components/ui/dropdownSub";
import { customRevidateTag } from "../../utils/revalidateTag";

const CreateFormForRole = ({
  fields, //@ ALL THE FIELDS YOU WANT TO SHOW IN THE FORM!
  initialValues, //@ INITIAL VALUES FOR ALL INPUT!
  apiEndpoint, //@ POST METHOD API URL!
  updateID, //@ BASED ON WHICH FIELD, YOU WANT TO MATCH UPDATED DATA'S!
  updateURL, //@ YOUR UPDATED URL FOR CHANGING CREATED DATA!
  results,
  createURL,
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [updateButton, setUpdateButton] = useState(false);
  const [upRedirectID, setUpRedirectID] = useState("");
  const [loading, setLoading] = useState(false);

  const { status, data } = useSession();
  const businessId = data?.user?.bizid;
  const name = data?.user?.name;
  const email = data?.user?.email;

  const router = useRouter();

  const [selectedItems, setSelectedItems] = useState(new Map());
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "all") {
      setSelectAll(checked);
      const updatedSelectedItems = new Map();
      results.forEach((menu) => {
        updatedSelectedItems.set(menu.menuName, checked);
        menu.subMenus?.forEach((subMenu) => {
          updatedSelectedItems.set(subMenu.name, checked);
        });
      });
      setSelectedItems(updatedSelectedItems);
    } else {
      const updatedSelectedItems = new Map(selectedItems);

      if (results.some((menu) => menu.menuName === name)) {
        results
          .filter((menu) => menu.menuName === name)
          .forEach((menu) => {
            menu.subMenus?.forEach((subMenu) => {
              updatedSelectedItems.set(subMenu.name, checked);
            });
          });
        updatedSelectedItems.set(name, checked);

        setSelectedItems(updatedSelectedItems);
      } else {
        updatedSelectedItems.set(name, checked);

        const menuContainingSubMenu = results.find((menu) =>
          menu.subMenus?.some((subMenu) => subMenu.name === name)
        );

        const menuChecked = menuContainingSubMenu.subMenus?.some((subMenu) =>
          updatedSelectedItems.get(subMenu.name)
        );
        updatedSelectedItems.set(menuContainingSubMenu.menuName, menuChecked);

        setSelectedItems(updatedSelectedItems);
      }
    }
  };

  const transformSelectedItems = () => {
    const transformedData = [];
    selectedItems.forEach((value, key) => {
      if (value) {
        const menu = results.find((menu) => menu.menuName === key);
        if (menu) {
          const subMenuArray = menu.subMenus
            ?.filter((subMenu) => selectedItems.get(subMenu.name))
            .map((subMenu) => ({
              subMenuName: subMenu.name,
            }));

          transformedData.push({
            menu: key,
            subMenu: subMenuArray,
          });
        }
      }
    });
    return transformedData;
  };

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
      email,
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
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
        customRevidateTag("role");
        toast.success("Created!!");
        router.refresh("/dashboard");
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
    router.refresh();
    const clearedFormData = { ...initialValues };
    fields.forEach((field) => {
      const inputElement = document.getElementById(field.name);
      if (inputElement) {
        inputElement.value =
          field.type !== "number" ? clearedFormData[field.name] : "";
      }
    });
    setFormData(clearedFormData);
  };

  const handleButtonUpdateClear = () => {
    setLoading(true);
    router.refresh();

    if (router.asPath) {
      router.push(router.asPath);
    } else {
      window.location.href = router.asPath || createURL;
    }

    toast.success("Form has been cleared!!");
    setLoading(false);
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
              value={formData[field.name]}
              onChange={handleChange}
            />
            <label
              className="absolute -top-2 left-0 bg-transparent text-lg text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
              htmlFor={field.name}
            >
              {field.placeholder}
            </label>
          </div>
          //
        ))}
      </form>
      {results ? (
        <>
          <DropDownSub
            checkboxData={results}
            handleCheckboxChange={handleCheckboxChange}
            transformSelectedItems={transformSelectedItems}
            selectAll={selectAll}
            selectedItems={selectedItems}
          />
        </>
      ) : (
        <>
          <p>no data found</p>
        </>
      )}

      <div className="flex flex-row gap-4 mt-5">
        {updateButton === true ? (
          <>
            <button
              onClick={handleButtonUpdateClear}
              className="border-2 bg-blue border-blue rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
            >
              {loading ? "Clearing..." : "Clear"}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleButtonClick}
              className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            <button
              onClick={handleButtonClear}
              className="border-2 bg-blue border-blue rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
            >
              Clear
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateFormForRole;
