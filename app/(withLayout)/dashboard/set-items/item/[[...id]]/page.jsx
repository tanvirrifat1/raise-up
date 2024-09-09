"use client";

import React from "react";
import { getAllCategoryInformation } from "@/app/api/frontend/category/getAllCategory";
import { getAllSubCategoryInformation } from "@/app/api/frontend/sub-category/getAllSubCategory";
import { getCodeUom } from "@/app/api/frontend/uom/getCodeUom";
import { getStock } from "@/app/api/frontend/stock/getStocks";
import { getCurrency } from "@/app/api/frontend/currency/getCurrency";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";

const ItemsPage = ({ params }) => {
  const { data } = useSession();
  const [categories, setcategories] = React.useState([]);
  const [subcategories, setsubcategories] = React.useState({});
  const [unitOfMessure, setunitOfMessure] = React.useState([]);
  const [currencies, setcurrencies] = React.useState([]);
  const [stocks, setstocks] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [isSetId, setisSetId] = React.useState(null);
  const [category, setcategory] = React.useState(1);
  const [subcategory, setsubcategory] = React.useState(1);
  const [editorValue, seteditorValue] = React.useState("");
  const [formData, setFormData] = React.useState({
    xdesc: "",
    xlongdesc: "",
    xunitpur: "",
    xunitsale: "",
    xtypestk: "",
    xcur: "",
    xpricepur: "",
    xstdcost: 0,
    xmrp: 0,
    xstdprice: 0,
    xdisc: 0,
    xvatpct: 0,
    zactive: 1,
  });

  React.useEffect(() => {
    if (params?.id) {
      setIsEdit(true);
      setisSetId(params?.id);
      fetchItem(params?.id);
    }
  }, [params?.id]);

  const fetchItem = async (isId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/backend/items/${isId}`
      );
      const data = await response.json();
      setFormData({
        xdesc: data?.result?.xdesc || "",
        xlongdesc: data?.result?.xlongdesc || "",
        xunitpur: data?.result?.xunitpur || "",
        xunitsale: data?.result?.xunitsale || "",
        xtypestk: data?.result?.xtypestk || "",
        xcur: data?.result?.xcur || "",
        xpricepur: data?.result?.xpricepur || "",
        xstdcost: data?.result?.xstdcost || 0,
        xmrp: data?.result?.xmrp || 0,
        xstdprice: data?.result?.xstdprice || 0,
        xdisc: data?.result?.xdisc || 0,
        xvatpct: data?.result?.xvatpct || 0,
        zactive: data?.result?.zactive || 1,
      });
    } catch (error) {
      console.error("Error fetching item information:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitFormData = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEdit
        ? `${process.env.NEXT_PUBLIC_URL}/api/backend/items/${isSetId}`
        : `${process.env.NEXT_PUBLIC_URL}/api/backend/items`;

      const method = isEdit ? "PATCH" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          businessId: data?.user?.bizid,
          name: data?.user?.name,
          zemail: data?.user?.email,
          xcatsl: category,
          xsubcatsl: subcategory,
          xlongdesc: editorValue,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`${response.status}, Something went wrong!!`);
      }

      if (!isEdit) {
        toast.success("A new item was created successfully!");
      } else {
        toast.success("The item has been updated successfully!");
      }

      if (!isEdit) {
        setisSetId(responseData?.result?.xitemid);
        setIsEdit(true);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create/update item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getAllCategoryInformation();
      setcategories(result);
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getAllSubCategoryInformation();
      setsubcategories(result);
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getCodeUom();
      setunitOfMessure(result?.result);
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getCurrency();
      setcurrencies(result);
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getStock();

      setstocks(result?.result);
    };
    fetchData();
  }, []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video", "code-block"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleButtonClear = () => {
    setFormData({
      xdesc: "",
      xlongdesc: "",
      xunitpur: "",
      xunitsale: "",
      xtypestk: "",
      xcur: "",
      xpricepur: "",
      xstdcost: 0,
      xmrp: 0,
      xstdprice: 0,
      xdisc: 0,
      xvatpct: 0,
      zactive: 1,
    });
    seteditorValue("");
    setIsEdit(false);
    setisSetId(null);
    toast.success("Form has been cleared!!");
  };
  return (
    <div className="disable-selection my-10 flex flex-col bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          {isEdit ? "Update A Item" : "Create A New Item"}
        </h3>

        <Link href="/dashboard/set-items/information">
          <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
            Go To Item Info
          </button>
        </Link>
      </div>
      <form className="flex flex-col gap-5" onSubmit={submitFormData}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="" className="text-red">
              Select Category
            </label>
            <select
              className="border-b py-2 w-full border-gray"
              onChange={(e) => setcategory(e.target.value)}
              value={category}
            >
              <option value="" disabled className="text-sm">
                Choose
              </option>
              {categories?.result?.map((category) => (
                <option value={category?.xcatsl} key={category?.xcatsl}>
                  {category?.xcat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="" className="text-red">
              Select SubCategory
            </label>
            <select
              onChange={(e) => setsubcategory(e.target.value)}
              className="border-b py-2 w-full border-gray"
              value={subcategory}
            >
              <option value="" disabled className="text-sm">
                Choose
              </option>
              {subcategories?.result
                ?.filter((item, _i) => item?.xcatsl == category)
                .map((itm, i) => (
                  <option key={i} value={itm?.xsubcatsl}>
                    {itm?.xsubcat}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="relative">
          <textarea
            className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
            id={formData.xdesc}
            name="xdesc"
            type="text"
            value={formData.xdesc}
            onChange={handleChange}
            required={true}
          />
          <label
            className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
            htmlFor={""}
          >
            Description
          </label>
        </div>
        <label htmlFor="" className="text-red">
          Long Description
        </label>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={editorValue || formData.xlongdesc}
          onChange={seteditorValue}
          className="py-2 w-full h-[300px]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="relative">
            <label className="text-red" htmlFor={""}>
              Unit for purchase
            </label>
            <select
              required={true}
              className="border-b py-2 w-full border-gray"
              onChange={handleChange}
              name="xunitpur"
              value={formData.xunitpur}
            >
              <option value="" disabled className="text-sm">
                Choose
              </option>
              {unitOfMessure?.map((xcode) => (
                <option value={xcode?.xcode} key={xcode?.xcode}>
                  {xcode?.xcode}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <label className="text-red" htmlFor={""}>
              Unit for sale
            </label>
            <select
              required={true}
              className="border-b py-2 w-full border-gray"
              onChange={handleChange}
              name="xunitsale"
              value={formData.xunitsale}
            >
              <option value="" disabled className="text-red">
                Choose
              </option>
              {unitOfMessure?.map((xcode) => (
                <option value={xcode?.xcode} key={xcode?.xcode}>
                  {xcode?.xcode}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <label className="text-red" htmlFor={""}>
              Type for stock
            </label>
            <select
              required={true}
              className="border-b py-2 w-full border-gray"
              onChange={handleChange}
              name="xtypestk"
              value={formData.xtypestk}
            >
              <option value="" disabled className="text-red">
                Choose
              </option>
              {stocks?.map((xcode) => (
                <option value={xcode?.xtypestk} key={xcode?.xtypestk}>
                  {xcode?.xcode}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <label className="text-red" htmlFor={""}>
              Type of Currency
            </label>
            <select
              required={true}
              className="border-b py-2 w-full border-gray"
              onChange={handleChange}
              name="xcur"
              value={formData.xcur}
            >
              <option value="" disabled className="text-red">
                Choose
              </option>
              {currencies?.result?.map((xcode) => (
                <option value={xcode?.xcur} key={xcode?.xcur}>
                  {xcode?.xcode}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <input
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
              id={formData.xpricepur}
              name="xpricepur"
              type="number"
              value={formData.xpricepur}
              onChange={handleChange}
              required={true}
            />
            <label
              className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
              htmlFor={""}
            >
              Purchase price
            </label>
          </div>

          <div className="relative">
            <input
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
              id={formData.xstdcost}
              name="xstdcost"
              type="number"
              value={formData.xstdcost}
              onChange={handleChange}
              required={true}
            />
            <label
              className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
              htmlFor={""}
            >
              Standard cost
            </label>
          </div>

          <div className="relative">
            <input
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
              id={formData.xmrp}
              name="xmrp"
              type="number"
              value={formData.xmrp}
              onChange={handleChange}
              required={true}
            />
            <label
              className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
              htmlFor={""}
            >
              MRP
            </label>
          </div>

          <div className="relative">
            <input
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
              id={formData.xdisc}
              name="xdisc"
              type="number"
              defaultValue={formData.xdisc}
              onChange={handleChange}
              required={true}
            />
            <label
              className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
              htmlFor={""}
            >
              Discount
            </label>
          </div>

          <div className="relative">
            <input
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
              id={formData.xvatpct}
              name="xvatpct"
              type="number"
              value={formData.xvatpct}
              onChange={handleChange}
              required={true}
            />
            <label
              className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
              htmlFor={""}
            >
              Standard price
            </label>
          </div>
          <div className="relative">
            <input
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
              id={formData.xstdprice}
              name="xstdprice"
              type="number"
              value={formData.xstdprice}
              onChange={handleChange}
              required={true}
            />
            <label
              className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
              htmlFor={""}
            >
              VAT percentage
            </label>
          </div>

          <div className="relative">
            <label htmlFor="" className="">
              Select active status
            </label>

            <div className="flex flex-col lg:flex-row lg:gap-3 lg:self-center mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  // checked={isActive}
                  onChange={handleChange}
                  name="zactive"
                  value={1 || formData.zactive}
                />
                <span className="ml-2">Active</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  // checked={isInactive}
                  onChange={handleChange}
                  name="zactive"
                  value={0 || formData.zactive}
                />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
        >
          {loading
            ? isEdit
              ? "Updating..."
              : "Creating..."
            : isEdit
            ? "Update"
            : "Create"}
        </button>
        <button
          type="button"
          onClick={handleButtonClear}
          className="border-2 bg-blue border-blue rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default ItemsPage;
