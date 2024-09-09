"use client";
import React, { useEffect, useState } from "react";
import DashboardSlider from "../../../components/sidebar/dashboardSlider";
import { useSession } from "next-auth/react";
import defaultMenu from "../../../public/defaultSidebar.json";
import { getDynamicLayout } from "../../api/frontend/role/getDynamicLayout";

const DashboardLayout = ({ children }) => {
  const { data: sessionData } = useSession();
  const businessId = sessionData?.user?.bizid;
  const role = sessionData?.user?.role;
  const [roleData, setRoleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const defaultMenuData = defaultMenu;

        const { result } = await getDynamicLayout(businessId, role);

        if (result && result.length > 0) {
          const xroledtData = JSON.parse(result[0].xroledt);

          const filteredMenuData = defaultMenuData.filter((menuItem) =>
            xroledtData.some(
              (xroledtItem) => xroledtItem.menu === menuItem.menuName
            )
          );

          setRoleData(filteredMenuData);
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    if (businessId) {
      fetchData();
    }
  }, [businessId, role]);

  const navigationMenu = [...roleData];

  return (
    <div className="w-full flex flex-row text-zinc-50 bg-grayBright">
      <DashboardSlider navigationMenu={navigationMenu} />
      <div className="flex flex-col z-10 px-10 w-full gap-5 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
