import React from "react";
import Link from "next/link";
import { AffiliateUserData } from "../../../utils/types/types";

export type UserData = {
  xuserid: number;
  ztime: Date;
  xusername: string;
  xpassword: string;
  xusermobile: string;
  xuseremail: string;
  xrole: string;
  xcontact: string;
  xorg: string;
  xbranch: string;
  xphone: string;
  xmobile: string;
  xaddress1: string;
  xaddress2: string;
  xcountry: string;
  xstate: string;
  xcity: string;
  xsmtpuser: string;
  bizid: number;
  xsmtppass: string;
  zactive: number;
  zemail: string;
  xfullname: string;
  xemail: string;
}

export interface SingleUserProps {
  user: AffiliateUserData;
  message: string;
}

export interface SingleProps {
  singleUser:
  {
    user: AffiliateUserData
  }
}

const UserProfile: React.FC<SingleProps> = ({ singleUser }) => {
  const user = singleUser?.user;
  return (
    <div className="ml-10 py-10">

      <div className="max-w-screen-2xl m-auto overflow-hidden bg-white shadow-md border border-gray sm:rounded-lg ">
        <div className="px-4 py-5 sm:px-6 flex flex-col lg:flex-row gap-2 lg:justify-between bg-gray/35">
          <div>
            <h3 className="text-lg leading-6 text-gray-900 font-semibold">
              Profile Information
            </h3>
            <p className="max-w-2xl mt-1 text-sm text-gray-500">
              Details and informations about affiliate user.
            </p>
          </div>
          <div className="py-5">
            <Link href={`/dashboard/user-profile/update-profile`} className="border bg-primary text-white shadow-sm hover:shadow px-4 rounded text-sm mt-3 w-fit py-2">Update Info</Link>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="px-4 py-5  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xorg}
              </dd>
            </div>
            <div className="px-4 py-5 bg-gray/25 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xemail}
              </dd>
            </div>
            <div className="px-4 py-5  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Present Address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xaddress1}
              </dd>
            </div>
            <div className="px-4 py-5 bg-gray/25 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Permanent Address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xaddress2}
              </dd>
            </div>
            <div className="px-4 py-5  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Branch
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xbranch}
              </dd>
            </div>
            <div className="px-4 py-5 bg-gray/25 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Country
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xcountry}
              </dd>
            </div>
            <div className="px-4 py-5  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                City
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xcity}
              </dd>
            </div>
            <div className="px-4 py-5 bg-gray/25 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                State
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xstate}
              </dd>
            </div>
            <div className="px-4 py-5  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Contact Info.
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xcontact}
              </dd>
            </div>
            <div className="px-4 py-5 bg-gray/25 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                SMS URL
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xsmsapiurl}
              </dd>
            </div>
            <div className="px-4 py-5  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Promotional Email
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xpromoemail}
              </dd>
            </div>
            <div className="px-4 py-5 bg-gray/25 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                SMT Host
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xsmtphost}
              </dd>
            </div>
            <div className="px-4 py-5  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                PORT
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xport}
              </dd>
            </div>
            <div className="px-4 py-5 bg-gray/25 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                SMT User
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xsmtpuser}
              </dd>
            </div>
            <div className="px-4 py-5  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Domain
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xdomain}
              </dd>
            </div>
            <div className="px-4 py-5 bg-gray/25 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Sub Domain
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xsubdomain}
              </dd>
            </div>
            <div className="px-4 py-5  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Facebook Url
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.xfbpageurl}
              </dd>
            </div>
          </dl>
        </div>
      </div>





    </div>
  );
};





export default UserProfile;
