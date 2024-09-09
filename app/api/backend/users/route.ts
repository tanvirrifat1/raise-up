import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";
import { error } from "console";

export async function GET() {
  try {
    const result = await prisma.zuser.findMany({
      include: {
        zbusiness: true,
        zrole: true,
      },
    });

    return NextResponse.json({
      message: "Users fetched successfully",
      result,
    });
  } catch (error) {
    console.error("Error creating customer:", error);
    return NextResponse.json(
      {
        message: "Error creating customer",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const {
      businessId,
      xaddress1,
      xrole,
      xpassword,
      xuseremail,
      xusermobile,
      xfullname,
      zactive,
    } = await request.json();

    if (!xrole || xrole === "") {
      return NextResponse.json({
        error: "Missing role",
        message: "Role field is empty!!",
      });
    }
    if (!xpassword || xpassword === "") {
      return NextResponse.json({
        error,
        message: "Password field is empty!!",
      });
    }
    if (!xfullname || xfullname === "") {
      return NextResponse.json({
        error,
        message: "Fullname field is empty!!",
      });
    }

    const hashedPassword = await bcrypt.hash(xpassword, 10);

    const result = await prisma.zuser.create({
      data: {
        bizid: Number(businessId),
        xpassword: hashedPassword,
        xfullname,
        xrole: xrole || "user",
        xaddress1,
        xuseremail,
        xusermobile,
        zactive,
        xusername: xfullname,
        xbranch: "branch",
        xorg: "org",
      },
    });

    return NextResponse.json({
      message: "Sub Category created successfully",
      result,
    });
  } catch (error) {
    console.error("Error creating zuser:", error);
    return new Response(
      JSON.stringify({
        message: "Error creating zuser",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
