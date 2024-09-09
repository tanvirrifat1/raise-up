"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/home/logo.png";
import { usePathname } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { useSession } from "next-auth/react";
import DropDown from "../components/ui/user-profile/dropDown";
import { CartContext } from "../components/context/context";

const Navbar = () => {
  const { status } = useSession();

  const [open, setOpen] = useState(false);
  const path = usePathname();
  const active = "md:bg-primary text-white px-2 rounded-md";
  const smListStyle = "bg-[#003e69] py-1 rounded-md";
  const { allCartItems } = useContext(CartContext);

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
  //             >
  //               {menuItem.menuIcon && iconMap[menuItem.menuIcon] && (
  //                 <span className="mr-2">{iconMap[menuItem.menuIcon]()}</span>
  //               )}
  //               {menuItem.menuName}
  //             </p>
  //           </Link>
  //         ) : (
  //           <React.Fragment>
  //             <p
  //               className={`${
  //                 path === menuItem.path ? activeStyle : ""
  //               } pl-2 py-1 flex items-center`}
  //             >
  //               {menuItem.menuIcon && iconMap[menuItem.menuIcon] && (
  //                 <span className="mr-2">{iconMap[menuItem.menuIcon]()}</span>
  //               )}
  //               {menuItem.menuName}
  //             </p>
  //             <div className={`bg-transparent px-2 text-white`}>
  //               {menuItem?.subMenu === true && (
  //                 <div className="bg-gray-800 py-2 rounded">
  //                   {menuItem?.subMenus?.map((subMenuItem, isInd) => (
  //                     <div
  //                       key={isInd}
  //                       className="flex flex-row items-center my-3"
  //                     >
  //                       <PiArrowBendDownRightBold className=" min-w-8 w-8 mr-2 text-white" />
  //                       <Link href={subMenuItem?.path}>
  //                         <p className=" text-white">{subMenuItem?.name}</p>
  //                       </Link>
  //                     </div>
  //                   ))}
  //                 </div>
  //               )}
  //             </div>
  //           </React.Fragment>
  //         )}
  //       </li>
  //     ))}
  //   </ul>
  // );

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
              className={`${path === "/my-profile" ? active : ""} pl-2 py-1`}
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
              className={`${path === "/address-book" ? active : ""} pl-2 py-1`}
            >
              Address Book
            </Link>
          </li>
          <li className={`${open && path === "/vouchers" ? smListStyle : ""}`}>
            <Link
              href="/vouchers"
              className={`${path === "/vouchers" ? active : ""} pl-2 py-1`}
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
              : "flex justify-center items-center gap-5 md:text-[12px] lg:text-[14px] "
          }`}
        >
          <li className={`${open && path === "/about" ? smListStyle : ""}`}>
            <Link
              className={`${path === "/about" ? active : ""} pl-2 py-1`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li className={`${open && path === "/products" ? smListStyle : ""}`}>
            <Link
              href="/products"
              className={`${path === "/products" ? active : ""} pl-2 py-1`}
            >
              Products
            </Link>
          </li>
          <li className={`${open && path === "/events" ? smListStyle : ""}`}>
            <Link
              href="/events"
              className={`${path === "/events" ? active : ""} pl-2 py-1`}
            >
              Events
            </Link>
          </li>
          <li className={`${open && path === "/affiliate" ? smListStyle : ""}`}>
            <Link
              href="/affiliate"
              className={`${path === "/affiliate" ? active : ""} pl-2 py-1`}
            >
              Affiliate
            </Link>
          </li>

          <li className={`${open && path === "/support" ? smListStyle : ""}`}>
            <Link
              href="/support"
              className={`${path === "/support" ? active : ""} pl-2 py-1`}
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
                path === "/affiliate-landing" ? active : ""
              } pl-2 py-1 text-nowrap`}
            >
              Affiliate Landing
            </Link>
          </li>
        </ul>
      )}
    </div>
  );

  return (
    <>
      {
        <div className="w-full lg:w-[80%] min-h-[45px] md:mt-1 mx-auto flex justify-between items-center lg:mt-[26px] mb-[13px] z-20">
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
              <DropDown user={"yes"} />
            </div>
          ) : path.startsWith("/affiliate-dashboard") ? (
            <div className="uppercase text-2xl pr-5 text-right">
              <h1>affiliate</h1>
              <h2 className="font-semibold">dashboard</h2>
            </div>
          ) : (
            <div className="w-full md:w-[80%] lg:w-[70%] flex justify-between items-center">
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

                {status === "authenticated" ? (
                  <div>
                    <DropDown user={"yes"}></DropDown>
                  </div>
                ) : (
                  <DropDown user={"no"}></DropDown>
                )}
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
};

export default Navbar;

// "use client";
// import React, { useEffect, useState } from "react";
// import DashboardSlider from "../../../components/sidebar/dashboardSlider";
// import { useSession } from "next-auth/react";
// import defaultMenu from "../../../public/defaultSidebar.json";
// import { getDynamicLayout } from "../../api/frontend/role/getDynamicLayout";
// import "./style.css";

// const DashboardLayout = ({ children }) => {
//   const { data: sessionData } = useSession();
//   const businessId = sessionData?.user?.bizid;
//   const role = sessionData?.user?.role;
//   const [roleData, setRoleData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const defaultMenuData = defaultMenu;

//         const { result } = await getDynamicLayout(businessId, role);

//         if (result && result.length > 0) {
//           const xroledtData = JSON.parse(result[0].xroledt);

//           const filteredMenuData = defaultMenuData.filter((menuItem) =>
//             xroledtData.some(
//               (xroledtItem) => xroledtItem.menu === menuItem.menuName
//             )
//           );

//           setRoleData(filteredMenuData);
//         }
//       } catch (error) {
//         console.error("Error fetching user information:", error);
//       }
//     };

//     if (businessId) {
//       fetchData();
//     }
//   }, [businessId, role]);

//   const navigationMenu = [...roleData];

//   return (
//     <div className="w-full flex flex-row text-zinc-50 bg-grayBright">
//       <DashboardSlider navigationMenu={navigationMenu} />
//       <div className="flex flex-col z-10 px-10 w-full gap-5 mx-auto">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
