"use client";

import { customRevidateTag } from "@/utils/revalidateTag";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateItemForm = ({
  categories,
  user,
  subCategories,
  item,
  unitOfMessure,
  currencies,
  stocks,
}) => {
  const EditMode = item?.xitemid === "new" ? false : true;

  console.log(item);

  const { data } = useSession();

  const [category, setcategory] = useState(1);
  const [subcategory, setsubcategory] = useState(1);
  const [editorValue, seteditorValue] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [onetimeUpdate, setonetimeUpdate] = useState("");
  const [isData, setisdata] = useState({});

  const router = useRouter();

  let [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (EditMode) {
        const response = await fetch(`/api/backend/items/${item?.xitemid}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            businessId: data?.user?.bizid,
            name: data?.user?.name,
            xlongdesc: editorValue,
            zemail: data?.user?.email,
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          setLoading(false);
          setErrors(result?.error);
        }

        if (response?.ok) {
          setLoading(false);
          toast.success("item update successfull");
        }
      } else {
        const modifyData = {
          ...formData,
          businessId: user?.bizid,
          name: user?.name,
          xcatsl: category,
          xsubcatsl: subcategory,
          xlongdesc: editorValue,
          zemail: data?.user?.email,
        };

        if (modifyData) {
          setLoading(true);

          const response = await fetch(`/api/backend/items`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              businessId: user?.bizid,
              name: user?.name,
              xcatsl: category,
              xsubcatsl: subcategory,
              xlongdesc: editorValue,
              zemail: data?.user?.email,
            }),
          });

          const result = await response.json();

          if (!response.ok) {
            setLoading(false);

            setErrors(result?.error);

            toast.error(result.error);
          }

          setLoading(false);

          customRevidateTag("categoryInfo");

          toast.success("item create successfull");
          setonetimeUpdate(result?.result?.xitemid);
        } else if (isData?.xitemid) {
          setLoading(true);

          const response = await fetch(`/api/backend/items/${onetimeUpdate}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              businessId: user?.bizid,
              name: user?.name,
              xcatsl: category,
              xsubcatsl: subcategory,
              xlongdesc: editorValue,
              zemail: data?.user?.email,
            }),
          });

          const result = await response.json();

          if (!response.ok) {
            setLoading(false);
            setErrors(result?.error);
          }

          if (response?.ok) {
            setLoading(false);
            toast.success("item update successfull");
          }
        }
      }
    } catch (error) {
      setErrors(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    async function getItem() {
      await fetch(`/api/backend/items/${onetimeUpdate}`)
        .then((res) => res.json())
        .then((data) => setisdata(data?.result))
        .catch((err) => console.error(err));
    }
    getItem();
  }, [onetimeUpdate]);

  const cleareButton = () => {
    setFormData(scafolding);

    router.refresh();

    toast.success("Form clear successfull");
  };

  function updateClearBtn() {
    setisdata(scafolding);
    setFormData(scafolding);
    toast.success("Form clear successfull");
    router.push("/dashboard/set-items/item/new");
  }

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
  // const EditMode = item?.xitemid === "new" ? false : true;

  // const { data } = useSession();

  // const [category, setcategory] = useState(1);
  // const [subcategory, setsubcategory] = useState(1);
  // const [editorValue, seteditorValue] = useState("");
  // const [errors, setErrors] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [onetimeUpdate, setonetimeUpdate] = useState("");
  // const [isData, setisdata] = useState({});

  // const router = useRouter();

  // let [formData, setFormData] = useState({
  //   xdesc: "",
  //   xlongdesc: "",
  //   xunitpur: "",
  //   xunitsale: "",
  //   xtypestk: "",
  //   xcur: "",
  //   xpricepur: "",
  //   xstdcost: 0,
  //   xmrp: 0,
  //   xstdprice: 0,
  //   xdisc: 0,
  //   xvatpct: 0,
  //   zactive: 1,
  // });

  // if (EditMode) {
  //   formData["xdesc"] = item?.xdesc;
  //   formData["xlongdesc"] = item?.xlongdesc;
  //   formData["xunitpur"] = item?.xunitpur;
  //   formData["xunitsale"] = item?.xunitsale;
  //   formData["xtypestk"] = item?.xtypestk;
  //   formData["xcur"] = item?.xcur;
  //   formData["xpricepur"] = item?.xpricepur;
  //   formData["xstdcost"] = item?.xstdcost;
  //   formData["xmrp"] = item?.xmrp;
  //   formData["xstdprice"] = item?.xstdprice;
  //   formData["xdisc"] = item?.xdisc;
  //   formData["xvatpct"] = item?.xvatpct;
  //   formData["zactive"] = item?.zactive;
  // } else if (isData?.xitemid) {
  //   formData["xdesc"] = isData?.xdesc;
  //   formData["xlongdesc"] = isData?.xlongdesc;
  //   formData["xunitpur"] = isData?.xunitpur;
  //   formData["xunitsale"] = isData?.xunitsale;
  //   formData["xtypestk"] = isData?.xtypestk;
  //   formData["xcur"] = isData?.xcur;
  //   formData["xpricepur"] = isData?.xpricepur;
  //   formData["xstdcost"] = isData?.xstdcost;
  //   formData["xmrp"] = isData?.xmrp;
  //   formData["xstdprice"] = isData?.xstdprice;
  //   formData["xdisc"] = isData?.xdisc;
  //   formData["xvatpct"] = isData?.xvatpct;
  //   formData["zactive"] = isData?.zactive;
  // }

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     if (EditMode) {
  //       const response = await fetch(`/api/backend/items/${item?.xitemid}`, {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           ...formData,
  //           businessId: data?.user?.bizid,
  //           name: data?.user?.name,
  //           xlongdesc: editorValue,
  //           zemail: data?.user?.email,
  //         }),
  //       });

  //       const result = await response.json();

  //       if (!response.ok) {
  //         setLoading(false);
  //         setErrors(result?.error);
  //       }

  //       if (response?.ok) {
  //         setLoading(false);
  //         toast.success("item update successfull");
  //       }
  //     } else {
  //       const modifyData = {
  //         ...formData,
  //         businessId: user?.bizid,
  //         name: user?.name,
  //         xcatsl: category,
  //         xsubcatsl: subcategory,
  //         xlongdesc: editorValue,
  //         zemail: data?.user?.email,
  //       };

  //       if (modifyData) {
  //         setLoading(true);

  //         const response = await fetch(`/api/backend/items`, {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             ...formData,
  //             businessId: user?.bizid,
  //             name: user?.name,
  //             xcatsl: category,
  //             xsubcatsl: subcategory,
  //             xlongdesc: editorValue,
  //             zemail: data?.user?.email,
  //           }),
  //         });

  //         const result = await response.json();

  //         if (!response.ok) {
  //           setLoading(false);

  //           setErrors(result?.error);

  //           toast.error(result.error);
  //         }

  //         setLoading(false);

  //         customRevidateTag("categoryInfo");

  //         toast.success("item create successfull");
  //         setonetimeUpdate(result?.result?.xitemid);
  //       } else if (isData?.xitemid) {
  //         setLoading(true);

  //         const response = await fetch(`/api/backend/items/${onetimeUpdate}`, {
  //           method: "PATCH",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             ...formData,
  //             businessId: user?.bizid,
  //             name: user?.name,
  //             xcatsl: category,
  //             xsubcatsl: subcategory,
  //             xlongdesc: editorValue,
  //             zemail: data?.user?.email,
  //           }),
  //         });

  //         const result = await response.json();

  //         if (!response.ok) {
  //           setLoading(false);
  //           setErrors(result?.error);
  //         }

  //         if (response?.ok) {
  //           setLoading(false);
  //           toast.success("item update successfull");
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     setErrors(error.message);
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   async function getItem() {
  //     await fetch(`/api/backend/items/${onetimeUpdate}`)
  //       .then((res) => res.json())
  //       .then((data) => setisdata(data?.result))
  //       .catch((err) => console.log(err));
  //   }
  //   getItem();
  // }, [onetimeUpdate]);

  // const cleareButton = () => {
  //   setFormData(scafolding);

  //   router.refresh();

  //   toast.success("Form clear successfull");
  // };

  // function updateClearBtn() {
  //   setisdata(scafolding);
  //   setFormData(scafolding);
  //   toast.success("Form clear successfull");
  //   router.push("/dashboard/set-items/item/new");
  // }

  // const modules = {
  //   toolbar: [
  //     [{ header: [1, 2, 3, 4, 5, 6] }],
  //     ["bold", "italic", "underline", "strike", "blockquote"],
  //     [
  //       { list: "ordered" },
  //       { list: "bullet" },
  //       { indent: "-1" },
  //       { indent: "+1" },
  //     ],
  //     ["link", "image", "video", "code-block"],
  //     ["clean"],
  //   ],
  // };

  // const formats = [
  //   "header",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "indent",
  //   "link",
  //   "image",
  // ];

  return (
    <>
      <form className="flex flex-col gap-5">
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
              {categories?.map((category) => (
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
              {subCategories
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
            name={"xdesc"}
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
          value={EditMode ? formData?.xlongdesc : editorValue}
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
              {currencies?.map((xcode) => (
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
              name={"xpricepur"}
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
              name={"xstdcost"}
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
              name={"xmrp"}
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
              name={"xdisc"}
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
              name={"xvatpct"}
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
              name={"xstdprice"}
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
                  onChange={handleChange}
                  name="zactive"
                  value={1}
                />
                <span className="ml-2">Active</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  name="zactive"
                  value={0}
                />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
            {/* <select
              className="border-b border-gray w-full"
              onChange={handleChange}
              name="zactive"
              value={formData.zactive}
            >
              <option value={1}>Active</option>
              <option value={0}>In Active</option>
            </select> */}
          </div>
        </div>

        <div className="flex items-start gap-5">
          {EditMode ? (
            <>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-fit border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
              >
                {loading ? "loading.." : "Update"}
              </button>

              <button
                type="button"
                className="w-fit border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
                onClick={updateClearBtn}
              >
                Clear
              </button>
            </>
          ) : isData?.xitemid ? (
            <>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-fit border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
              >
                {loading ? "loading.." : "Update"}
              </button>

              <button
                type="button"
                className="w-fit border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
                onClick={updateClearBtn}
              >
                Clear
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-fit border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
              >
                {loading ? "loading.." : "Create"}
              </button>

              <button
                type="button"
                className="w-fit border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
                onClick={cleareButton}
              >
                Clear
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default CreateItemForm;
