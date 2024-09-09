import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function POST(req: NextRequest) {
  try {
    const { businessId, xcode, xcodetype, name, zactive } = await req.json();

    const result = await prisma.zcodes.create({
      data: {
        bizid: Number(businessId),
        xcode: xcode,
        xusername: name,
        xcodetype: xcodetype,
        zactive: zactive,
      },
    });

    return NextResponse.json(
      {
        message: "codes create successfully",
        result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating codes:", error);
    return NextResponse.json(
      {
        message: "Error creating codes",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const users = await prisma.zcodes.findMany({
      where: {
        xcodetype: "district",
      },
    });

    const dis = await prisma.zcodes.findMany({
      where: {
        xcodetype: "district",
      },
    });

    const umo = await prisma.zcodes.findMany({
      where: {
        xcodetype: "umo",
      },
    });

    return NextResponse.json(users);
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
