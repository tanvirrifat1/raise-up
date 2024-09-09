// import Link from "next/link";
// import { getAllCategoryInformation } from "@/app/api/frontend/category/getAllCategory";
// import CreateItemForm from "@/components/form/create-items/CreateItemForm";
// import { getServerSession } from "next-auth/next";
// import { options } from "@/app/api/auth/[...nextauth]/options";

// const ItemsPage = async ({ params }) => {
//   const [data, setData] = useState([]);
//   const EditMode = params.id === "new" ? false : true;

//   let updateItem = {};

//   if (EditMode) {
//     updateItem = await getSingleItemInformation(params.id);
//     updateItem = updateItem?.result;
//   } else {
//     updateItem = {
//       xitemid: "new",
//     };
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await getServerSession();
//       setData(result?.result);
//     };

//     fetchData();
//   }, []);

//   const session = await (options);

//   const { result: categories } = await getAllCategoryInformation();

//   const subCategory = await getAllSubCategoryInformation();

//   const unitOfMessure = await getCodeUmo();

//   const currencies = await getCurrency();

//   const stocks = await getStock();

//   return (
//     <div className="disable-selection my-10 flex flex-col bg-white p-10 rounded-md">
//       <div className="flex flex-col sm:flex-row justify-between items-center">
//         {EditMode ? (
//           <h3 className="text-left text-primary text-3xl font-semibold my-10">
//             {" "}
//             Edit Item
//           </h3>
//         ) : (
//           <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
//             Create A Item
//           </h3>
//         )}
//         <Link href="/dashboard/set-items/information">
//           <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
//             Go To Items
//           </button>
//         </Link>
//       </div>
//       <hr className="my-10 border border-gray" />
//       <CreateItemForm
//         categories={categories}
//         user={session?.user}
//         subCategories={subCategory?.result}
//         unitOfMessure={unitOfMessure}
//         item={updateItem}
//         currencies={currencies}
//         stocks={stocks}
//       />
//     </div>
//   );
// };

// export default ItemsPage;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAllCategoryInformation } from "@/app/api/frontend/category/getAllCategory";
import CreateItemForm from "@/components/form/create-items/CreateItemForm";
import { getAllSubCategoryInformation } from "@/app/api/frontend/sub-category/getAllSubCategory";
import { getCodeUom } from "@/app/api/frontend/uom/getCodeUom";
import { getSingleItemInformation } from "@/app/api/frontend/items/getSingleItem";
import { getStock } from "@/app/api/frontend/stock/getStocks";
import { getCurrency } from "@/app/api/frontend/currency/getCurrency";
import { useSession } from "next-auth/react";

const ItemsPage = ({ params }) => {
  const EditMode = params.id === "new" ? false : true;
  const { data } = useSession();
  const [categories, setcategories] = useState([]);
  const [subcategories, setsubcategories] = useState({});
  const [unitOfMessure, setunitOfMessure] = useState([]);
  const [currencies, setcurrencies] = useState([]);
  const [stocks, setstocks] = useState([]);
  const [singleItem, setsingleitem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSingleItemInformation(params.id);
      setsingleitem(result);
    };
    fetchData();
  }, [params.id]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllCategoryInformation();
      setcategories(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllSubCategoryInformation();
      setsubcategories(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCodeUom();
      setunitOfMessure(result?.result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCurrency();
      setcurrencies(result?.result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getStock();
      setstocks(result?.result);
    };
    fetchData();
  }, []);

  return (
    <div className="disable-selection my-10 flex flex-col bg-white p-10 rounded-md">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {EditMode ? (
          <h3 className="text-left text-primary text-3xl font-semibold my-10">
            {" "}
            Edit Item
          </h3>
        ) : (
          <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
            Create A Item
          </h3>
        )}
        <Link href="/dashboard/set-items/information">
          <button className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md ">
            Go To Items
          </button>
        </Link>
      </div>
      <hr className="my-10 border border-gray" />
      <CreateItemForm
        categories={categories?.result}
        user={data?.user}
        subCategories={subcategories?.result}
        unitOfMessure={unitOfMessure}
        item={singleItem}
        currencies={currencies}
        stocks={stocks}
      />
    </div>
  );
};

export default ItemsPage;
