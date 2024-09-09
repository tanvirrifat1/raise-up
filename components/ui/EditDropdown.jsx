"use client";
import React, { useEffect, useState } from "react";

const EditDropdown = ({
  checkboxData,
  selectAll,
  selectedItems,
  handleCheckboxChange,
  placeholder,
  transformSelectedItems,
}) => {
  const [categories, setCategory] = useState("");
  const [subcategories, setSubcategories] = useState("");

  const [selectedItemsData, setSelectedItems] = useState({});

  useEffect(() => {
    const parsedCheckboxData =
      typeof placeholder?.xroledt === "string"
        ? JSON.parse(placeholder.xroledt)
        : placeholder;

    if (parsedCheckboxData) {
      const extractedCategories = parsedCheckboxData.map((cat) => cat.category);
      setCategory(extractedCategories);

      const extractedSubcategories = parsedCheckboxData.map((cat) =>
        cat.subCategory.map((subCat) => subCat.subcategoryName)
      );
      setSubcategories(extractedSubcategories);

      // Flatten subcategories array to a single array
      const allSubcategories = extractedSubcategories.flat();

      // Initialize selectedItems state based on categories and subcategories
      const initialSelectedItems = extractedCategories.reduce((acc, cat) => {
        acc[cat] = true; // Assuming all categories should be selected initially
        return acc;
      }, {});

      // Update initialSelectedItems with subcategories
      allSubcategories.forEach((subCat) => {
        initialSelectedItems[subCat] = true;
      });

      // Directly use initialSelectedItems without assigning forEach result to data

      setSelectedItems(initialSelectedItems);
    }
  }, [placeholder]);

  return (
    <div className="font-sans text-secondary">
      <label className="m-2 border-b">Role-Access</label>
      <div className="mb-2">
        <input
          type="checkbox"
          name="all"
          onChange={handleCheckboxChange}
          checked={selectAll}
          className="mr-2 accent-red"
        />
        <label htmlFor="all">All</label>
      </div>
      <label className="m-2 border-b">Category</label>

      {checkboxData?.map((category) => (
        <div key={category.xcat} className="mt-2">
          <input
            type="checkbox"
            name={category.xcat}
            onChange={(e) => handleCheckboxChange(e, category.xcat)}
            checked={selectedItemsData[category.xcat] || false}
            // checked={category.xcat || false}
            className="mr-2 text-primary accent-limeBlue"
          />

          <label htmlFor={category.xcat}>{category.xcat}</label>

          <div className="ml-5">
            {category.subcategory.map((subcategory) => (
              <div key={subcategory.xsubcat}>
                <input
                  type="checkbox"
                  id={subcategory.xsubcat}
                  name={subcategory.xsubcat}
                  onChange={(e) => handleCheckboxChange(e, subcategory.xsubcat)}
                  // checked={subcategory.xsubcat || false}
                  checked={selectedItems[subcategory.xsubcat] || false}
                  className="mr-2 text-primary accent-brightGray"
                />
                <label htmlFor={subcategory.xsubcat}>
                  {subcategory.xsubcat}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditDropdown;
