import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function GET(req: NextRequest, { params }) {
  try {
    const id = parseInt(params.id);

    if (!id) {
      return NextResponse.json(
        {
          message: "Business ID is required!",
        },
        { status: 500 }
      );
    }

    const result = await prisma.seitem.findMany({
      where: {
        bizid: id,
      },
      include: {
        category: true,
        subcategory: true,
        ecomsales_temp: true,
        ecomsalesdet: true,
      },
    });

    return NextResponse.json({
      message: "items found by business ID!!",
      result,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json(
      {
        message: "Error fetching items",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
