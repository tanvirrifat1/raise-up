import Link from "next/link";
import { getAllCategoryInformation } from "../../../../api/frontend/category/getAllCategory";
import CreateItemForm from "../../../../../components/form/create-items/CreateItemForm";
import { getServerSession } from "next-auth/next";
import { options } from "../../../../api/auth/[...nextauth]/options";
import { getAllSubCategoryInformation } from "../../../../api/frontend/sub-category/getAllSubCategory";
import { getCodeUom } from "@/app/api/frontend/uom/getCodeUom";

const SetItemsPage = async () => {
  const session = await getServerSession(options);

  const { result: categories } = await getAllCategoryInformation();

  const subCategory = await getAllSubCategoryInformation();

  const unitOfMessure = await getCodeUom();

  return (
    <div className="disable-selection my-10 flex flex-col bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
          Create A Item
        </h3>

        <Link href="/dashboard/set-items/information">
          <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
            Go To Items
          </button>
        </Link>
      </div>
      <hr className="my-10 border border-gray" />
      <CreateItemForm
        categories={categories}
        user={session?.user}
        subCategories={subCategory?.result}
        unitOfMessure={unitOfMessure}
      />
    </div>
  );
};

export default SetItemsPage;
