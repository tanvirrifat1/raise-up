"use client";

import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { customRevidateTag } from "../../utils/revalidateTag";
import { useState, useEffect } from "react";
import Modal from "./modal";
import { useRouter } from "next/navigation";

const TableView = ({
  table_title,
  tableName,
  tablesData,
  tableRow,
  actionButton,
  linkURL,
  createLink,
  deleteURL,
  redirectInfo,
  validatedTag,
}) => {
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (tablesData) {
      setIsLoading(false);
    }
  }, [tablesData]);

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
        customRevidateTag(validatedTag);
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
      {isLoading ? (
        <div className="flex items-center justify-center h-80">
          <p className="text-lg text-gray-500">Loading...</p>
        </div>
      ) : (
        <div className="overflow-x-auto w-full rounded-xl bg-white shadow-xl pt-5 pr-5">
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
              <div className="w-full mx-auto flex justify-between items-center pl-6 md:pl-16">
                <h1 className="text-[#2B3674] font-extrabold text-2xl">
                  {table_title}
                </h1>
                {table_title === "SalesMaster" ? (
                  <></>
                ) : (
                  <>
                    <div className="">
                      <Link
                        href={`${createLink}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white bg-lime hover:text-lime hover:bg-gray rounded-md font-bold py-2 px-4 duration-300"
                      >
                        Create New
                      </Link>
                    </div>
                  </>
                )}
              </div>
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
                  {tablesData?.result?.map((item) => (
                    <tr
                      key={item.redirectInfo}
                      className="hover:bg-gray-50 transition duration-300"
                    >
                      {tableRow.map((row) => (
                        <td key={row.tableName} className="py-4 px-6">
                          {actionButton && row.tableName === "View" ? (
                            <div class="flex rounded-md gap-2">
                              <Link href={`${linkURL}/${item[redirectInfo]}`}>
                                <button class="bg-primary hover:bg-gray hover:text-primary text-white rounded-full p-2 duration-300">
                                  <FaRegEye className="text-2xl" />
                                </button>
                              </Link>
                            </div>
                          ) : (
                            item[row.tableName]
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
      )}
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

export default TableView;
