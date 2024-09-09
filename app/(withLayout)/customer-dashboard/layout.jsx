import React from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import Navigation from '../../../components/sidebar/dashboardSlider';



const CustomerDashboardLayout = ({ children }) => {
    const navigationMenu = [
        {
            id: 1,
            menuName: "My Profile",
            menuPath: "/customer-dashboard",
            menuIcon: "FaRegUser",
        },
        {
            id: 2,
            menuName: "Address Book",
            menuPath: "/customer-dashboard",
            menuIcon: "FaAddressBook",
        },
        {
            id: 3,
            menuName: "Vouchers",
            menuPath: "/customer-dashboard",
            menuIcon: "HiOutlineClipboardDocumentList",
        },
    ];

    return (
        <div className="w-full flex flex-row relative text-zinc-50 bg-grayBright">
            <div className='hidden md:block'>
                <Navigation navigationMenu={navigationMenu} />
            </div>
            <div className="flex flex-col p-2 md:p-10 w-full gap-5 min-h-screen">{children}</div>
        </div>
    );
};

export default CustomerDashboardLayout;
