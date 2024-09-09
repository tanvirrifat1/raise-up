"use client";

import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { getSingleCategoryInformation } from "../../app/api/frontend/category/getSingleCategory";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UpdatedFormDropDown = ({
  dropDownMenu,
  selectedCatValue,
  setSelectedCatValue,
  selectedSubCatValue,
  setSelectedSubCatValue,
  categoryName,
  subCategoryName,
}) => {
  const [isCatOpen, setCatIsOpen] = useState(false);
  const [isSubCatOpen, setSubCatIsOpen] = useState(false);
  const [subCat, setSubCat] = useState();

  const router = useRouter();

  const handleCategorySelect = async (category) => {
    setSelectedCatValue(category?.xcat);
    setCatIsOpen(false);

    const { result } = await getSingleCategoryInformation(category?.xcatsl);

    router.refresh();
    setSubCat(result.subcategory);
    setSelectedSubCatValue("");
  };

  const handleSubCategorySelect = (subcategory) => {
    setSelectedSubCatValue(subcategory);
    setSubCatIsOpen(false);
  };

  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-4">
      <div className="mb-10">
        <h3 htmlFor="categoryDropdown" className="text-lg text-deepBlue mb-3">
          Category
        </h3>
        <div
          onClick={() => setCatIsOpen(!isCatOpen)}
          className="flex items-center justify-between border-deepBlue bg-white py-2 border-b"
          aria-haspopup="true"
          aria-expanded={isCatOpen}
        >
          <h1 className="font-medium text-deepBlue">
            {selectedCatValue ? selectedCatValue : categoryName}
          </h1>
          <MdKeyboardArrowDown />
        </div>

        {isCatOpen && (
          <div
            className="absolute w-72 mt-2 rounded-xl py-4 border shadow-lg bg-white "
            style={{ zIndex: 1 }}
          >
            {dropDownMenu?.map((category) => (
              <div
                key={category.xcatsl}
                onClick={() => handleCategorySelect(category)}
                className="px-6 py-2 cursor-pointer hover:bg-gray hover:text-deepBlue duration-300"
              >
                <p>{category.xcat}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-10">
        <h3
          htmlFor="subCategoryDropdown"
          className="text-lg text-deepBlue mb-3"
        >
          Sub Category
        </h3>
        <div
          //   onClick={() => {
          //     setSubCatIsOpen(!isSubCatOpen);
          //   }}

          onClick={() => {
            if (subCat) {
              setSubCatIsOpen(!isSubCatOpen);
            } else {
              toast.error("Choose Category First!!");
            }
          }}
          className="flex items-center justify-between border-deepBlue bg- py-2 border-b"
          aria-haspopup="true"
          aria-expanded={isSubCatOpen}
        >
          <h1 className="font-medium text-gray-600">
            {subCategoryName
              ? selectedCatValue
                ? selectedSubCatValue
                : subCategoryName
              : null}
          </h1>
          <MdKeyboardArrowDown />
        </div>

        {isSubCatOpen && (
          <div
            className="absolute w-72 mt-2 rounded-xl py-4 border shadow-lg bg-white "
            style={{ zIndex: 1 }}
          >
            {subCat.map((subCategory) => (
              <div
                key={subCategory.xsubcatsl}
                onClick={() => handleSubCategorySelect(subCategory.xsubcat)}
                className="px-6 py-2 cursor-pointer hover:bg-gray hover:text-deepBlue duration-300"
              >
                <p>{subCategory.xsubcat}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdatedFormDropDown;
