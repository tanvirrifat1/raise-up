import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../prisma/prisma";

export async function POST(request: NextRequest) {
  try {
    const {
      xemail,
      bizid,
      xsmtpuser,
      xsmtppass,
      zactive,
      xorg,
      xbranch,
      xaddress1,
      xmobile,
    } = await request.json();

    const hashedPassword = await bcrypt.hash(xsmtppass, 10);

    const user = await prisma.zuser.create({
      data: {
        bizid: Number(bizid),
        xusername: xsmtpuser,
        xpassword: hashedPassword,
        xfullname: xsmtpuser,
        xrole: "user",
        zactive: Number(zactive),
        xorg,
        xbranch,
        xaddress1,
        xuseremail: xemail,
        xusermobile: xmobile,
      },
    });

    return Response.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(
      JSON.stringify({
        message: "Error creating user",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET() {
  try {
    const user = await prisma.zuser.findMany({
      include: {
        zbusiness: true,
        zrole: true,
      },
    });

    return NextResponse.json({
      message: "Users data fetched successfully",
      user,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      {
        message: "Error creating user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
