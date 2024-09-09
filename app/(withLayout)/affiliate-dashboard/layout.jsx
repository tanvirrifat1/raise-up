import DashboardSlider from "../../../components/sidebar/dashboardSlider";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsDatabaseAdd } from "react-icons/bs";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

const DashboardLayout = ({ children }) => {
  const navigationMenu = [
    {
      id: 1,
      menuName: "Affiliate Portal",
      menuPath: "/affiliate-dashboard",
      menuIcon: <MdOutlineSpaceDashboard className="text-3xl min-w-8 w-8" />,
    },
    {
      id: 2,
      menuName: "Customer Data",
      menuPath: "/affiliate-dashboard/customer-data",
      menuIcon: <BsDatabaseAdd className="text-3xl min-w-8 w-8" />,
    },
    {
      id: 3,
      menuName: "Withdraw Request",
      menuPath: "/affiliate-dashboard/withdraw-request",
      menuIcon: <BiMoneyWithdraw className="text-3xl min-w-8 w-8" />,
    },
    {
      id: 4,
      menuName: "Product",
      menuPath: "/affiliate-dashboard/product",
      menuIcon: (
        <MdOutlineProductionQuantityLimits className="text-3xl min-w-8 w-8" />
      ),
    },
    {
      id: 5,
      menuName: "Settings",
      menuPath: "/affiliate-dashboard/affiliate-settings",
      menuIcon: <IoSettingsSharp className="text-3xl min-w-8 w-8" />,
    },
  ];
  return (
    <div className="w-full flex flex-row relative text-zinc-50 min-h-screen bg-grayBright">
      <DashboardSlider navigationMenu={navigationMenu} />
      <div className="flex flex-col p-10 ml-20 w-full gap-5  ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
