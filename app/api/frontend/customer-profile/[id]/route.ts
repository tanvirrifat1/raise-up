import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function PATCH(req: NextRequest, { params }) {
  try {
    const id = params.id as { id: string };
    if (!id) {
      return NextResponse.json(
        {
          message: "Id is required",
        },
        {
          status: 400,
        }
      );
    }
    const data = await req.json();
    const result = await prisma.secus.update({
      where: {
        xcusid: Number(id),
      },
      data: {
        zemail: data?.zemail || undefined,
        xemail: data?.xemail || undefined,
        xaddress1: data?.xaddress1 || undefined,
        xaddress2: data?.xaddress2 || undefined,
        xcity: data?.xcity || undefined,
        xstate: data?.xstate || undefined,
        xcountry: data?.xcountry || undefined,
        xcontact: data?.xcontact || undefined,
      },
    });
    return NextResponse.json({
      message: "User Profile Update successfully",
      result,
    });
  } catch (error) {
    console.error("User Update Error", error);
    return NextResponse.json(
      {
        message: "User Update Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
