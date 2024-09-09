"use client";

import SuperAdminCard from "../../../components/dashboard/super-admin/card";
import LineGraph from "../../../components/dashboard/super-admin/lineGraph";
import PieChartComponent from "../../../components/dashboard/super-admin/pieChart";
import DashboardCalender from "../../../components/dashboard/super-admin/calender";
import {
  MdCalendarMonth,
  MdOutlineBarChart,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useSession } from "next-auth/react";

const SuperAdminPage = () => {
  // const { status } = useSession()
  // if (status == 'loading') return <div className='flex flex-col justify-center items-center min-h-[70vh] text-brightBlue'>
  //   {'Loading....'}
  // </div>

  return (
    <div className="w-full ">
      <SuperAdminCard />
      {/* LINE GRAPH */}
      <div className="bg-white py-5 px-8 rounded-tr-xl rounded-tl-xl">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex items-center justify-center bg-bluish py-3 px-5 rounded-md m-2 gap-2">
            <MdCalendarMonth className="text-deepGray text-lg font-medium" />
            <p className="text-deepGray text-lg font-medium">This month</p>
          </div>
          <div className="bg-bluish py-3 px-5 rounded-md m-2">
            <MdOutlineBarChart className="text-deepGray text-lg font-medium" />
          </div>
        </div>
        <div className="my-5">
          <h3 className="text-3xl font-bold text-brightBlue mb-3">$37.5K</h3>
          <div className="flex items-center mb-5">
            <p className="text-lg font-bold text-deepGray">Total Spent</p>
            <MdKeyboardArrowUp className="text-lime text-lg font-medium ml-5" />
            <p className="text-lime text-lg font-bold ml-1">+2.45%</p>
          </div>
          <div className="flex items-center gap-2">
            <RiCheckboxCircleFill className="text-lime text-lg font-bold" />
            <p className="text-lime text-lg font-bold">On track</p>
          </div>
        </div>
      </div>
      <LineGraph />
      {/* 
      <PieChartComponent />
      <DashboardCalender /> */}
      {/* PIE CHART & CALENDER  */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 w-full">
        <PieChartComponent className="sm:col-span-2" />
        <DashboardCalender className="sm:col-span-1" />
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 w-full">
        <PieChartComponent className="sm:col-span-2" />
        <DashboardCalender className="sm:col-span-1" />
      </div>
    </div>
  );
};

export default SuperAdminPage;
