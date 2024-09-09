import { FaCopy } from "react-icons/fa";
import { MdOutlineBarChart } from "react-icons/md";

const SuperAdminCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        <div className="flex py-5 px-2 sm:px-5 bg-white rounded-2xl">
          <div className="flex items-center p-5 bg-bluish rounded-full">
            <FaCopy className="text-primary text-xl" />
          </div>
          <div className="flex flex-col ml-3">
            <p className="text-sm font-medium text-deepGray">Total value</p>
            <h4 className="text-2xl font-bold text-brightBlue">BDT 1500</h4>
          </div>
        </div>

        <div className="flex py-5 px-2 sm:px-5 bg-white rounded-2xl">
          <div className="flex items-center p-5 bg-bluish rounded-full">
            <MdOutlineBarChart className="text-primary text-xl" />
          </div>
          <div className="flex flex-col ml-3">
            <p className="text-sm font-medium text-deepGray">Discount</p>
            <h4 className="text-2xl font-bold text-brightBlue">300</h4>
          </div>
        </div>

        <div className="flex py-5 px-2 sm:px-5 bg-white rounded-2xl">
          <div className="flex flex-col ml-3">
            <p className="text-sm font-medium text-deepGray">Net Sale</p>
            <h4 className="text-2xl font-bold text-brightBlue">BDT 1200</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminCard;
