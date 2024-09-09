"use client";

import "./styles.css";
import Image from "next/image";
import raiseUp from "../../assets/home/logo.png";

const InvoicePage = () => {
  return (
    <div className="  printable-component max-w-full mx-auto mt-7 min-h-screen sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] p-4">
      {/* header part */}
      <div className="flex flex-col sm:flex-row justify-between ">
        <div>
          <div>
            <Image src={raiseUp} width={300} height={200} alt="" />
          </div>
        </div>

        <div className="sm:mb-0">
          <h5 className="lg:text-[17px] sm:text-sm">
            Invoice ID: <span className="font-semibold">#341012421</span>
          </h5>
          <h5 className="lg:text-[17px] sm:text-sm">
            <span>23 April 2024 08:25 PM</span>{" "}
            <span className="font-semibold">(Ripon Sarkar)</span>
          </h5>
        </div>
      </div>
      <h1 className="border-b mt-2"></h1>
      {/* order info */}
      <div className="my-7 grid lg:grid-cols-2 sm:grid-cols-2 justify-between">
        <div className="mb-4 sm:mr-4">
          <h1 className=" text-primary font-semibold uppercase border-b w-28">
            Order Info
          </h1>
          <p className="my-1 text-[14px]">
            <span className="font-semibold uppercase">Order ID: </span>
            <span>12435132</span>
          </p>
          <p className="my-1 text-[14px]">
            <span className="font-semibold uppercase"> Placed: </span>
            <span>24 April 2024, 12:55 PM</span>
          </p>
          <p className="my-1 text-[14px]">
            <span className="font-semibold uppercase"> Payment Method: </span>
            <span>COD partially Paid</span>
          </p>
          <p className="my-1 text-[14px]">
            <span className="font-semibold uppercase">Total Product: </span>
            <span>3 Items</span>
          </p>
          <p className="my-1 text-[14px]">
            <span className="font-semibold uppercase"> Note: </span>{" "}
            <span>Fs, Fs</span>
          </p>
        </div>
        {/*  */}
        <div className="ml-28">
          <h1 className="  text-primary font-semibold uppercase border-b w-44">
            Delivery Address
          </h1>
          <p className="my-1 text-[14px]">
            <span className="font-semibold uppercase"> Name: </span>{" "}
            <span>Asfak Ali</span>
          </p>
          <p className="my-1 text-[14px]">
            <span className="font-semibold uppercase"> Address: </span>
            <span>Gulsan1, Niketon, Road-2, Block-B, Dhaka, Bangladesh</span>
          </p>
          <p className="my-1 flex gap-1 text-[14px] uppercase">
            <span className="font-semibold">Phone: </span>{" "}
            <span>017000000</span>
          </p>
          <p className="my-1 flex gap-1 text-[14px] uppercase">
            <span className="font-semibold">Email: </span>
            <span>raiseup@gamil.com</span>
          </p>
        </div>
      </div>

      {/* order list part */}

      <div className="overflow-x-auto -mt-12">
        <table className="min-w-full md:min-w-[100%] shadow-md mx-auto my-6">
          <thead>
            <tr className="text-black font-semibold">
              <th className="py-1 -mt-10 text-left border-b">S1 Product</th>
              <th className="py-1 -mt-10 border-b  text-center">Quantity</th>
              <th className="py-1 -mt-10 border-b text-end">Unit Price</th>
              <th className="py-1 -mt-10 border-b text-end">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition duration-300">
              <td className="py-1 -mt-10 border-b  text-[14px]">
                Pencil a aka pori <p>(humayun ahmed)</p>{" "}
              </td>
              <td className="py-1 -mt-10 border-b text-center text-[14px]">
                2
              </td>
              <td className="py-1 -mt-10 border-b text-end text-[14px]">
                210 110 Tk
              </td>
              <td className="py-1 -mt-10 border-b text-end text-[14px]">
                110 Tk
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-300">
              <td className="py-1 -mt-10 border-b  text-[14px]">
                Deyal <p>(humayun ahmed)</p>
              </td>
              <td className="py-1 -mt-10 border-b text-center text-[14px]">
                2
              </td>
              <td className="py-1 -mt-10 border-b text-end text-[14px]">
                210 110 Tk
              </td>
              <td className="py-1 -mt-10 border-b text-end text-[14px]">
                110 Tk
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-300">
              <td className="py-1 -mt-10 border-b  text-[14px]">
                Himu <p>(humayun ahmed)</p>{" "}
              </td>
              <td className="py-1 -mt-10 border-b text-center text-[14px]">
                2
              </td>
              <td className="py-1 -mt-10 border-b text-end text-[14px]">
                210 110 Tk
              </td>
              <td className="py-1 -mt-10 border-b text-end text-[14px]">
                110 Tk
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-end -mt-5 md:justify-end">
          <div class="w-56">
            <div class="flex  justify-between border-b my-1 ">
              <span class="font-semibold my-1 text-[14px]">SubTotal: </span>
              <span class="md:text-right my-1 text-[14px]">550 Tk </span>
            </div>
            <div class="flex  justify-between border-b my-1 ">
              <span class="font-semibold my-1 text-[14px]">Shipping: </span>
              <span class="md:text-right my-1 text-[14px]">60 Tk </span>
            </div>
            <div class="flex  justify-between border-b my-1 ">
              <span class="font-semibold my-1 text-[14px]">Total: </span>
              <span class="md:text-right my-1 text-[14px]">610 Tk </span>
            </div>
            <div class="flex  justify-between border-b my-1 ">
              <span class="font-semibold my-1 text-[14px]">Cash Payment: </span>
              <span class="md:text-right my-1 text-[14px]">(610 Tk )</span>
            </div>
            <div class="flex  justify-between border-b my-1  ">
              <span class="font-semibold my-1 text-[14px]">
                Customer Payable:{" "}
              </span>
              <span class="md:text-right my-1 text-[14px]">56 Tk</span>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl my-4">Thank You!</h1>
      {/* footer part */}
      <div className=" grid lg:grid-cols-2 sm:grid-cols-2 justify-between">
        <div className="text-start">
          <h5 className="font-bold uppercase">payment information</h5>
          <p className="font-semibold text-[14px] uppercase">Islamic Bank</p>
          <p>
            <span className="font-semibold text-[14px] uppercase">
              Account name:{" "}
            </span>
            <span>tanvirrifat</span>
          </p>
          <p>
            <span className="font-semibold text-[14px] uppercase">
              Account No:{" "}
            </span>
            <span>12465406541</span>
          </p>
          <p>
            <span className="font-semibold text-[14px] uppercase">
              Pay By:{" "}
            </span>
            <span>24 april 2024</span>
          </p>
        </div>
        {/*  */}
        <div className="flex justify-end">
          <div className="ml-28 ">
            <h1 className="lg:text-3xl font-bold text-black sm:text-lg sm:text-black">
              RaiseUp Publications
            </h1>

            <p className="text-[14px]">
              <span className="font-semibold uppercase"> Address: </span>
              <span>Gulsan1, Niketon, Dhaka-1000</span>
            </p>
            <p className=" flex gap-1 text-[14px] uppercase">
              <span className="font-semibold">Email: </span>
              <span>raiseup@gamil.com</span>
            </p>
            <p className=" flex gap-1 text-[14px] uppercase">
              <span className="font-semibold">Phone: </span>
              <span>017000000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
///////////////////



// "use client";

// import "./styles.css";
// import Image from "next/image";
// import raiseUp from "../../assets/home/logo.png";

// const page = () => {
//   return (
//     <div className="  printable-component max-w-full mx-auto mt-7 min-h-screen sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] p-4">
//       {/* header part */}
//       <div className="flex flex-col sm:flex-row justify-between ">
//         <div>
//           <div>
//             <Image src={raiseUp} width={300} height={200} alt="" />
//           </div>
//         </div>

//         <div className="sm:mb-0">
//           <h5 className="lg:text-[17px] sm:text-sm">
//             Invoice ID: <span className="font-semibold">#341012421</span>
//           </h5>
//           <h5 className="lg:text-[17px] sm:text-sm">
//             <span>23 April 2024 08:25 PM</span>{" "}
//             <span className="font-semibold">(Ripon Sarkar)</span>
//           </h5>
//         </div>
//       </div>
//       <h1 className="border-b mt-2"></h1>
//       {/* order info */}
//       <div className="my-7 grid lg:grid-cols-2 sm:grid-cols-2 justify-between">
//         <div className="mb-4 sm:mr-4">
//           <h1 className="text-xl  text-primary font-semibold">Order Info:</h1>
//           <p className="my-1 text-[14px]">
//             <span className="font-semibold">Order ID: </span>
//             <span>12435132</span>
//           </p>
//           <p className="my-1 text-[14px]">
//             <span className="font-semibold"> Placed: </span>
//             <span>24 April 2024, 12:55 PM</span>
//           </p>
//           <p className="my-1 text-[14px]">
//             <span className="font-semibold"> Payment Method: </span>
//             <span>COD partially Paid</span>
//           </p>
//           <p className="my-1 text-[14px]">
//             <span className="font-semibold">Total Product: </span>
//             <span>3 Items</span>
//           </p>
//           <p className="my-1 text-[14px]">
//             <span className="font-semibold"> Note: </span> <span>Fs, Fs</span>
//           </p>
//         </div>
//         {/*  */}
//         <div className="ml-28">
//           <h1 className="text-xl  text-primary font-semibold">
//             Delivery Address:
//           </h1>
//           <p className="my-1 text-[14px]">
//             <span className="font-semibold"> Name: </span>{" "}
//             <span>Asfak Ali</span>
//           </p>
//           <p className="my-1 text-[14px]">
//             <span className="font-semibold"> Address: </span>
//             <span>Gulsan1, Niketon, Road-2, Block-B, Dhaka, Bangladesh</span>
//           </p>
//           <p className="my-1 flex gap-1 text-[14px]">
//             <span className="font-semibold">Phone: </span>{" "}
//             <span>017000000</span>
//           </p>
//           <p className="my-1 flex gap-1 text-[14px]">
//             <span className="font-semibold">Email: </span>
//             <span>raiseup@gamil.com</span>
//           </p>
//         </div>
//       </div>

//       {/* order list part */}

//       <div className="overflow-x-auto -mt-14">
//         <table className="min-w-full md:min-w-[100%] shadow-md mx-auto my-6">
//           <thead>
//             <tr className="text-black font-semibold">
//               <th className="py-2 -mt-10 text-left border-b">S1 Product</th>
//               <th className="py-2 -mt-10 border-b text-end">Quantity</th>
//               <th className="py-2 -mt-10 border-b text-end">Unit Price</th>
//               <th className="py-2 -mt-10 border-b text-end">Total Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="hover:bg-gray-50 transition duration-300">
//               <td className="py-2 -mt-10 border-b  text-[14px]">
//                 Pencil a aka pori <p>(humayun ahmed)</p>{" "}
//               </td>
//               <td className="py-2 -mt-10 border-b text-end text-[14px]">2</td>
//               <td className="py-2 -mt-10 border-b text-end text-[14px]">
//                 210 110 Tk
//               </td>
//               <td className="py-2 -mt-10 border-b text-end text-[14px]">
//                 110 Tk
//               </td>
//             </tr>
//             <tr className="hover:bg-gray-50 transition duration-300">
//               <td className="py-2 -mt-10 border-b  text-[14px]">
//                 Deyal <p>(humayun ahmed)</p>
//               </td>
//               <td className="py-2 -mt-10 border-b text-end text-[14px]">2</td>
//               <td className="py-2 -mt-10 border-b text-end text-[14px]">
//                 210 110 Tk
//               </td>
//               <td className="py-2 -mt-10 border-b text-end text-[14px]">
//                 110 Tk
//               </td>
//             </tr>
//             <tr className="hover:bg-gray-50 transition duration-300">
//               <td className="py-2 -mt-10 border-b  text-[14px]">
//                 Himu <p>(humayun ahmed)</p>{" "}
//               </td>
//               <td className="py-2 -mt-10 border-b text-end text-[14px]">2</td>
//               <td className="py-2 -mt-10 border-b text-end text-[14px]">
//                 210 110 Tk
//               </td>
//               <td className="py-2 -mt-10 border-b text-end text-[14px]">
//                 110 Tk
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <div class="flex justify-end -mt-5 md:justify-end">
//           <div class="w-56">
//             <div class="flex  justify-between border-b my-2 ">
//               <span class="font-semibold my-1 text-[14px]">SubTotal: </span>
//               <span class="md:text-right my-1 text-[14px]">550 Tk </span>
//             </div>
//             <div class="flex  justify-between border-b my-2 ">
//               <span class="font-semibold my-1 text-[14px]">Shipping: </span>
//               <span class="md:text-right my-1 text-[14px]">60 Tk </span>
//             </div>
//             <div class="flex  justify-between border-b my-2 ">
//               <span class="font-semibold my-1 text-[14px]">Total: </span>
//               <span class="md:text-right my-1 text-[14px]">610 Tk </span>
//             </div>
//             <div class="flex  justify-between border-b my-2 ">
//               <span class="font-semibold my-1 text-[14px]">Cash Payment: </span>
//               <span class="md:text-right my-1 text-[14px]">(610 Tk )</span>
//             </div>
//             <div class="flex  justify-between border-b my-2  ">
//               <span class="font-semibold my-1 text-[14px]">
//                 Customer Payable:{" "}
//               </span>
//               <span class="md:text-right my-1 text-[14px]">56 Tk</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <h1 className="text-4xl my-4">Thank You!</h1>
//       {/* footer part */}
//       <div className=" grid lg:grid-cols-2 sm:grid-cols-2 justify-between">
//         <div className="text-start">
//           <h5 className="font-bold uppercase">payment information</h5>
//           <p className="font-semibold text-[14px]">Islamic Bank</p>
//           <p>
//             <span className="font-semibold text-[14px]">Account name: </span>
//             <span>tanvirrifat</span>
//           </p>
//           <p>
//             <span className="font-semibold text-[14px]">Account No: </span>
//             <span>12465406541</span>
//           </p>
//           <p>
//             <span className="font-semibold text-[14px]">Pay By: </span>
//             <span>24 april 2024</span>
//           </p>
//         </div>
//         {/*  */}
//         <div className="flex justify-end">
//           <div className="ml-28 ">
//             <h1 className="lg:text-3xl font-bold text-black sm:text-lg sm:text-black">
//               RaiseUp Publications
//             </h1>
//             <p>
//               <span className="font-semibold text-[14px]">Address: </span>
//               <span>Gulsan1, Niketon, Dhaka-1000</span>
//             </p>
//             <p>
//               <span className="font-semibold text-[14px]">Email: </span>
//               <span>raiseup@gmail.com</span>
//             </p>
//             <p>
//               <span className="font-semibold text-[14px]">Phone: </span>
//               <span>0179999999</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

// dsssssssssssss

//  <div className="printable-component max-w-full mx-auto mt-10 min-h-screen sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] p-4">
//    {/* header part */}
//    <div className="flex flex-col sm:flex-row justify-between ">
//      <div>
//        <div>
//          <Image src={raiseUp} width={300} height={200} alt="" />
//        </div>
//      </div>

//      <div className="sm:mb-0">
//        <h5 className="lg:text-[17px] sm:text-sm">
//          Invoice ID: <span className="font-semibold">#341012421</span>
//        </h5>
//        <h5 className="lg:text-[17px] sm:text-sm">
//          <span>23 April 2024 08:25 PM</span>{" "}
//          <span className="font-semibold">(Ripon Sarkar)</span>
//        </h5>
//      </div>
//    </div>
//    <h1 className="border-b mt-2"></h1>
//    {/* order info */}
//    <div className="my-10 grid lg:grid-cols-2 sm:grid-cols-2 justify-between">
//      <div className="mb-4 sm:mr-4">
//        <h1 className="text-xl  text-primary font-semibold">Order Info:</h1>
//        <p className="my-1">
//          <span className="font-semibold">Order ID: </span>
//          <span>12435132</span>
//        </p>
//        <p className="my-1">
//          <span className="font-semibold"> Placed: </span>
//          <span>24 April 2024, 12:55 PM</span>
//        </p>
//        <p className="my-1">
//          <span className="font-semibold"> Payment Method: </span>
//          <span>COD partially Paid</span>
//        </p>
//        <p className="my-1">
//          <span className="font-semibold">Total Product: </span>
//          <span>3 Items</span>
//        </p>
//        <p className="my-1">
//          <span className="font-semibold"> Note: </span> <span>Fs, Fs</span>
//        </p>
//      </div>
//      {/*  */}
//      <div className="ml-28">
//        <h1 className="text-xl  text-primary font-semibold">
//          Delivery Address:
//        </h1>
//        <p className="my-1">
//          <span className="font-semibold"> Name: </span> <span>Asfak Ali</span>
//        </p>
//        <p className="my-1">
//          <span className="font-semibold"> Address: </span>
//          <span>Gulsan1, Niketon, Road-2, Block-B, Dhaka, Bangladesh</span>
//        </p>
//        <p className="my-1 flex">
//          <span className="font-semibold">Phone: </span>{" "}
//          <span>017000000546556</span>
//        </p>
//        <p className="my-1 flex">
//          <span className="font-semibold">Email: </span>
//          <span>raiseup@gamil.com</span>
//        </p>
//      </div>
//    </div>

//    {/* order list part */}

//    <div className="overflow-x-auto -mt-10">
//      <table className="min-w-full md:min-w-[100%] shadow-md mx-auto my-6">
//        <thead>
//          <tr className="text-black font-semibold">
//            <th className="py-2 -mt-10 text-left border-b">S1 Product</th>
//            <th className="py-2 -mt-10 border-b text-end">Quantity</th>
//            <th className="py-2 -mt-10 border-b text-end">Unit Price</th>
//            <th className="py-2 -mt-10 border-b text-end">Total Price</th>
//          </tr>
//        </thead>
//        <tbody>
//          <tr className="hover:bg-gray-50 transition duration-300">
//            <td className="py-2 -mt-10 border-b">Pencil a aka pori </td>
//            <td className="py-2 -mt-10 border-b text-end">2</td>
//            <td className="py-2 -mt-10 border-b text-end">210 110 Tk</td>
//            <td className="py-2 -mt-10 border-b text-end">110 Tk</td>
//          </tr>
//          <tr className="hover:bg-gray-50 transition duration-300">
//            <td className="py-2 -mt-10 border-b">Pencil a aka pori </td>
//            <td className="py-2 -mt-10 border-b text-end">2</td>
//            <td className="py-2 -mt-10 border-b text-end">210 110 Tk</td>
//            <td className="py-2 -mt-10 border-b text-end">110 Tk</td>
//          </tr>
//          <tr className="hover:bg-gray-50 transition duration-300">
//            <td className="py-2 -mt-10 border-b">Pencil a aka pori </td>
//            <td className="py-2 -mt-10 border-b text-end">2</td>
//            <td className="py-2 -mt-10 border-b text-end">210 110 Tk</td>
//            <td className="py-2 -mt-10 border-b text-end">110 Tk</td>
//          </tr>
//        </tbody>
//      </table>
//      <div class="flex justify-center -mt-3 md:justify-end">
//        <div class="w-full md:w-1/4">
//          <div class="flex flex-col md:flex-row justify-between border-b my-1">
//            <span class="font-semibold">SubTotal: </span>
//            <span class="md:text-right">550 Tk </span>
//          </div>
//          <div class="flex flex-col md:flex-row justify-between border-b my-1">
//            <span class="font-semibold">Shipping: </span>
//            <span class="md:text-right">60 Tk </span>
//          </div>
//          <div class="flex flex-col md:flex-row justify-between border-b my-1">
//            <span class="font-semibold">Total: </span>
//            <span class="md:text-right">610 Tk </span>
//          </div>
//          <div class="flex flex-col md:flex-row justify-between border-b my-1">
//            <span class="font-semibold">Cash Payment: </span>
//            <span class="md:text-right">(610 Tk )</span>
//          </div>
//          <div class="flex flex-col md:flex-row justify-between border-b my-1">
//            <span class="font-semibold">Customer Payable: </span>
//            <span class="md:text-right">56 Tk</span>
//          </div>
//        </div>
//      </div>
//    </div>
//    <h1 className="text-4xl my-6">Thank You!</h1>
//    {/* footer part */}
//    <div className=" grid lg:grid-cols-2 sm:grid-cols-2 justify-between">
//      <div className="text-start">
//        <h5 className="font-bold uppercase">payment information</h5>
//        <p className="font-semibold">Islamic Bank</p>
//        <p>
//          <span className="font-semibold">Account name: </span>
//          <span>tanvirrifat</span>
//        </p>
//        <p>
//          <span className="font-semibold">Account No: </span>
//          <span>12465406541</span>
//        </p>
//        <p>
//          <span className="font-semibold">Pay By: </span>
//          <span>24 april 2024</span>
//        </p>
//      </div>
//      {/*  */}
//      <div className="ml-28">
//        <h1 className="lg:text-3xl font-bold text-black sm:text-lg sm:text-black">
//          RaiseUp Publications
//        </h1>
//        <h1 className="lg:text-xl sm:text-xs text-black ">
//          <span className="font-semibold my-1">Address: </span> gulsan1 niketon
//          Dhaka-1000 ulsan1 niketon Dhaka-1000
//        </h1>
//        <div className="sm:mb-0">
//          <h5 className="lg:text-[17px] sm:text-sm my-1">
//            <span className="font-semibold my-1">Email: </span>
//            raise@gmail.com
//          </h5>
//          <h5 className="lg:text-[17px] sm:text-sm my-1">
//            <span className="font-semibold my-1">phone: </span>016000000{" "}
//          </h5>
//        </div>
//      </div>
//    </div>
//  </div>;


tablenext


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
        console.log(errorMessage);
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
            <div className="flex justify-center items-center min-h-[60vh] bg-white px-4">
              <h1 className="uppercase text-xl md:text-2xl font-semibold text-red ">
                No Data Found
              </h1>
            </div>
          </>
        ) : (
          <>
            <table className="min-w-[90%] mx-auto my-6">
              <thead className="">
                <tr className="font-lg text-[16px] leading-[24px] uppercase text-brightBlue">
                  {tableName?.map((row, inde) => (
                    <th key={inde} className="py-3 px-6 text-left w-[39px]">
                      {row?.tableName}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {tablesData?.map((item, ind) => (
                  <tr
                    key={ind}
                    className="hover:bg-gray-50 transition duration-300"
                  >
                    {tableRow?.map((row, _ind) => (
                      <td
                        key={_ind}
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
                              className="bg-red hover:bg-gray hover:text-red text-white rounded-full p-2 duration-300"
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

updatedCodesForm



"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import UpdatedFormDropDown from "./updatedFormDropDown";

const UpdateCodesFrom = ({
  fields, //@ ALL THE FIELDS YOU WANT TO SHOW IN THE FORM!
  initialValues, //@ INITIAL VALUES FOR ALL INPUT!
  apiEndpoint, //@ UPDATE METHOD API URL!
  placeholder, //@ FROM ( FIND UNIQUE ) DATA OBJECTS!
  id, //@ BASED ON WHICH ID, YOU WANT TO MATCH UPDATED DATA'S!
  createLink, //@ THAT METHOD CREATED URL IN FRONTEND!
  dropDownMenu,
  categoryName,
  subCategoryName,
}) => {
  const [formData, setFormData] = useState(initialValues);
  const router = useRouter();

  const [isActive, setIsActive] = useState(placeholder?.zactive === 1);
  const [isInactive, setIsInactive] = useState(placeholder?.zactive === 0);

  const { status, data } = useSession();
  const businessId = data?.user?.bizid;
  const name = data?.user?.name;

  if (status === "loading") {
    return <div>Loadin....</div>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitFormData();
  };

  const submitFormData = async () => {
    const datas = fields.reduce((acc, field) => {
      let value = formData[field.name];

      if (field.type === "number") {
        value = Number(value);
      }
      return { ...acc, [field.name]: value };
    }, {});

    const dropDownUpData = {
      ...datas,
      businessId,
      name: "Rafi",
      zactive: isActive ? 1 : isInactive ? 0 : undefined,
    };

    try {
      let requestBody;

      if (dropDownMenu) {
        requestBody = dropDownUpData;
      } else {
        requestBody = {
          ...datas,
          businessId,
          name,
        };
      }

      const response = await fetch(`${apiEndpoint}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dropDownUpData),
      });

      const res = await response.json();
      if (res.error) {
        toast.error(res.error);
      } else if (response.ok === false) {
        toast.error(`${response.status}, Something went wrong!!`);
      }

      if (response.ok === true) {
        toast.success("Updated!!");
        router.refresh();
        setUpdateButton(true);
        setUpRedirectID(res?.result?.[updateID]);
      }
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  };

  const handleButtonClick = async () => {
    await submitFormData();
  };

  const handleButtonClear = async () => {
    setFormData(initialValues);

    toast.success("Form has been cleared!!");

    router.push(createLink);
    router.refresh();
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <form
          className="flex flex-col lg:grid lg:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          {fields.map((field) => (
            <div key={field.name} className="relative">
              <input
                className="peer border-b border-deepBlue py-3 my-2 text-deepBlue focus:outline-none w-full lg:w-[550px]"
                id={field.name}
                name={field.name}
                type={field.type}
                onChange={handleChange}
                defaultValue={placeholder?.[field.name]}
              />
              <label
                className="absolute -top-2 left-0 bg-transparent text-lg text-deepBlue duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                htmlFor={field.name}
              >
                {field.placeholder}
              </label>
            </div>
          ))}
        </form>

        <div>
          <p className="border-b">Choose Status</p>
          <div className="flex flex-col lg:flex-row lg:gap-3 lg:self-center mt-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isActive}
                onChange={() => {
                  setIsActive(!isActive);
                  setIsInactive(false);
                }}
              />
              <span className="ml-2">Active</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isInactive}
                onChange={() => {
                  setIsInactive(!isInactive);
                  setIsActive(false);
                }}
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-5">
        <button
          onClick={handleButtonClick}
          className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
        >
          Update
        </button>

        <button
          onClick={handleButtonClear}
          className="border-2 bg-primary border-primary rounded py-3 px-5 text-white focus:outline-none text-sm font-normal duration-300"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default UpdateCodesFrom;


navbar


"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/home/logo.png";
import { usePathname } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { useSession } from "next-auth/react";
import DropDown from "../components/ui/user-profile/dropDown";
import { CartContext } from "../components/context/context";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import { getDynamicLayout } from "@/app/api/frontend/role/getDynamicLayout";

import defaultMenu from "@/public/defaultSidebar.json";

// Menu Icon

import {
  MdOutlineMenuOpen,
  MdOutlineSubdirectoryArrowRight,
  MdOutlineSpaceDashboard,
  MdOutlinePointOfSale,
  MdAddBusiness,
} from "react-icons/md";
import { LuBookOpen } from "react-icons/lu";
import { PiUsersThreeBold } from "react-icons/pi";
import { TbCategory, TbCategoryPlus } from "react-icons/tb";
import { BsDatabaseAdd } from "react-icons/bs";
import { BiDownArrowAlt, BiMoneyWithdraw, BiUpArrowAlt } from "react-icons/bi";
import { IoMdOptions } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { CiBarcode } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaAddressBook } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { PiArticleNyTimesThin } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";

const iconMap = {
  MdOutlineMenuOpen,
  MdOutlineSubdirectoryArrowRight,
  MdOutlineSpaceDashboard,
  MdOutlinePointOfSale,
  MdAddBusiness,
  LuBookOpen,
  PiUsersThreeBold,
  TbCategory,
  TbCategoryPlus,
  BsDatabaseAdd,
  BiMoneyWithdraw,
  IoMdOptions,
  IoSettingsSharp,
  CiBarcode,
  FaRegUser,
  RiCustomerService2Fill,
  HiOutlineUserGroup,
  IoInformationCircleOutline,
  HiOutlineClipboardDocumentList,
  FaAddressBook,
  FaUserEdit,
  TbTruckDelivery,
  FaQuoteLeft,
  MdOutlineEmojiEvents,
  PiArticleNyTimesThin,
  TbReportSearch,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const activeStyle = "md:bg-primary text-white px-2 rounded-md";
  const smListStyle = "bg-[#003e69] py-1 rounded-md";
  const { allCartItems } = useContext(CartContext);

  const { data: sessionData, status } = useSession();
  // const businessId = sessionData?.user?.bizid;
  const businessId = sessionData?.user?.xuserid;

  const role = sessionData?.user?.role;

  const [roleData, setRoleData] = useState([]);

  // const [subMenuOpen, setSubMenuOpen] = useState(false);

  // const toggleSubMenu = () => {
  //   setSubMenuOpen(!subMenuOpen);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result } = await getDynamicLayout(businessId, role);
        setRoleData(result);
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    if (businessId) {
      fetchData();
    }
  }, [businessId, role]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const defaultMenuData = defaultMenu;

  //       const { result } = await getDynamicLayout(businessId, role);

  //       if (result && result.length > 0) {
  //         const xroledtData = JSON.parse(result[0].xroledt);

  //         const filteredMenuData = defaultMenuData.filter((menuItem) =>
  //           xroledtData.some(
  //             (xroledtItem) => xroledtItem.menu === menuItem.menuName
  //           )
  //         );
  //         setRoleData(filteredMenuData);

  //       }
  //     } catch (error) {
  //       console.error("Error fetching user information:", error);
  //     }
  //   };

  //   if (businessId) {
  //     fetchData();
  //   }
  // }, [businessId, role]);

  const navLinks = (
    <div>
      {path.startsWith("/customer-dashboard") ? (
        <ul
          className={`${
            open
              ? "flex flex-col justify-start text-start space-y-2 mb-5 "
              : "flex justify-center items-center gap-5 md:text-[12px] lg:text-[14px] "
          } md:hidden`}
        >
          <li
            className={`${open && path === "/my-profile" ? smListStyle : ""}`}
          >
            <Link
              className={`${
                path === "/my-profile" ? activeStyle : ""
              } pl-2 py-1`}
              href="/my-profile"
            >
              My profile
            </Link>
          </li>
          <li
            className={`${open && path === "/address-book" ? smListStyle : ""}`}
          >
            <Link
              href="/address-book"
              className={`${
                path === "/address-book" ? activeStyle : ""
              } pl-2 py-1`}
            >
              Address Book
            </Link>
          </li>
          <li className={`${open && path === "/vouchers" ? smListStyle : ""}`}>
            <Link
              href="/vouchers"
              className={`${path === "/vouchers" ? activeStyle : ""} pl-2 py-1`}
            >
              Vouchers
            </Link>
          </li>
        </ul>
      ) : (
        <ul
          className={`${
            open
              ? "flex flex-col justify-start text-start space-y-2 mb-5 "
              : "flex justify-center items-center md:gap-1 lg:gap-5 md:text-[12px] lg:text-[14px]"
          }`}
        >
          <li className={`${open && path === "/about" ? smListStyle : ""}`}>
            <Link
              className={`${path === "/about" ? activeStyle : ""} pl-2 py-1`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li className={`${open && path === "/products" ? smListStyle : ""}`}>
            <Link
              href="/products"
              className={`${path === "/products" ? activeStyle : ""} pl-2 py-1`}
            >
              Products
            </Link>
          </li>
          <li className={`${open && path === "/events" ? smListStyle : ""}`}>
            <Link
              href="/events"
              className={`${path === "/events" ? activeStyle : ""} pl-2 py-1`}
            >
              Events
            </Link>
          </li>
          <li className={`${open && path === "/affiliate" ? smListStyle : ""}`}>
            <Link
              href="/affiliate"
              className={`${
                path === "/affiliate" ? activeStyle : ""
              } pl-2 py-1`}
            >
              Affiliate
            </Link>
          </li>

          <li className={`${open && path === "/support" ? smListStyle : ""}`}>
            <Link
              href="/support"
              className={`${path === "/support" ? activeStyle : ""} pl-2 py-1`}
            >
              Support
            </Link>
          </li>
          <li
            className={`${
              open && path === "/affiliate-landing" ? smListStyle : ""
            }`}
          >
            <Link
              href="/affiliate-landing"
              className={`${
                path === "/affiliate-landing" ? activeStyle : ""
              } pl-2 py-1 text-nowrap`}
            >
              Affiliate Landing
            </Link>
          </li>
          <li className={`${open && path === "/policy" ? smListStyle : ""}`}>
            <Link
              href="/policy"
              className={`${
                path === "/policy" ? activeStyle : ""
              } pl-2 py-1 text-nowrap`}
            >
              Policy
            </Link>
          </li>
        </ul>
      )}
    </div>
  );

  const [subMenuOpen, setSubMenuOpen] = useState(
    Array(roleData.length).fill(false)
  );

  const toggleSubMenu = (index) => {
    const newSubMenuOpen = [...subMenuOpen];
    newSubMenuOpen[index] = !newSubMenuOpen[index];
    setSubMenuOpen(newSubMenuOpen);
  };

  const layoutLink = (
    <ul className="overflow-y-auto max-h-[540px]">
      {roleData?.map((menuItem, index) => (
        <li key={menuItem.menuName}>
          {menuItem.path ? (
            <Link href={menuItem.path}>
              <p
                className={`${
                  path === menuItem.path ? activeStyle : ""
                } pl-2 py-1 flex items-center`}
                onClick={() => setIsOpen(false)}
              >
                {menuItem.menuIcon && iconMap[menuItem.menuIcon] && (
                  <span className="mr-2">{iconMap[menuItem.menuIcon]()}</span>
                )}
                {menuItem.menuName}
              </p>
            </Link>
          ) : (
            <div>
              <p
                className={`${
                  path === menuItem.path ? activeStyle : ""
                } pl-2 py-1 flex items-center`}
                onClick={() => toggleSubMenu(index)}
              >
                {menuItem.menuIcon && iconMap[menuItem.menuIcon] && (
                  <span className="mr-2">{iconMap[menuItem.menuIcon]()}</span>
                )}
                {menuItem.menuName}

                <span className="ml-auto">
                  {subMenuOpen[index] ? (
                    <BiUpArrowAlt className="text-2xl min-w-8 w-8 mr-2 text-white" />
                  ) : (
                    <BiDownArrowAlt className="text-2xl min-w-8 w-8 mr-2 text-white" />
                  )}
                </span>
              </p>
              {subMenuOpen[index] && (
                <div className={`bg-transparent px-2 text-white`}>
                  {menuItem?.subMenu === true && (
                    <div className="bg-gray-800 py-2 rounded">
                      {menuItem?.subMenus?.map((subMenuItem, isInd) => (
                        <div
                          key={isInd}
                          className="flex flex-row items-center my-3"
                          onClick={() => setIsOpen(false)}
                        >
                          <PiArrowBendDownRightBold className="min-w-8 w-8 mr-2 text-white" />
                          <Link href={subMenuItem?.path}>
                            <p className="font-medium text-white">
                              {subMenuItem?.name}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  // const layoutLink = (
  //   <ul>
  //     {roleData?.map((menuItem) => (
  //       <li key={menuItem.menuName}>
  //         {menuItem.path ? (
  //           <Link href={menuItem.path}>
  //             <p
  //               className={`${
  //                 path === menuItem.path ? activeStyle : ""
  //               } pl-2 py-1 flex items-center`}
  //               onClick={() => setIsOpen(false)}
  //             >
  //               {menuItem.menuIcon && iconMap[menuItem.menuIcon] && (
  //                 <span className="mr-2">{iconMap[menuItem.menuIcon]()}</span>
  //               )}
  //               {menuItem.menuName}
  //             </p>
  //           </Link>
  //         ) : (
  //           <div>
  //             <p
  //               className={`${
  //                 path === menuItem.path ? activeStyle : ""
  //               } pl-2 py-1 flex items-center`}
  //               onClick={toggleSubMenu}
  //             >
  //               {menuItem.menuIcon && iconMap[menuItem.menuIcon] && (
  //                 <span className="mr-2">{iconMap[menuItem.menuIcon]()}</span>
  //               )}
  //               {menuItem.menuName}

  //               <span className="ml-auto" onClick={toggleSubMenu}>
  //                 {subMenuOpen ? (
  //                   <BiUpArrowAlt className="text-2xl min-w-8 w-8 mr-2 text-white" />
  //                 ) : (
  //                   <BiDownArrowAlt className="text-2xl min-w-8 w-8 mr-2 text-white" />
  //                 )}
  //               </span>
  //             </p>
  //             {subMenuOpen && (
  //               <div className={`bg-transparent px-2 text-white`}>
  //                 {menuItem?.subMenu === true && (
  //                   <div className="bg-gray-800 py-2 rounded">
  //                     {menuItem?.subMenus?.map((subMenuItem, isInd) => (
  //                       <div
  //                         key={isInd}
  //                         className="flex flex-row items-center my-3"
  //                         onClick={() => setIsOpen(false)}
  //                       >
  //                         <PiArrowBendDownRightBold className="min-w-8 w-8 mr-2 text-white" />
  //                         <Link href={subMenuItem?.path}>
  //                           <p className="font-medium text-white">
  //                             {subMenuItem?.name}
  //                           </p>
  //                         </Link>
  //                       </div>
  //                     ))}
  //                   </div>
  //                 )}
  //               </div>
  //             )}
  //           </div>
  //         )}
  //       </li>
  //     ))}
  //   </ul>
  // );

  return (
    <>
      {
        <div className="w-full  lg:w-[80%] min-h-[45px] md:mt-1 mx-auto flex justify-between items-center lg:mt-[26px] mb-[13px] z-20">
          {/* logo here  */}
          <div className="md:w-[28%] lg:w-[18%] hidden md:block h-full">
            <Link href="/">
              <Image
                width={700}
                height={300}
                src={logo}
                alt="riseUp logo"
                className="h-full"
              ></Image>
            </Link>
          </div>

          {/* navbar items here  */}

          {path.startsWith("/dashboard") ? (
            <div>
              {/* <DropDown user={"yes"} /> */}

              <div className="block md:hidden">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className={`${
                    isOpen ? "hidden" : ""
                  }bg-primary text-white rounded-md text-2xl px-1 ml-1 md:ml-0 md:hidden`}
                >
                  {isOpen ? (
                    <RxCross2></RxCross2>
                  ) : (
                    <IoReorderThree className="h-[32px] w-9 mt-2"></IoReorderThree>
                  )}
                </div>
                {/* small device navbar  */}
                <div
                  className={`${
                    isOpen
                      ? " bg-primary text-white px-5 flex flex-col w-full min-h-screen  duration-500 fixed md:hidden  top-0 z-50"
                      : "hidden"
                  }  md:w-[80%] lg:w-[70%] md:block`}
                >
                  {/* cross icon here  */}
                  <span
                    onClick={() => setIsOpen(!isOpen)}
                    className="  text-xl md:hidden flex justify-end py-3 md:py-0"
                  >
                    <RxCross2></RxCross2>
                  </span>
                  <div>{layoutLink}</div>
                </div>
              </div>
            </div>
          ) : path.startsWith("/affiliate-dashboard") ? (
            <div className="uppercase text-2xl pr-5 text-right">
              <h1>affiliate</h1>
              <h2 className="font-semibold">dashboard</h2>
            </div>
          ) : (
            <div className="w-full md:w-[80%] lg:w-[70%] flex justify-between items-center ">
              <div
                onClick={() => setOpen(!open)}
                className={`${
                  open ? "hidden" : ""
                }bg-primary text-white text-2xl px-1 ml-1 md:ml-0 md:hidden`}
              >
                {open ? (
                  <RxCross2></RxCross2>
                ) : (
                  <IoReorderThree></IoReorderThree>
                )}
              </div>
              {/* small device navbar  */}

              <div
                className={`${
                  open
                    ? " bg-primary text-white px-5 flex flex-col w-full duration-500 fixed md:hidden min-h-20 top-0 z-50"
                    : "hidden"
                }  md:w-[80%] lg:w-[70%] md:block`}
              >
                {/* cross icon here  */}
                <span
                  onClick={() => setOpen(!open)}
                  className="  text-xl md:hidden flex justify-end py-3 md:py-0"
                >
                  <RxCross2></RxCross2>
                </span>
                {navLinks}
              </div>

              {/* cart and user icon here  */}
              <div className="flex gap-3 items-center mx-1">
                <Link href="/cart">
                  <button className="bg-primary px-4 md:px-6 rounded-md py-2 relative">
                    <FiShoppingCart className="text-white" />
                    <div className="absolute -top-[6px] md:-top-2 left-[34px] md:left-[51px] bg-white text-primary w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full flex justify-center items-center border border-blue p-[2px]">
                      <span className="text-sm font-semibold">
                        {allCartItems?.length}
                      </span>
                    </div>
                  </button>
                </Link>
                <DropDown />
              </div>
            </div>
          )}
          {/* dashboard-layout */}

          <div>
            {path.startsWith("/dashboard") && (
              <div className="bg-primary text-white rounded-md text-lg mr-1 mt-2 ">
                <DropDown user={"yes"} />
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
};

export default Navbar;



SalesTable

/* eslint-disable react-hooks/exhaustive-deps */
// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { MdEdit } from "react-icons/md";
// import { useRouter } from "next/navigation";
// import Modal from "./modal";

// const SalesTable = ({ result, redirectInfo }) => {
//   const router = useRouter();
//   const [deleteItemId, setDeleteItemId] = useState(null);
//   const [openModal, setOpenModal] = useState(false);

//   useEffect(() => {
//     // Check if running on the client side before calling router.refresh
//     if (typeof window !== "undefined" && router.asPath === "/") {
//       router.replace(router.asPath);
//     }
//   }, [deleteItemId]);

//   const handleDeleteConfirmation = async () => {
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_URL}/api/salesdet/${deleteItemId}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.ok) {
//         setDeleteItemId(null);
//         setOpenModal(false);
//         router.refresh();
//       } else {
//         const errorMessage = await response.text();
//         console.error("Error deleting item:", errorMessage);
//       }
//     } catch (error) {
//       console.error("Error deleting item:", error);
//     }
//     setDeleteItemId(null);
//     setOpenModal(false);
//   };

//   const handleDelete = (itemId) => {
//     router.refresh();
//     setDeleteItemId(itemId);
//     setOpenModal(true);
//   };

//   return (
//     <div className="overflow-x-auto lg:overflow-x-visible ">
//       <table className="min-w-[90%] mx-auto ">
//         <div className="min-w-[90%] mx-auto lg:-mx-14">
//           <div className="space-y-2 flex flex-wrap">
//             <div className="w-full md:w-1/2 lg:w-1/2">
//               <h1 className="flex">
//                 <strong className="w-[115px]">Order ID</strong>
//                 <span>: {result?.secus?.xcusid}</span>
//               </h1>
//               <h1 className="flex">
//                 <strong className="w-[115px]">Name</strong>
//                 <span>: {result?.secus?.xcus}</span>
//               </h1>
//             </div>
//             <div className="w-full md:w-1/2 lg:w-1/2">
//               <h1 className="flex">
//                 <strong className="w-[115px]">Mobile</strong>
//                 <span>: {result?.secus?.xmobile} </span>
//               </h1>

//               <h1 className="flex">
//                 <strong className="w-[115px]">Address</strong>
//                 <span>: {result?.secus?.xaddress1}</span>
//               </h1>
//             </div>
//           </div>
//         </div>
//       </table>
//       {/*  */}
//       {/* <p className=" text-2xl font-semibold mt-4 -mb-3">Your orders</p> */}
//       <table className="min-w-[100%] shadow-md  border mx-auto border-gray-100  my-6">
//         <thead>
//           <tr className="bg-primary text-white">
//             <th className="py-3 px-6 text-left border-b">ID</th>
//             {/* <th className="py-3 px-6 text-left border-b">secret-code</th> */}
//             <th className="py-3 text-sm px-6 text-left border-b">Name</th>
//             <th className="py-3 text-sm px-6 text-left border-b">Email</th>
//             <th className="py-3 text-sm px-6 text-left border-b">Time</th>
//             <th className="py-3 text-sm px-6  border-b text-end">Cost</th>
//             <th className="py-3 text-sm px-6  border-b text-end">Rate</th>
//             <th className="py-3 text-sm px-6  border-b text-end">Quantity</th>
//             <th className="py-3 text-sm px-6  border-b text-end">Payment</th>
//             <th className="py-3 text-sm px-6  border-b text-end">Status</th>
//             <th className="py-3 text-sm px-6  border-b text-end">Action</th>
//           </tr>
//         </thead>

//         {result?.ecomsalesdet.length === 0 ? (
//           <tr>
//             <td colSpan="10">
//               <div className="grid h-screen place-content-center justify-center bg-white px-4">
//                 <h1 className="uppercase text-2xl font-semibold text-red">
//                   No Data Found
//                 </h1>
//               </div>
//             </td>
//           </tr>
//         ) : (
//           <tbody>
//             {result?.ecomsalesdet?.map((result, index) => (
//               <tr
//                 key={index}
//                 className="hover:bg-gray-50 transition duration-300"
//               >
//                 <td className="py-4 px-6 text-sm border-b">
//                   {result?.xecomdetsl}
//                 </td>

//                 <td className="py-4 px-6 text-sm border-b">{result?.xcus}</td>

//                 <td className="py-4 px-6 text-sm border-b">
//                   {result?.zemail.slice(0, 26)}
//                   {result?.zemail.length > 26 && " ...."}
//                 </td>

//                 <td className="py-21 text-sm px-1  border-b">
//                   {result?.xdate.slice(0, 10)}
//                 </td>
//                 <td className="py-4 px-6 text-sm border-b text-end">
//                   {result?.xcost}
//                 </td>
//                 <td className="py-4 px-6 text-sm border-b text-end">
//                   {result?.xrate}
//                 </td>
//                 <td className="py-4 px-6 text-sm border-b text-end">
//                   {result?.xqty}
//                 </td>

//                 <td className="py-4 px-6 text-sm border-b text-end">
//                   {result?.xpaymethod}
//                 </td>
//                 <td className="py-4 px-6 text-sm border-b text-end">
//                   {result?.xstatus}
//                 </td>
//                 <td className="py-4 px-6 text-sm border-b text-end">
//                   <div class="flex rounded-md gap-2">
//                     <Link
//                       href={`/dashboard/salesmst/updateMst/${result?.xecomdetsl}`}
//                     >
//                       <button class="bg-primary hover:bg-gray hover:text-primary text-white rounded-full p-2 duration-300">
//                         <MdEdit className="text-2xl" />
//                       </button>
//                     </Link>
//                     {/* <button
//                       onClick={() => handleDelete(result[redirectInfo])}
//                       class="bg-red hover:bg-gray hover:text-red h-10   text-white rounded-full p-2 duration-300"
//                     >
//                       <MdDeleteOutline className="text-2xl" />
//                     </button> */}
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         )}
//       </table>
//       {deleteItemId && (
//         <Modal
//           handleDeleteConfirmation={handleDeleteConfirmation}
//           title="Confirm Delete"
//           onClose={() => setOpenModal(false)}
//           openModal={openModal}
//           setOpenModal={setOpenModal}
//         />
//       )}
//     </div>
//   );
// };

// export default SalesTable;














// "use client";

// import React, { useEffect, useState } from "react";
// import UpdateForm from "../../../../../../components/ui/updateForm";
// import Link from "next/link";
// import { getSingleSalesDet } from "../../../../../api/frontend/salesmst/getSingleSalesDet";
// import { useRouter } from "next/navigation";

// const Page = ({ params }) => {
//   const router = useRouter();
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { result } = await getSingleSalesDet(params?.id);
//         setResult(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [params?.id]);

//   const fields = [
//     { name: "zemail", type: "email", placeholder: "Enter Email" },
//     { name: "xcost", type: "number", placeholder: "Enter Cost" },
//     { name: "xrate", type: "number", placeholder: "Enter Rate" },
//     { name: "xqty", type: "number", placeholder: "Enter Quantity" },
//     { name: "xpaymethod", type: "text", placeholder: "Enter Payment-Method" },
//     { name: "xstatus", type: "text", placeholder: "Enter Status" },
//   ];

//   const initialValues = {
//     zemail: "",
//     xcost: "",
//     xrate: "",
//     xqty: "",
//     xpaymethod: "",
//     xstatus: "",
//   };

//   const apiEndpoint = `${process.env.NEXT_PUBLIC_URL}/api/backend/salesdet`;

//   const pushURL = "/dashboard/zcodes";

//   const createLink = "/dashboard/codeSetting";

//   const handleFetch = () => {
//     router.refresh();
//   };

//   return (
//     <div className="disable-selection mt-10 w-full md:w-4/5 flex flex-col mx-auto bg-white p-10 rounded-md">
//       <div className="flex flex-col sm:flex-row justify-between items-center">
//         <h3 className="text-sm sm:text-lg lg:text-3xl text-deepBlue font-semibold capitalize">
//           Order-Update
//         </h3>

//         <Link href={`/dashboard/salesmst/edit/${result?.xecomsl}`}>
//           <button
//             onClick={() => handleFetch()}
//             className="text-xs sm:text-sm lg:text-base text-white font-medium capitalize bg-deepBlue lg:py-2 py-2 lg:px-4 px-4 rounded-md "
//           >
//             Go To SalesMaster Info
//           </button>
//         </Link>
//       </div>
//       <hr className="my-10 border border-gray" />
//       <UpdateForm
//         fields={fields}
//         initialValues={initialValues}
//         apiEndpoint={apiEndpoint}
//         placeholder={result}
//         id={params?.id}
//         createLink={createLink}
//         pushURL={pushURL}
//       />
//     </div>
//   );
// };

// export default Page;
