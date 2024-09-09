"use client";

import React, { useState } from "react";
import SendItem from "./SendItem";
import Link from "next/link";

const Items = ({ items }) => {
  const [data, setdata] = useState(items)
  const [errors, seterrors] = useState(null)

  const [selectedItems, setSelectedItems] = useState([]);

  function checkboxHandler(e) {
    let isSelected = e.target.checked;
    let value = parseInt(e.target.value);

    if (isSelected) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems((prevData) => {
        return prevData.filter((id) => {
          return id !== value;
        });
      });
    }
  }

  function checkAllHandler() {
    if (data.length === selectedItems.length) {
      setSelectedItems([]);
    } else {
      const postIds = data.map((item) => {
        return item.xitemid;
      });

      setSelectedItems(postIds);
    }
  }

  return (
    <>
      <div className="container">
        <div className="right">
          <div className="flex items-center gap-2 justify-between pt-4">
            <div className="flex items-center gap-2">
              <SendItem items={selectedItems} seterrors={seterrors} />
              <button
                type="button"
                className="bg-brightBlue py-1 text-sm text-white shadow hover:shadow-md px-4 rounded"
                onClick={checkAllHandler}
              >
                {data.length === selectedItems.length
                  ? "Uncheck All"
                  : "Check all"}
              </button>
            </div>

            <div className="">
              <Link
                className="bg-primary py-1 text-sm text-white shadow hover:shadow-md px-4 rounded"
                href={"/dashboard/set-items/information"}
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
        <div className="left">
          <h4 className="text-sm text-red mt-2">{errors && errors?.error}</h4>
          <h4>
            {errors &&
              errors?.faileditems?.map((item) => (
                <div key={item?.xitemcode}>{item?.xitemcode}</div>
              ))}
          </h4>
          <div className="overflow-x-auto ">
            <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-6 text-left border-b">#</th>
                  <th className="py-3 px-6 text-left border-b">Info</th>
                  <th className="py-3 px-6 text-left border-b">Code</th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item, index) => (
                  <tr
                    className="hover:bg-gray-50 transition duration-300"
                    key={index}
                  >
                    <td className="py-4 px-6 border-b">
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.xitemid)}
                          value={item.xitemid}
                          onChange={checkboxHandler}
                        />
                      </label>
                    </td>
                    <td className="py-4 px-6 border-b">{item.xdesc} </td>
                    <td className="py-4 px-6 border-b">{item.xitemcode} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );

};

export default Items;





