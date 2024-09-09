import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function GET() {
  try {
    const result = await prisma.zcodes.findMany({
      where: {
        xcodetype: "currency",
      },
    });

    return NextResponse.json({
      message: "All currency get successfully",
      result,
    });
  } catch (error) {
    console.error("Error creating currency:", error);
    return NextResponse.json(
      {
        message: "Error creating currency",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
