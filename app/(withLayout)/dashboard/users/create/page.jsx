"use client";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdKeyboardArrowDown } from "react-icons/md";
import { customRevidateTag } from "../../../../../utils/revalidateTag";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import "react-quill/dist/quill.snow.css";

const Page = () => {
  const { data } = useSession();
  const businessId = data?.user?.bizid;
  const name = data?.user?.name;
  const [formData, setFormData] = useState({
    xfullname: "",
    xuseremail: "",
    xpassword: "",
    xusermobile: "",
    xaddress1: "",
    zactive: "",
  });
  const [loading, setLoading] = useState(false);
  const [clearLoading, setClearLoading] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isInactive, setIsInactive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [allRoles, setAllRoles] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [editorValue, seteditorValue] = useState("");
  const [text, setText] = useState("");

  const handleHtmlChange = (html) => {
    setText(html);
  };

  useEffect(() => {
    const getAllRolesInfo = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/backend/role`
        );
        const data = await response.json();
        setAllRoles(data.result);
      } catch (error) {
        console.error("Error fetching category information:", error.message);
      }
    };

    getAllRolesInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitFormData();
  };

  const submitFormData = async () => {
    setLoading(true);

    try {
      const datas = {
        ...formData,
        businessId: businessId,
        name: name,

        zactive: isActive ? 1 : 0,
        xrole: selectedValue,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/backend/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datas),
        }
      );

      const res = await response.json();

      setUpdateId(res?.result?.xcatsl);

      if (res.error) {
        toast.error(res.error);
      } else if (response.ok === false) {
        toast.error(`${response.status}, Something went wrong!!`);
      }

      if (response.ok === true) {
        customRevidateTag("users");
        toast.success("A new user was created successfully!");
        setUpdateStatus(true);
      }
    } catch (error) {
      console.error("Error posting data:", error.message);
      toast.error("Failed to create user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = async () => {
    await submitFormData();
  };

  const handleButtonClear = async () => {
    setClearLoading(true);
    setFormData({
      xfullname: "",
      xuseremail: "",
      xpassword: "",
      xusermobile: "",
      xaddress1: "",
      zactive: "",
    });
    setUpdateStatus(false);
    setSelectedValue("");
    setUpdateId(null);
    toast.success("Form has been cleared!!");
    setClearLoading(false);
  };

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

  return (
    <div className="disable-selection my-10 flex flex-col bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          Create A New User
        </h3>
        <Link href="/dashboard/users">
          <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
            Go To Users Info
          </button>
        </Link>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
                id="xfullname"
                name="xfullname"
                type="text"
                value={formData.xfullname}
                onChange={handleChange}
                placeholder="Full name"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="Full name"
              >
                Full name
              </label>
            </div>
            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
                id="xuseremail"
                name="xuseremail"
                type="email"
                value={formData.xuseremail}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="Email"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
                id="xpassword"
                name="xpassword"
                type="password"
                value={formData.xpassword}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="Password"
              >
                Password
              </label>
            </div>

            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-[10px] mt-[12px]  text-deepBlue focus:outline-none w-full"
                id="xusermobile"
                name="xusermobile"
                type="number"
                value={formData.xusermobile}
                onChange={handleChange}
                placeholder="Mobile number"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="Mobile number"
              >
                Mobile number
              </label>
            </div>

            <div className="w-full block">
              <label className="text-red">Address</label>
              <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                onChange={handleHtmlChange}
              />
            </div>

            <div>
              <h3 htmlFor="categoryDropdown" className="text-lg text-red">
                Role
              </h3>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between border-deepBlue bg-white py-2 border-b"
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                <h1 className="font-medium text-deepBlue">
                  {selectedValue ? selectedValue : "Choose"}
                </h1>
                <MdKeyboardArrowDown />
              </div>

              {isOpen && (
                <div
                  className="absolute w-72 mt-2 rounded-xl py-4 border shadow-lg bg-white "
                  style={{ zIndex: 1 }}
                >
                  {allRoles.map((role, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedValue(role.xrole);
                        setIsOpen(false);
                      }}
                      className="px-6 py-2 cursor-pointer hover:bg-gray hover:text-deepBlue duration-300"
                    >
                      <p>{role.xrole}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

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

          <div className="flex flex-row gap-4 mt-5">
            {updateStatus ? (
              <>
                <Link href={`/dashboard/users/edit-information/${updateId}`}>
                  <button className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300">
                    Update
                  </button>
                </Link>
                <button
                  onClick={handleButtonClear}
                  disabled={clearLoading === true}
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
                  disabled={loading === true}
                  className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
                >
                  {loading ? "Creating..." : "Create"}
                </button>
                <button
                  onClick={handleButtonClear}
                  disabled={clearLoading === true}
                  className="border-2 bg-blue border-blue rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
                >
                  Clear
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
