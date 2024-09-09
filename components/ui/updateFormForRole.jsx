"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UpdatedFormDropDown from "./updatedFormDropDown";
import DropDownSub from "./dropdownSub";
import { customRevidateTag } from "../../utils/revalidateTag";

const UpdateFormForRole = ({
  fields, //@ ALL THE FIELDS YOU WANT TO SHOW IN THE FORM!
  initialValues, //@ INITIAL VALUES FOR ALL INPUT!
  apiEndpoint, //@ UPDATE METHOD API URL!
  placeholder, //@ FROM ( FIND UNIQUE ) DATA OBJECTS!
  id, //@ BASED ON WHICH ID, YOU WANT TO MATCH UPDATED DATA'S!
  createLink, //@ THAT METHOD CREATED URL IN FRONTEND!
  dropDownMenu,
  categoryName,
  subCategoryName,
  result,
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [selectedCatValue, setSelectedCatValue] = useState();
  const [selectedSubCatValue, setSelectedSubCatValue] = useState();

  const { status, data } = useSession();
  const businessId = data?.user?.bizid;
  const name = data?.user?.name;

  const [selectedItems, setSelectedItems] = useState(new Map());
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (selectedItems && result) {
      const menuNames = result.map((menu) => menu.menuName);
      const subMenuNames = result
        .flatMap((menu) => menu?.subMenus?.map((subMenu) => subMenu.name))
        .filter(Boolean);

      let allSelected = true;

      for (const menu of menuNames) {
        if (!selectedItems.get(menu)) {
          allSelected = false;
          break;
        }
      }

      if (allSelected) {
        for (const subMenu of subMenuNames) {
          if (!selectedItems.get(subMenu)) {
            allSelected = false;
            break;
          }
        }
      }

      if (selectAll !== allSelected) {
        setSelectAll(allSelected);
      }
    }
  }, [selectedItems, result, selectAll]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "all") {
      setSelectAll(checked);
      const updatedSelectedItems = new Map();
      result.forEach((menu) => {
        updatedSelectedItems.set(menu.menuName, checked);
        menu.subMenus?.forEach((subMenu) => {
          updatedSelectedItems.set(subMenu.name, checked);
        });
      });
      setSelectedItems(updatedSelectedItems);
    } else {
      const updatedSelectedItems = new Map(selectedItems);

      if (result.some((menu) => menu.menuName === name)) {
        result
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

        const menuContainingSubMenu = result.find((menu) =>
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

  const transformBackendData = (placeholder) => {
    const transformedItems = new Map();

    placeholder?.forEach((item) => {
      if (item.subMenu) {
        transformedItems.set(item.menu, true);
        item.subMenu.forEach((subMenuItem) => {
          transformedItems.set(subMenuItem.subMenuName, true);
        });
      } else {
        transformedItems.set(item.menu, true);
      }
    });

    return transformedItems;
  };

  useEffect(() => {
    const backendData = JSON.parse(placeholder.xroledt);
    const selectedItemsFromBackend = transformBackendData(backendData);
    setSelectedItems(selectedItemsFromBackend);
  }, [placeholder.xroledt]);

  const transformSelectedItems = () => {
    const transformedData = [];
    selectedItems.forEach((value, key) => {
      if (value) {
        const menu = result.find((menu) => menu.menuName === key);
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
    setLoading(true);
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

    const roleData = {
      ...datas,
      xroledt: transformSelectedItems(),
      businessId,
      name,
    };

    const dropDownUpData = {
      ...datas,
      xcat: selectedCatValue,
      xcatsl: selectedSubCatValue,
      xroledt: transformSelectedItems(),
      businessId,
      name,
    };

    try {
      let requestBody;

      if (dropDownMenu) {
        requestBody = dropDownUpData;
      } else if (result) {
        requestBody = roleData;
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
        customRevidateTag("single-role");
        toast.success("Updated!!");
        router.refresh();
        // setFormData(initialValues);
        setUpdateButton(true);
        setUpRedirectID(res?.result?.[updateID]);
      }
    } catch (error) {
      console.error("Error posting data:", error.message);
    } finally {
      setLoading(true);
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

      {result ? (
        <>
          <DropDownSub
            checkboxData={result}
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

export default UpdateFormForRole;
