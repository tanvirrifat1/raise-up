"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";

const CategoryPage = ({ params }) => {
  const { data: session } = useSession();
  const businessId = session?.user?.bizid;
  const name = session?.user?.name;
  const [formData, setFormData] = useState({
    xcat: "",
  });
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    if (params?.id) {
      setIsEdit(true);
      setCategoryId(params.id);
      fetchCategoryInfo(params.id);
    }
  }, [params?.id]);

  const fetchCategoryInfo = async (categoryId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/backend/category/${categoryId}`
      );
      const data = await response.json();
      setFormData({ xcat: data?.result?.xcat || "" });
    } catch (error) {
      console.error("Error fetching category information:", error);
    }
  };

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
      const url = isEdit
        ? `${process.env.NEXT_PUBLIC_URL}/api/backend/category/${categoryId}`
        : `${process.env.NEXT_PUBLIC_URL}/api/backend/category`;

      const method = isEdit ? "PATCH" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          businessId: businessId,
          name: name,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`${response.status}, Something went wrong!!`);
      }

      if (!isEdit) {
        toast.success("A new category was created successfully!");
      } else {
        toast.success("The category has been updated successfully!");
      }

      if (!isEdit) {
        setCategoryId(responseData?.result?.xcatsl);
        setIsEdit(true);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create/update category. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClear = () => {
    setFormData({ xcat: "" });
    setIsEdit(false);
    setCategoryId(null);
    toast.success("Form has been cleared!!");
  };

  return (
    <div className="disable-selection my-10 flex flex-col bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          {isEdit ? "Update A Category" : "Create A New Category"}
        </h3>

        <Link href="/dashboard/category">
          <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
            Go To Category Info
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full"
              id="xcat"
              name="xcat"
              type="text"
              value={formData.xcat}
              onChange={handleChange}
              placeholder="Category"
              required
            />
            <label
              className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
              htmlFor="xcat"
            >
              Category
            </label>
          </div>
          <div className="flex flex-row gap-4 mt-5">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryPage;
