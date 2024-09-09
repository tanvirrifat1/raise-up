"use client";
import { useState } from "react";
import { IoMdCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { RiCheckboxBlankLine } from "react-icons/ri";

const CheckBoxClick = () => {
  const [select, setSelect] = useState(false);
  return (
    <div>
      {/* <MdCheckBoxOutlineBlank className="cursor-pointer" /> */}

      {select ? (
        <span
          onClick={() => setSelect(!select)}
          className="text-primary cursor-pointer "
        >
          <IoMdCheckbox></IoMdCheckbox>{" "}
        </span>
      ) : (
        <span onClick={() => setSelect(!select)} className="cursor-pointer">
          <RiCheckboxBlankLine></RiCheckboxBlankLine>
        </span>
      )}
    </div>
  );
};

export default CheckBoxClick;
