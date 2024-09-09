import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";
import { AffiliateUserData } from "../../../../utils/types/types";

export async function GET(request: NextRequest, { params }) {
  const id = parseInt(params.id);

  try {
    const user = await prisma.zbusiness.findUnique({
      where: {
        bizid: Number(id),
      },
    });

    return NextResponse.json({
      message: "single zuser fetched successfully",
      user,
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

export async function PATCH(request: NextRequest, { params }) {
  const id = params.id as { id: string };

  try {
    const data: AffiliateUserData = await request.json();

    const updatedUser = await prisma.zbusiness.update({
      where: {
        bizid: Number(id),
      },
      data: {
        ...data,
        xport: Number(data.xport),
      },
    });

    return NextResponse.json(
      {
        message: "zuser updated successfully",
        updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching user",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }) {
  const id = parseInt(params.id);

  try {
    const user = await prisma.zuser.delete({
      where: {
        xuserid: id,
      },
    });

    return NextResponse.json({
      message: "single zuser delete successfully",
      user,
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
