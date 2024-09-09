import React from "react";

const DropDownSub = ({
  checkboxData,
  selectAll,
  selectedItems,
  handleCheckboxChange,
}) => {
  return (
    <div className="text-lg text-deepBlue mt-2">
      <div className="mb-2">
        <label>Role Access</label>
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          name="all"
          onChange={handleCheckboxChange}
          checked={selectAll}
          className="mr-2 accent-deepBlue"
        />
        <label htmlFor="all">All</label>
      </div>
      {checkboxData?.map((menu) => (
        <div key={menu.id} className="mt-2">
          <input
            type="checkbox"
            name={menu.menuName}
            value={menu.menuName}
            onChange={handleCheckboxChange}
            checked={selectedItems.get(menu.menuName) || false}
            className="mr-2 text-primary accent-limeBlue"
          />
          <label htmlFor={menu.menuName}>{menu.menuName}</label>

          <div className="ml-5">
            {menu.subMenus?.map((subMenu) => (
              <div key={subMenu.id}>
                <input
                  type="checkbox"
                  id={subMenu.name}
                  name={subMenu.name}
                  onChange={handleCheckboxChange}
                  checked={selectedItems.get(subMenu.name) || false}
                  className="mr-2 text-primary accent-brightGray"
                />
                <label htmlFor={subMenu.name}>{subMenu.name}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDownSub;
