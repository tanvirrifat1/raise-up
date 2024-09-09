import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/prisma";
import bcrypt from "bcrypt";

type Inputs = {
  xemail: string;
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
};

export async function POST(request: NextRequest) {
  try {
    const { xemail, xorg, xmobile, xaddress1, xsmtppass }: Inputs =
      await request.json();

    if (!xemail || xemail == "") {
      return NextResponse.json({ error: "Email is required" });
    } else if (!xorg || xorg == "") {
      return NextResponse.json({ error: "Organization is required" });
    } else if (!xmobile || xmobile == "") {
      return NextResponse.json({ error: "Mobile is required" });
    } else if (!xaddress1 || xaddress1 == "") {
      return NextResponse.json({ error: "Address is required" });
    } else if (!xsmtppass || xsmtppass == "") {
      return NextResponse.json({ error: "Password is required" });
    }

    const register = await prisma.zbusiness.create({
      data: {
        xemail,
        xorg,
        xmobile,
        xsmtppass,
        xaddress1,
        xcontact: "",
        xbranch: "",
        xphone: "",
        xaddress2: "",
        xcountry: "",
        xstate: "",
        xcity: "",
        zactive: 1,
        xsmtpuser: "",
      },
    });

    if (register) {
      const role = await prisma.zrole.create({
        data: {
          zemail: register?.xemail,
          bizid: Number(register?.bizid),
          xrole: "admin",
          xroledt: JSON.stringify([
            { menu: "Dashboard", menuPath: "/dashboard/affiliate-portal" },
            {
              menu: "Affiliate Information",
              menuPath: "/dashboard/user-profile",
            },
            { menu: "Code Setting", menuPath: "/dashboard/zcodes" },
            { menu: "Category", menuPath: "/dashboard/category" },
            { menu: "Sub Category", menuPath: "/dashboard/sub-category" },
            { menu: "Items", menuPath: "/dashboard/set-items/information" },
            { menu: "Customers", menuPath: "/dashboard/customer-data" },
            { menu: "Sales Order", menuPath: "/dashboard/salesmst" },
            { menu: "Roles", menuPath: "/dashboard/role/information" },
            { menu: "Users", menuPath: "/dashboard/users" },
            { menu: "Settings", menuPath: "/dashboard/admin-settings" },
          ]),
        },
      });

      if (role) {
        const hashedPassword = await bcrypt.hash(xsmtppass, 10);

        await prisma.zuser.create({
          data: {
            bizid: register?.bizid,
            xusername: register?.xorg,
            xpassword: hashedPassword,
            // xfullname: register?.xsmtpuser,
            xfullname: "",
            xrole: role?.xrole,
            zactive: register?.zactive,
            xorg: register?.xorg,
            xbranch: register?.xbranch,
            xaddress1: register?.xaddress1,
            xuseremail: register?.xemail,
            xusermobile: register?.xmobile,
          },
        });
      }
    }
    return NextResponse.json({ message: "ok.", register }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
