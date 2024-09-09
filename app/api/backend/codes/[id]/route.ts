import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

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

    const result = await prisma.zcodes.findUnique({
      where: {
        xcodeid: id,
      },
    });

    return NextResponse.json({
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

export async function PATCH(req: NextRequest, { params }) {
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

    const data = await req.json();

    const updateData = {
      bizid: Number(data.bizid) || undefined,
      xusername: data.xusername || undefined,
      xcodetype: data.xcodetype || undefined,
      xcode: data.xcode || undefined,
      xdepcode: data.xdepcode || undefined,
      xrem: data.xrem || undefined,
      zactive: Number(data?.zactive),
    };

    const result = await prisma.zcodes.update({
      where: {
        xcodeid: id,
      },
      data: updateData,
    });

    return NextResponse.json({
      message: "Item updated successfully",
      role: result,
    });
  } catch (error) {
    console.error("Error updating item:", error);
    return NextResponse.json(
      {
        message: "Error updating item",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }) {
  const id = parseInt(params.id);

  try {
    const user = await prisma.zcodes.delete({
      where: {
        xcodeid: id,
      },
    });

    return NextResponse.json({
      message: "zcodes delete successfully",
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
