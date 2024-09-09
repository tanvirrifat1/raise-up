import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function GET(req: NextRequest, { params }) {
  try {
    const { searchParams } = new URL(req.url);

    const role = searchParams.get("role");

    const id = parseInt(params.id);

    if (!id) {
      return NextResponse.json(
        {
          message: "Business ID is required!",
        },
        { status: 500 }
      );
    }

    const result = await prisma.zrole.findMany({
      where: {
        bizid: id,
        xrole: role,
      },
    });

    return NextResponse.json({
      message: "User information get by business ID & admin role!!",
      result,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      {
        message: "Error fetching user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
