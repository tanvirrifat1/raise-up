"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";
import Modal from "./modal";
import { customRevidateTag } from "../../utils/revalidateTag";

const SalesTabel = ({ result, redirectInfo }) => {
  const router = useRouter();
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleDeleteConfirmation = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/salesdet/${deleteItemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setDeleteItemId(null);
        setOpenModal(false);
        router.refresh();
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

  const handleDelete = (itemId) => {
    router.refresh();
    setDeleteItemId(itemId);
    setOpenModal(true);
  };

  return (
    <div className="overflow-x-auto lg:overflow-x-visible ">
      <table className="min-w-[90%] mx-auto ">
        <div className="min-w-[90%] mx-auto lg:-mx-14">
          <div className="space-y-2 flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/2">
              <h1 className="flex">
                <strong className="w-[115px]">Order ID</strong>
                <span>: {result?.secus?.xcusid}</span>
              </h1>
              <h1 className="flex">
                <strong className="w-[115px]">Mobile</strong>
                <span>: {result?.secus?.xmobile} </span>
              </h1>
              <h1 className="flex">
                <strong className="w-[115px]">Name</strong>
                <span>: {result?.secus?.xcus}</span>
              </h1>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2">
              <h1 className="flex">
                <strong className="w-[115px]">Address</strong>
                <span>: {result?.secus?.xaddress1}</span>
              </h1>
              <h1 className="flex">
                <strong className="w-[115px]">Contact</strong>
                <span>: {result?.secus?.xcontact} </span>
              </h1>
            </div>
          </div>
        </div>
      </table>
      {/*  */}
      {/* <p className=" text-2xl font-semibold mt-4 -mb-3">Your orders</p> */}
      <table className="min-w-[100%] shadow-md  border mx-auto border-gray-100  my-6">
        <thead>
          <tr className="bg-primary text-white">
            <th className="py-3 px-6 text-left border-b">ID</th>
            {/* <th className="py-3 px-6 text-left border-b">secret-code</th> */}
            <th className="py-3 px-6 text-left border-b">Name</th>
            <th className="py-3 px-6 text-left border-b">Email</th>
            <th className="py-3 px-6 text-left border-b">Time</th>
            <th className="py-3 px-6  border-b text-end">Cost</th>
            <th className="py-3 px-6  border-b text-end">Rate</th>
            <th className="py-3 px-6  border-b text-end">Quantity</th>
            <th className="py-3 px-6  border-b text-end">Payment</th>
            <th className="py-3 px-6  border-b text-end">Status</th>
            <th className="py-3 px-6  border-b text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {result?.ecomsalesdet?.map((result, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition duration-300"
            >
              <td className="py-4 px-6 border-b">{result?.xecomdetsl}</td>

              <td className="py-4 px-6 border-b">{result?.xcus}</td>

              <td className="py-4 px-6 border-b">
                {result?.zemail.slice(0, 26)}
                {result?.zemail.length > 26 && " ...."}
              </td>

              <td className="py-4 px-6 border-b">
                {result?.xdate.slice(0, 10)}
              </td>
              <td className="py-4 px-6 border-b text-end">{result?.xcost}</td>
              <td className="py-4 px-6 border-b text-end">{result?.xrate}</td>
              <td className="py-4 px-6 border-b text-end">{result?.xqty}</td>

              <td className="py-4 px-6 border-b text-end">
                {result?.xpaymethod}
              </td>
              <td className="py-4 px-6 border-b text-end">{result?.xstatus}</td>
              <td className="py-4 px-6 border-b text-end">
                <div class="flex rounded-md gap-2">
                  <Link
                    href={`/dashboard/salesmst/updateMst/${result?.xecomdetsl}`}
                  >
                    <button class="bg-primary hover:bg-gray hover:text-primary text-white rounded-full p-2 duration-300">
                      <MdEdit className="text-2xl" />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(result[redirectInfo])}
                    class="bg-red hover:bg-gray hover:text-red h-10   text-white rounded-full p-2 duration-300"
                  >
                    <MdDeleteOutline className="text-2xl" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default SalesTabel;
