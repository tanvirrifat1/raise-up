"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { customRevidateTag } from "../../../../../../utils/revalidateTag";

const Page = ({ params }) => {
  const { data } = useSession();
  const router = useRouter();
  const businessId = data?.user?.bizid;
  const name = data?.user?.name;
  const [formData, setFormData] = useState({
    xcode: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isInactive, setIsInactive] = useState(false);
  const [updateSts, setUpdateStatus] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    const getSingleCategoryInformation = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/backend/codes/${params?.id}`
        );
        const data = await response.json();
        setResult(data?.result);
        setFormData({ xcode: data?.result?.xcode ? data.result.xcode : "" });

        if (data?.result?.zactive === 1) {
          setIsActive(true);
          setIsInactive(false);
        } else if (data?.result?.zactive === 0) {
          setIsActive(false);
          setIsInactive(true);
        } else {
          setIsActive(false);
          setIsInactive(false);
        }
      } catch (error) {
        console.error(
          "Error fetching Type of Stocks information:",
          error.message
        );
      }
    };

    getSingleCategoryInformation();
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
        `${process.env.NEXT_PUBLIC_URL}/api/backend/codes/${params?.id}`,
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
        setUpdateStatus(true);
        router.refresh();
        // customRevidateTag("singleCode");
        toast.success("The stock has been updated successfully!");
      }
      setUpdateId(res?.role.xcodeid);
      if (res.error) {
        toast.error(res.error);
      } else if (response.ok === false) {
        toast.error(`${response.status}`);
      }
    } catch (error) {
      toast.error("Failed to stocks. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClear = async () => {
    setLoading(true);
    setFormData({ xcode: "" });
    setUpdateStatus(false);
    setUpdateId(null);
    toast.success("Form has been cleared!!");
    setLoading(false);
  };

  return (
    <div className="disable-selection my-10 flex flex-col bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          Update A Type of stock
        </h3>

        <Link href="/dashboard/type-of-stock">
          <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
            Go To Type of stock
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
              id="xcode"
              name="xcode"
              type="text"
              value={formData.xcode}
              onChange={handleChange}
              placeholder="Type of Stocks"
              required
            />
            <label
              className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
              htmlFor="xcodetype"
            >
              Type of Stocks<span className="text-red"></span>
            </label>
          </div>
          <div className="flex flex-row gap-4 mt-5">
            {updateSts ? (
              <>
                <Link href={"/dashboard/type-of-stock/create"}>
                  <button className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300">
                    Create
                  </button>
                </Link>

                <button
                  onClick={handleButtonClear}
                  disabled={loading}
                  className="border-2 bg-blue border-blue rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
                >
                  {loading ? "Clearing..." : "Clear"}
                </button>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  disabled={loading === true}
                  className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
                >
                  {loading ? "updating..." : "update"}
                </button>
                <button
                  type="button"
                  onClick={handleButtonClear}
                  disabled={loading === true}
                  className="border-2 bg-blue border-blue rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
                >
                  Clear
                </button>
              </>
            )}
          </div>
        </form>
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
      </div>

      <div className="lg:w-1/2"></div>
    </div>
  );
};

export default Page;
