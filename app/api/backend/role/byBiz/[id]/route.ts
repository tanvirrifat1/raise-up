import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function GET(req: NextRequest, { params }) {
  try {
    const id = parseInt(params.id);
    if (!id) {
      return NextResponse.json(
        {
          message: "ID is required!",
        },
        { status: 500 }
      );
    }

    const existingRole = await prisma.zbusiness.findUnique({
      where: {
        bizid: id,
      },
    });

    if (!existingRole) {
      return NextResponse.json(
        {
          message: "ID Not Matched!",
        },
        { status: 404 }
      );
    }

    const result = await prisma.zrole.findFirst({
      where: {
        bizid: id,
      },
    });
    return NextResponse.json({
      result,
    });
  } catch (error) {
    console.error("Error fetching roles:", error);
    return NextResponse.json(
      {
        message: "Error fetching roles",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
