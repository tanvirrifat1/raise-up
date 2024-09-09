import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function GET(req: NextRequest, { params }) {
  const id = params.id as { id: string };
  try {
    const result = await prisma.zuser.findMany({
      where: {
        bizid: Number(id),
      },
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
