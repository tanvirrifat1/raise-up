import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function GET() {
  try {
    const result = await prisma.zcodes.findMany({
      where: {
        xcodetype: "type-of-stock",
      },
    });

    return NextResponse.json({
      message: "All stocks get successfully",
      result,
    });
  } catch (error) {
    console.error("Error creating stock:", error);
    return NextResponse.json(
      {
        message: "Error creating stock",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
