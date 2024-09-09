import prisma from "../../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET(request: NextRequest, { params }) {
  try {
    const xcusid = params.cusId;
    let user;

    if (typeof xcusid === "string") {
      user = await prisma.secus.findUnique({
        where: {
          xcusid: parseInt(xcusid),
        },
      });
    } else {
      return NextResponse.json(
        { error: "Please provide a valid xcusid" },
        { status: 400 }
      );
    }

    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }) {
  try {
    const xcusid = params.cusId;
    const data = await req.json();

    const updateData = {
      xcus: data.xcus || undefined,
      zemail: data.zemail || undefined,
      xemail: data.name || undefined,
      xaddress1: data.xaddress1 || undefined,
      xmobile: data.xmobile || undefined,
      xaddress2: data.xaddress2 || undefined,
      xstate: data.xstate || undefined,
      xcountry: data.xcountry || undefined,
      xcontact: data.xcontact || undefined,
      xphone: data.xphone || undefined,
      xnid: data.xnid || undefined,
      xtaxno: data.xtaxno || undefined,
      xcity: data.xcity || undefined,
      zactive: data.zactive !== undefined ? Number(data.zactive) : undefined,
    };

    const result = await prisma.secus.update({
      where: {
        xcusid: parseInt(xcusid),
      },
      data: updateData,
    });

    return NextResponse.json({
      message: "customer updated successfully",
      result,
    });
  } catch (error) {
    console.error("Error updating customer:", error);
    return NextResponse.json(
      {
        message: "Error updating customer",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
