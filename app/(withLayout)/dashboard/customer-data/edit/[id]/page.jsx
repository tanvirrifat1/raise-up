"use client";

import { useSession, getSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const { data } = useSession();
  const businessId = data?.user?.bizid;
  const name = data?.user?.email;

  const router = useRouter();

  const [formData, setFormData] = useState({
    xcus: "",
    xaddress1: "",
    xaddress2: "",
    xmobile: "",
    zemail: "",
    xcity: "",
    xnid: "",
    xcountry: "",
    xstate: "",
    zactive: "",
  });
  const [loading, setLoading] = useState(false);
  const [clearLoading, setClearLoading] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isInactive, setIsInactive] = useState(false);
  const [loadingSession, setLoadingSession] = useState(true);

  useEffect(() => {
    const getSessionData = async () => {
      const session = await getSession();
      if (session) {
        setLoadingSession(false);
      }
    };
    getSessionData();
  }, []);

  useEffect(() => {
    const getSingleCustomerInformation = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/backend/customer/${params?.id}`
        );
        const data = await response.json();
        console.log(data);

        if (data) {
          // Check if data is available
          if (data?.zactive === 1) {
            setIsActive(true);
            setIsInactive(false);
          } else if (data?.zactive === 0) {
            setIsActive(false);
            setIsInactive(true);
          } else {
            setIsActive(false);
            setIsInactive(false);
          }
          setFormData({
            xcus: data.xcus || "",
            xaddress1: data.xaddress1 || "",
            xaddress2: data.xaddress2 || "",
            xmobile: data.xmobile || "",
            zemail: data.zemail || "",
            xcity: data.xcity || "",
            xnid: data.xnid || "",
            xcountry: data.xcountry || "",
            xstate: data.xstate || "",
            zactive: data.zactive || "",
          });
        }
      } catch (error) {
        console.error("Error fetching customer information:", error.message);
      }
    };

    getSingleCustomerInformation();
  }, [params?.id]);

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
        zactive: isActive ? 1 : isInactive ? 0 : undefined,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/backend/customer/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datas),
        }
      );

      const res = await response.json();
      if (response.ok === true) {
        toast.success("A customer was updated successfully!");
        router.refresh();
      }

      if (res.error) {
        toast.error(res.error);
      } else if (response.ok === false) {
        toast.error(`${response.status}`);
      }
    } catch (error) {
      toast.error("Failed to customer. Please try again.");
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
      xaddress2: "",
      xmobile: "",
      zemail: "",
      xcity: "",
      xstate: "",
      xcountry: "",
      xnid: "",
      zactive: "",
    });
    toast.success("Form has been cleared!!");
    setClearLoading(false);
  };

  if (loadingSession) {
    return <p className="text-center mt-56">Loading...</p>;
  }

  return (
    <div className="disable-selection my-10 flex flex-col bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          Update A Customer
        </h3>
        <Link href="/dashboard/customer-data">
          <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
            Go To Customer Info
          </button>
        </Link>
      </div>
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
                placeholder="Username"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="Username"
              >
                Username
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
                placeholder="Mobile Number"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="Mobile Number"
              >
                Mobile Number
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
                id="xaddress1"
                name="xaddress1"
                type="text"
                value={formData.xaddress1}
                onChange={handleChange}
                placeholder="Present Address"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg  duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="Present Address"
              >
                Present Address
              </label>
            </div>
            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
                id="xaddress2"
                name="xaddress2"
                type="text"
                value={formData.xaddress2}
                onChange={handleChange}
                placeholder="Permanent Address"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg  duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="Permanent Address"
              >
                Permanent Address
              </label>
            </div>
            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
                id="xcity"
                name="xcity"
                type="text"
                value={formData.xcity}
                onChange={handleChange}
                placeholder="City"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg  duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="City"
              >
                City
              </label>
            </div>
            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
                id="xcountry"
                name="xcountry"
                type="text"
                value={formData.xcountry}
                onChange={handleChange}
                placeholder="Country"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg  duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="Country"
              >
                Country
              </label>
            </div>
            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
                id="xnid"
                name="xnid"
                type="text"
                value={formData.xnid}
                onChange={handleChange}
                placeholder="Nid"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg  duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="Nid"
              >
                Nid
              </label>
            </div>
            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
                id="xstate"
                name="xstate"
                type="text"
                value={formData.xstate}
                onChange={handleChange}
                placeholder="State"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg  duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="State"
              >
                State
              </label>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-3 lg:self-center mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => {
                    setIsActive(true);
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
                    setIsInactive(true);
                    setIsActive(false);
                  }}
                />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
          </div>

          <div className="flex flex-row gap-4 mt-5">
            <button
              type="button"
              onClick={handleButtonClick}
              disabled={loading === true}
              className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
            >
              {loading ? "Updating..." : "Update"}
            </button>
            <button
              onClick={handleButtonClear}
              disabled={clearLoading === true}
              className="border-2 bg-blue border-blue rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
