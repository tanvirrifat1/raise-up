import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const UpdateDropDown = ({
  singleDropDown,
  setSingleDropValue,
  dropName,
  enterDropTile,
  fetchedDropData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  setSingleDropValue(selectedValue);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="mb-10">
        <h3 htmlFor="categoryDropdown" className="text-lg text-deepBlue mb-3">
          {enterDropTile}
        </h3>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between border-deepBlue bg-white py-2 border-b"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <h1 className="font-medium text-deepBlue">
            {selectedValue ? selectedValue : fetchedDropData}
          </h1>
          <MdKeyboardArrowDown />
        </div>

        {isOpen && (
          <div
            className="absolute w-72 mt-2 rounded-xl py-4 border shadow-lg bg-white "
            style={{ zIndex: 1 }}
          >
            {singleDropDown.map((option, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedValue(option[dropName]);
                  setIsOpen(false);
                }}
                className="px-6 py-2 cursor-pointer hover:bg-gray hover:text-deepBlue duration-300"
              >
                <p>{option[dropName]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateDropDown;
