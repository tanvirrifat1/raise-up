"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../../ui/modal";

const CodeDelete = ({ id }) => {
  const router = useRouter();

  const [deleteItemId, setDeleteItemId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleDeleteConfirmation = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/codes/${deleteItemId}`,
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
    <div>
      <MdDeleteOutline
        onClick={() => handleDelete(id)}
        className="bg-[#FF204E] text-2xl p-1  mx-2 text-white rounded-full cursor-pointer"
      />
      {/*  */}
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

export default CodeDelete;
