"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import CreatedFormDropDown from "./createdFormDropDown";
import { getAllUserInformation } from "../../app/api/frontend/user/getAllUserInformation";
import SingleDropDown from "./singleDropDown";
// import { customRevidateTag } from "@/utils/revalidateTag";

const CreateForm = ({
  fields, //@ ALL THE FIELDS YOU WANT TO SHOW IN THE FORM!
  initialValues, //@ INITIAL VALUES FOR ALL INPUT!
  apiEndpoint, //@ POST METHOD API URL!
  updateID, //@ BASED ON WHICH FIELD, YOU WANT TO MATCH UPDATED DATA'S!
  updateURL, //@ YOUR UPDATED URL FOR CHANGING CREATED DATA!
  createURL,
  dropDownMenu,
  redirectURL,
  singleDropDown,
  dropName,
  enterDropTile,
  validatedTag,
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [updateButton, setUpdateButton] = useState(false);
  const [upRedirectID, setUpRedirectID] = useState("");
  const [loading, setLoading] = useState(false);

  const [selectedCatValue, setSelectedCatValue] = useState();
  const [selectedSubCatValue, setSelectedSubCatValue] = useState();
  const [singleDropValue, setSingleDropValue] = useState();

  const { status, data } = useSession();
  const businessId = data?.user?.bizid;
  const name = data?.user?.name;

  const router = useRouter();

  useEffect(() => {
    router.refresh(getAllUserInformation(businessId));
  }, [businessId, router]);

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
          name: "Rafi",
        };
      }

      const response = await fetch(apiEndpoint, {
        method: "POST",
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
        // customRevidateTag(validatedTag);
        toast.success("Created!!");
        setUpdateButton(true);
        setUpRedirectID(res?.result?.[updateID]);
        router.refresh();

        if (redirectURL) {
          router.push(redirectURL);
        }
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
    setLoading(true);
    const clearedFormData = { ...initialValues };

    {
      dropDownMenu && setSelectedCatValue("");
      setSelectedSubCatValue("");
    }

    fields.forEach((field) => {
      const inputElement = document.getElementById(field.name);
      if (inputElement) {
        inputElement.value =
          field.type !== "number" ? clearedFormData[field.name] : "";
      }
    });

    setSelectedSubCatValue("");
    setSelectedCatValue("");
    setSingleDropValue("");

    setFormData(clearedFormData);
    toast.success("Form has been cleared!!");
    setLoading(false);
  };

  const handleButtonUpdateClear = () => {
    router.refresh();

    if (router.asPath) {
      router.push(router.asPath);
    } else {
      window.location.href = router.asPath || createURL;
    }

    toast.success("Form has been cleared!!");
  };

  return (
    <div>
      <div>
        {dropDownMenu && (
          <CreatedFormDropDown
            dropDownMenu={dropDownMenu}
            selectedCatValue={selectedCatValue}
            setSelectedCatValue={setSelectedCatValue}
            selectedSubCatValue={selectedSubCatValue}
            setSelectedSubCatValue={setSelectedSubCatValue}
          />
        )}
      </div>
      <div>
        {singleDropDown && (
          <SingleDropDown
            singleDropDown={singleDropDown}
            setSingleDropValue={setSingleDropValue}
            dropName={dropName}
            enterDropTile={enterDropTile}
          />
        )}
      </div>
      <form
        className="flex flex-col lg:grid lg:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        {fields.map((field) => (
          <>
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
          </>
        ))}
      </form>

      <div className="flex flex-row gap-4 mt-5">
        {updateButton === true ? (
          <>
            <Link href={`${updateURL}/${upRedirectID}`}>
              <button className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300">
                Update
              </button>
            </Link>

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
              type="button"
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

export default CreateForm;
