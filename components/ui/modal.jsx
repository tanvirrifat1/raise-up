export default function Modal({
  title,
  onClose,
  handleDeleteConfirmation,
  openModal,
  setOpenModal,
}) {
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-sm bg-sky-500 px-5 py-[6px] text-white"
        id="_modal_NavigateUI"
      >
        Modal
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center bg-lightBlue ${
          openModal ? "visible opacity-100" : "invisible opacity-0"
        } inset-0 bg-transparent backdrop-blur-sm duration-100 `}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`text- absolute max-w-md rounded-lg bg-primary p-6 drop-shadow-lg dark:bg-black dark:text-white ${
            openModal
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
          }`}
        >
          <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
          <p className="mb-5 text-sm opacity-80">
            Are you sure you want to delete this item?
          </p>
          <div className="flex justify-between">
            <button
              onClick={() => handleDeleteConfirmation()}
              className="me-2 rounded-sm bg-green-700 px-6 py-[6px] text-white"
            >
              Yes
            </button>
            <button
              onClick={() => onClose(false)}
              className="rounded-sm border border-red-600 px-6 py-[6px] text-red-600 duration-150 hover:bg-red hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
