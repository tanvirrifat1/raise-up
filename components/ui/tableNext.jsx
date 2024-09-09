"use client";

import Link from "next/link";
import { MdClose, MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../../components/ui/modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { customRevidateTag } from "@/utils/revalidateTag";
import { AiOutlineCheck } from "react-icons/ai";

const TableNext = ({
  table_title,
  tableName,
  tablesData,
  tableRow,
  actionButton,
  linkURL,
  createLink,
  deleteURL,
  redirectInfo,
}) => {
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const handleDelete = (itemId) => {
    router.refresh();
    setDeleteItemId(itemId);
    setOpenModal(true);
  };

  const handleDeleteConfirmation = async () => {
    try {
      const response = await fetch(`${deleteURL}/${deleteItemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setDeleteItemId(null);
        setOpenModal(false);
        router.refresh();
        customRevidateTag("uom");
      } else {
        const errorMessage = await response.text();
        console.error("Error deleting item:", errorMessage);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    setDeleteItemId(null);
    setOpenModal(false);
  };

  return (
    <div className="rounded-2xl">
      <div className="overflow-x-auto w-full rounded-xl bg-white shadow-xl pt-5 pr-5">
        <div className="w-full mx-auto flex justify-between items-center pl-6 md:pl-16">
          <h1 className="text-[#2B3674] font-extrabold text-2xl">
            {table_title}
          </h1>

          <div className="">
            <Link
              href={`${createLink}`}
              className="bg-blue-500 hover:bg-blue-700 text-white bg-lime hover:text-lime hover:bg-gray rounded-md font-bold py-2 px-4 duration-300"
            >
              Create New
            </Link>
          </div>
        </div>
        {tablesData?.length === 0 ? (
          <>
            <div class="grid h-screen place-content-center bg-white px-4">
              <h1 class="uppercase text-2xl font-semibold text-red ">
                No Data Found
              </h1>
            </div>
          </>
        ) : (
          <>
            <table className="min-w-[90%] mx-auto my-6">
              <thead className="">
                <tr className="font-lg text-[16px] leading-[24px] uppercase text-brightBlue">
                  {tableName.map((row) => (
                    <th
                      key={row.tableName}
                      className="py-3 px-6 text-left w-[39px]"
                    >
                      {row.tableName}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {tablesData?.map((item) => (
                  <tr
                    key={item?.redirectInfo}
                    className="hover:bg-gray-50 transition duration-300"
                  >
                    {tableRow?.map((row) => (
                      <td
                        key={row.tableName}
                        className="py-4 px-6 text-base text-secondary mx-auto"
                      >
                        {row?.tableName === "Action" ? (
                          <div className="flex rounded-md gap-2">
                            <Link href={`${linkURL}/${item[redirectInfo]}`}>
                              <button className="bg-primary hover:bg-gray hover:text-primary text-white rounded-full p-2 duration-300">
                                <MdEdit className="text-2xl" />
                              </button>
                            </Link>
                            {/*  */}
                            <button
                              onClick={() => handleDelete(item[redirectInfo])}
                              class="bg-red hover:bg-gray hover:text-red text-white rounded-full p-2 duration-300"
                            >
                              <MdDeleteOutline className="text-2xl" />
                            </button>
                          </div>
                        ) : row?.tableName === "zactive" ? (
                          <span
                            className={`${
                              item?.zactive === 1
                                ? "text-lightBlue"
                                : " text-red"
                            }`}
                          >
                            {item?.zactive === 1 ? (
                              <AiOutlineCheck className="text-lg" />
                            ) : (
                              <MdClose className="text-lg" />
                            )}
                          </span>
                        ) : (
                          item[row?.tableName]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      {deleteItemId && (
        <Modal
          handleDeleteConfirmation={handleDeleteConfirmation}
          title="Confirm Delete"
          onClose={() => setOpenModal(false)}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default TableNext;
