import prisma from "../../../../../prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest, { params }) {
  const email = params.email;
  try {
    const result = await prisma.ecomsalesmst.findMany({
      where: {
        zemail: email,
      },
      include: {
        ecomsalesdet: {
          include: {
            seitem: true,
          },
        },
        secus: true,
      },
    });

    return NextResponse.json(
      {
        message: "salesmst get successfully",
        result,
      },
      { status: 201 }
    );
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
