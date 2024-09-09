"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const { data } = useSession();
  const businessId = data?.user?.bizid;
  const name = data?.user?.name;
  const router = useRouter();

  const [formData, setFormData] = useState({
    xcus: "",
    xaddress1: "",
    xmobile: "",
    zemail: "",
    xpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [clearLoading, setClearLoading] = useState(false);

  const [updateId, setUpdateId] = useState(null);

  const [isActive, setIsActive] = useState(true);
  const [isInactive, setIsInactive] = useState(false);

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
      };

      const response = await fetch(`/api/customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
      });

      const res = await response.json();
      setUpdateId(res?.result?.xcusid);

      if (res.error) {
        toast.error(res.error);
      } else if (response.ok === false) {
        toast.error(`${response.status}, Something went wrong!!`);
      }

      if (response.ok === true) {
        toast.success("A new customer was created successfully!");
        router.push("/login/customer-login");
      }
    } catch (error) {
      console.error("Error posting data:", error.message);
      toast.error("Failed to create customer. Please try again.");
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
      xcus: "",
      xaddress1: "",
      xmobile: "",
      zemail: "",
      xpassword: "",
    });

    setUpdateId(null);
    toast.success("Form has been cleared!!");
    setClearLoading(false);
  };

  return (
    <div className="disable-selection  w-full md:w-4/5 flex flex-col mx-auto bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          Customer Register
        </h3>
      </div>
      <hr className="my-10 border border-gray" />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
                id="xcus"
                name="xcus"
                type="text"
                value={formData.xcus}
                onChange={handleChange}
                placeholder="Enter Name"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="xcus"
              >
                Enter Name
              </label>
            </div>
            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
                id="xaddress1"
                name="xaddress1"
                type="text"
                value={formData.xaddress1}
                onChange={handleChange}
                placeholder="Enter Address"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="xaddress1"
              >
                Enter Address
              </label>
            </div>
            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
                id="xmobile"
                name="xmobile"
                type="number"
                value={formData.xmobile}
                onChange={handleChange}
                placeholder="Enter Mobile"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="xmobile"
              >
                Enter Mobile
              </label>
            </div>
            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
                id="zemail"
                name="zemail"
                type="email"
                value={formData.zemail}
                onChange={handleChange}
                placeholder="Enter Email"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="zemail"
              >
                Enter Email
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
                placeholder="Enter Password"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="xpassword"
              >
                Enter Password
              </label>
            </div>
          </div>
          {/*  */}
          <div>
            {/* <p className="border-b">Choose Status</p> */}
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
          {/*  */}
          <div className="flex flex-row gap-4 mt-5">
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
                clearLoading={true}
                className="border-2 bg-blue border-blue rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
              >
                Clear
              </button>
            </>
          </div>
          {/*  */}
        </form>
      </div>
    </div>
  );
};

export default Page;
