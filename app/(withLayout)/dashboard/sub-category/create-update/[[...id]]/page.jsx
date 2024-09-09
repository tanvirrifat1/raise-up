"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdKeyboardArrowDown } from "react-icons/md";

const SubCategoryPage = ({ params }) => {
  const router = useRouter();
  const { data } = useSession();
  const businessId = data?.user?.bizid;
  const name = data?.user?.name;
  const [formData, setFormData] = useState({
    xsubcat: "",
  });
  const [loading, setLoading] = useState(false);
  const [clearLoading, setClearLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [catId, setCatId] = useState(null);
  const [catName, setCatName] = useState("");

  useEffect(() => {
    const getSingleCategoryInformation = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/backend/category`
        );
        const data = await response.json();
        setAllCategories(data.result);
      } catch (error) {
        toast.error("Error fetching category information:", error.message);
      }
    };

    getSingleCategoryInformation();
  }, []);

  useEffect(() => {
    if (params?.id) {
      setIsEdit(true);
      setSubCategoryId(params.id);
      fetchSubCategoryInfo(params.id);
    }
  }, [params?.id]);

  const fetchSubCategoryInfo = async (subCategoryId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/backend/sub-category/${subCategoryId}`
      );
      const data = await response.json();
      setFormData({ xsubcat: data?.result?.xsubcat || "" });
    } catch (error) {
      console.error("Error fetching category information:", error);
    }
  };

  useEffect(() => {
    function findCategoryName(xcatsl, categories) {
      const category = categories.find((cat) => cat.xcatsl === xcatsl);
      return category ? category.xcat : "Searching categories...";
    }

    const categoryName = findCategoryName(
      singleSubCategory.xcatsl,
      allCategories
    );
    setCatName(categoryName);
  }, [allCategories]);

  useEffect(() => {
    if (params?.id) {
      const fetchSubCategoryData = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/backend/sub-category/${params?.id}`
          );
          const data = await response.json();
          setFormData({
            xsubcat: data?.result?.xsubcat || "",
          });
          setSelectedValue(data?.result?.categoryName);
          setCatId(data?.result?.xcatsl);
        } catch (error) {
          toast.error(
            "Error fetching sub category information:",
            error.message
          );
        }
      };

      fetchSubCategoryData();
    }
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
        xcatsl: Number(catId),
        businessId: businessId,
        name: name,
      };

      const method = isEdit ? "PATCH" : "POST";
      const url = isEdit
        ? `${process.env.NEXT_PUBLIC_URL}/api/backend/sub-category/${subCategoryId}`
        : `${process.env.NEXT_PUBLIC_URL}/api/backend/sub-category`;

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
      });

      const responseData = await response.json();

      if (response.ok === false) {
        toast.error(`${response.status}, Something went wrong!!`);
      }

      if (!isEdit) {
        toast.success("A new sub category was created successfully!");
      } else {
        toast.success("The sub category has been updated successfully!");
      }

      if (!isEdit) {
        setSubCategoryId(responseData?.result?.xsubcatsl);
        setIsEdit(true);
      }
    } catch (error) {
      toast.error("Failed to process sub category. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClear = async () => {
    setClearLoading(true);
    setFormData({ xsubcat: "" });
    setSelectedValue("");
    setCatName("");
    setCatId(null);
    toast.success("Form has been cleared!!");
    setClearLoading(false);
  };

  return (
    <div className="disable-selection my-10 flex flex-col bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          {isEdit
            ? "Update Sub Category"
            : "Create A New Sub Category"}
        </h3>

        <Link href="/dashboard/sub-category">
          <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
            Go To Sub Category Info
          </button>
        </Link>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 htmlFor="categoryDropdown" className="text-lg text-red">
                Category
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
                  {allCategories.map((category, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedValue(category.xcat);
                        setCatId(category.xcatsl);
                        setIsOpen(false);
                      }}
                      className="px-6 py-2 cursor-pointer hover:bg-gray hover:text-deepBlue duration-300"
                    >
                      <p>{category.xcat}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-5 text-deepBlue focus:outline-none w-full"
                id="xsubcat"
                name="xsubcat"
                type="text"
                value={formData.xsubcat}
                onChange={handleChange}
                placeholder="Sub category"
                required
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-red duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-1 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor="xsubcat"
              >
                Sub category
              </label>
            </div>
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

export default SubCategoryPage;
