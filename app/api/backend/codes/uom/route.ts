import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function GET() {
  try {
    const result = await prisma.zcodes.findMany({
      where: {
        xcodetype: "uom",
      },
    });

    return NextResponse.json({
      message: "All uom get successfully",
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
