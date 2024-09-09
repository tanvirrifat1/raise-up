import Link from "next/link";
import React, { useEffect, useState } from "react";
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
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoMdOptions } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { CiBarcode } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaAddressBook } from "react-icons/fa";

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
  FaAddressBook
};

const SubMenuAccordion = ({ subMenu, isOpenSidebar }) => {
  const [isOpen, setIsOpen] = useState(null);
  const menuIcon = subMenu.map((menu) => menu?.menuIcon);
  const iconComponents = menuIcon?.map((iconName, index) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? (
      <IconComponent key={index} className="text-3xl min-w-8 w-8 text-white" />
    ) : null;
  });

  useEffect(() => {
    if (!isOpenSidebar) {
      setIsOpen(null);
    }
  }, [isOpenSidebar]);

  const handleToggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div>
      {subMenu?.map((menuItem, idx) => (
        <>
          {menuItem?.menuPath ? (
            <Link href={menuItem.menuPath}>
              <div
                onClick={() => handleToggle(idx)}
                className={`py-3 flex items-center gap-4 overflow-hidden ${isOpenSidebar && isOpenSidebar === idx
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[1fr] opacity-100"
                  }`}
              >
                {iconComponents[idx]}
                <div className="flex-1">
                  <p className="font-medium text-base text-white">
                    {menuItem?.menuName}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div key={menuItem?.id}>
              <div
                onClick={() => handleToggle(idx)}
                className={`py-3 flex items-center gap-4 overflow-hidden ${isOpenSidebar && isOpenSidebar === idx
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[1fr] opacity-100"
                  }`}
              >
                {iconComponents[idx]}
                <div className="flex-1">
                  <p className="font-medium text-lg text-white">
                    {menuItem?.menuName}
                  </p>
                </div>
                <div
                  className={`duration-300 ease-in-out ${isOpen === idx ? "transform rotate-90" : ""
                    }`}
                >
                  <svg
                    width={25}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M10 7L15 12L10 17"
                        stroke="#a8a8a8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpenSidebar && isOpen === idx
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className={`bg-transparent px-2 text-white`}>
                    {menuItem?.subMenu === true && (
                      <div className="bg-gray-800 py-2 rounded">
                        {menuItem?.subMenus.map((subMenuItem) => (
                          <div
                            key={subMenuItem.id}
                            className="flex flex-row items-center my-3"
                          >
                            <PiArrowBendDownRightBold className="text-3xl min-w-8 w-8 mr-2 text-white" />
                            <Link href={subMenuItem.path}>
                              <p className="font-medium text-lg text-white">
                                {subMenuItem.name}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default SubMenuAccordion;
